import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyRecipeScreen = () => {
  const [receitas, setReceitas] = useState([]);
  const navigation = useNavigation();

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      return token;
    } catch (error) {
      console.error('Erro ao obter token:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const token = await getToken();
        if (!token) {
          Alert.alert('Erro', 'Você precisa fazer login para visualizar suas receitas.');
          navigation.navigate('Login');
          return;
        }

        const response = await axios.get('http://localhost:3006/receitas/minhas', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.message) {
          // Nenhuma receita cadastrada
          setReceitas([]);
          Alert.alert('Informação', response.data.message);
        } else {
          // Formatar carboidrato para incluir 'g'
          const formattedReceitas = response.data.map((receita) => ({
            ...receita,
            carboidrato: `${receita.carboidrato}g`,
          }));
          setReceitas(formattedReceitas);
        }
      } catch (error) {
        console.error('Erro ao buscar receitas:', error.response?.data || error.message);
        if (error.response?.status === 401) {
          Alert.alert('Sessão Expirada', 'Por favor, faça login novamente.');
          await AsyncStorage.removeItem('token');
          navigation.navigate('Login');
        } else {
          Alert.alert('Erro', 'Não foi possível carregar suas receitas. Tente novamente.');
        }
      }
    };

    fetchReceitas();
  }, [navigation]);

  const handleReceitaPress = (receita) => {
    // Navegar para a tela de detalhes da receita
    navigation.navigate('RecipeDetails', { receita });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>BIBLIOTECA DE RECEITAS</Text>
        <Text style={styles.subHeaderText}>Hoje eu quero comer...</Text>
        <View style={styles.line}></View>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Receita</Text>
            <Text style={styles.tableHeaderText}>Carboidrato</Text>
          </View>
          {receitas.length === 0 ? (
            <Text style={styles.noRecipesText}>Nenhuma receita cadastrada.</Text>
          ) : (
            receitas.map((item) => (
              <View key={item.id} style={styles.tableRow}>
                <TouchableOpacity onPress={() => handleReceitaPress(item)}>
                  <Text style={styles.tableRowTextLink}>{item.nome}</Text>
                </TouchableOpacity>
                <Text style={styles.tableRowText}>{item.carboidrato}</Text>
              </View>
            ))
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    backgroundColor: '#FF4500',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#FF4500',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#0000FF',
    textAlign: 'center',
    marginBottom: 10,
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: '#0000FF',
    marginBottom: 20,
  },
  table: {
    width: '100%',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  tableRowText: {
    fontSize: 16,
  },
  tableRowTextLink: {
    fontSize: 16,
    color: '#0000FF',
    textDecorationLine: 'underline',
  },
  noRecipesText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default MyRecipeScreen;