import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewRecipeScreen = () => {
  const [nome, setNome] = useState('');
  const [carboidrato, setCarboidrato] = useState('');
  const [ingredientes, setIngredientes] = useState([
    { nome: '', quantidade: '', carboidrato: '' },
  ]);
  const [modoPreparo, setModoPreparo] = useState('');
  const navigation = useNavigation();

  const handleSave = () => {
    // Validação dos campos
    if (nome.trim() === '' || modoPreparo.trim() === '' || ingredientes.some(ingrediente => ingrediente.nome.trim() === '' || ingrediente.quantidade.trim() === '' || ingrediente.carboidrato.trim() === '')) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Lógica para salvar a receita (implemente aqui)

    // Mensagem de sucesso
    Alert.alert('Sucesso', 'Receita cadastrada com sucesso!');

    // Navegar de volta para a tela principal de receitas
    navigation.navigate('RecipeMenu');
  };

  const addIngredient = () => {
    setIngredientes([...ingredientes, { nome: '', quantidade: '', carboidrato: '' }]);
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredientes = [...ingredientes];
    updatedIngredientes[index][field] = value;
    setIngredientes(updatedIngredientes);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>

          <Text style={styles.headerText}>Cadastrar Nova Receita</Text>

          <TouchableOpacity onPress={() => navigation.navigate('IngredientSearch')} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Consultar Ingrediente</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Nome da Receita"
          value={nome}
          onChangeText={setNome}
        />

        <View style={styles.carboidratoContainer}>
          <Text style={styles.label}>Carboidratos (g):</Text>
          <Text style={styles.carboidratoValue}>{carboidrato}</Text>
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderCell}>Ingrediente</Text>
            <Text style={styles.tableHeaderCell}>Quantidade</Text>
            <Text style={styles.tableHeaderCell}>Carboidrato (g)</Text>
          </View>

          {ingredientes.map((ingrediente, index) => (
            <View key={index} style={styles.tableRow}>
              <TextInput
                style={styles.tableInput}
                placeholder="Nome do Ingrediente"
                value={ingrediente.nome}
                onChangeText={(value) => handleIngredientChange(index, 'nome', value)}
              />
              <TextInput
                style={styles.tableInput}
                placeholder="Quantidade"
                value={ingrediente.quantidade}
                onChangeText={(value) => handleIngredientChange(index, 'quantidade', value)}
              />
              <TextInput
                style={styles.tableInput}
                placeholder="Carboidratos (g)"
                value={ingrediente.carboidrato}
                onChangeText={(value) => handleIngredientChange(index, 'carboidrato', value)}
                keyboardType="numeric"
              />
            </View>
          ))}

          <TouchableOpacity onPress={addIngredient} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Modo de Preparo"
          multiline
          numberOfLines={4}
          value={modoPreparo}
          onChangeText={setModoPreparo}
        />

        <Button title="Salvar Receita" onPress={handleSave} />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4500',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  searchButton: {
    padding: 10,
  },
  searchButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
  },
  carboidratoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  carboidratoValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    padding: 10,
  },
  tableHeaderCell: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  tableInput: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    marginRight: 5,
  },
  addButton: {
    backgroundColor: '#FF4500',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default NewRecipeScreen;
