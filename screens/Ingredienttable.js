import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IngredientesScreen = () => {
  const navigation = useNavigation();
  const [ingredientes, setIngredientes] = useState([]);

  // Simulação de dados de ingredientes
  useEffect(() => {
    const mockIngredientes = [
      { id: 1, nome: 'Arroz', carboidrato: 45 },
      { id: 2, nome: 'Feijão', carboidrato: 20 },
      { id: 3, nome: 'Batata', carboidrato: 15 },
    ];
    setIngredientes(mockIngredientes);
  }, []);

  const handleNaoEncontrou = async () => {
    const url = 'https://faculdadesantacasabh.org.br/wp-content/uploads/2019/11/Tabela-de-bolso-Contagem-de-Carboidratos.pdf';
    await Linking.openURL(url);
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Ingredientes Cadastrados</Text>
        <TouchableOpacity onPress={handleNaoEncontrou} style={styles.naoEncontrouButton}>
          <Text style={styles.naoEncontrouButtonText}>Não encontrou?</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={ingredientes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.id}>ID: {item.id}</Text>
            <Text style={styles.nome}>Nome: {item.nome}</Text>
            <Text style={styles.carboidrato}>Carboidrato (g): {item.carboidrato}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#007bff', // Azul
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  naoEncontrouButton: {
    padding: 10,
  },
  naoEncontrouButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  id: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nome: {
    fontSize: 16,
  },
  carboidrato: {
    fontSize: 16,
  },
});

export default IngredientesScreen;