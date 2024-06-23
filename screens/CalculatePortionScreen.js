import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CalculatePortionScreen = () => {
  const navigation = useNavigation();
  const [glicemia, setGlicemia] = useState('');
  const [sensibilidadeInsulina, setSensibilidadeInsulina] = useState('');
  const [quantidadeRecomendada, setQuantidadeRecomendada] = useState(null);

  const [errors, setErrors] = useState({}); // Estado para gerenciar erros

  const handleCalculate = () => {
    const newErrors = {};

    if (!glicemia.trim()) {
      newErrors.glicemia = 'Glicemia é obrigatória';
    } else if (isNaN(glicemia) || parseFloat(glicemia) <= 0) {
      newErrors.glicemia = 'Glicemia deve ser um número positivo';
    }

    if (!sensibilidadeInsulina.trim()) {
      newErrors.sensibilidadeInsulina = 'Sensibilidade à insulina é obrigatória';
    } else if (isNaN(sensibilidadeInsulina) || parseFloat(sensibilidadeInsulina) < 1 || parseFloat(sensibilidadeInsulina) > 10) {
      newErrors.sensibilidadeInsulina = 'Sensibilidade à insulina deve ser um número entre 1 e 10';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Se não houver erros, efetue o cálculo
      const quantidade = parseFloat(glicemia) * parseFloat(sensibilidadeInsulina) / 10;
      setQuantidadeRecomendada(quantidade.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Calculadora de Porções</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Nível de Glicemia (mg/dL):</Text>
        <TextInput
          style={[styles.input, errors.glicemia && styles.inputError]}
          keyboardType="numeric"
          value={glicemia}
          onChangeText={setGlicemia}
        />
        {errors.glicemia && <Text style={styles.errorText}>{errors.glicemia}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Sensibilidade à Insulina (escala 1-10):</Text>
        <TextInput
          style={[styles.input, errors.sensibilidadeInsulina && styles.inputError]}
          keyboardType="numeric"
          value={sensibilidadeInsulina}
          onChangeText={setSensibilidadeInsulina}
        />
        {errors.sensibilidadeInsulina && <Text style={styles.errorText}>{errors.sensibilidadeInsulina}</Text>}
      </View>

      <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
        <Text style={styles.calculateButtonText}>Calcular</Text>
      </TouchableOpacity>

      {quantidadeRecomendada !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Quantidade Recomendada: {quantidadeRecomendada}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: {
    backgroundColor: '#FF4500', // Laranja
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4500', // Laranja
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  inputError: {
    borderColor: 'red', // Cor da borda para erro
  },
  calculateButton: {
    backgroundColor: '#FF4500', // Laranja
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  calculateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default CalculatePortionScreen;