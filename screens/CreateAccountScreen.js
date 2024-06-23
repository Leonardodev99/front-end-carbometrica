import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const CreateAccountScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hasDiabetes, setHasDiabetes] = useState(null);
  const [caresForDiabetic, setCaresForDiabetic] = useState(null);
  const [usesCarbCounting, setUsesCarbCounting] = useState(null);
  const [diabetesType, setDiabetesType] = useState(null);

  const [errors, setErrors] = useState({}); // Estado para gerenciar erros de validação

  const handleCreateAccount = () => {
    const newErrors = {};

    if (!userName.trim()) {
      newErrors.userName = 'Nome de usuário é obrigatório';
    } else if (!validateUserName(userName)) {
      newErrors.userName = 'Os dois primeiros caracteres devem ser letras';
    }

    if (!email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email inválido';
    }

    if (!password.trim()) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 8) {
      newErrors.password = 'Senha deve ter pelo menos 8 caracteres';
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirmar senha é obrigatório';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Senhas não coincidem';
    }

    if (hasDiabetes === null) {
      newErrors.hasDiabetes = 'Selecione uma opção';
    }

    if (caresForDiabetic === null) {
      newErrors.caresForDiabetic = 'Selecione uma opção';
    }

    if (usesCarbCounting === null) {
      newErrors.usesCarbCounting = 'Selecione uma opção';
    }

    if (diabetesType === null) {
      newErrors.diabetesType = 'Selecione um tipo';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Se não houver erros, prossiga com a criação da conta
      console.log('Criando conta com dados:', {
        userName,
        email,
        password,
        confirmPassword,
        hasDiabetes,
        caresForDiabetic,
        usesCarbCounting,
        diabetesType,
      });

      // Depois de criar a conta chamar 'Main' 
      navigation.navigate('Main'); //
    }
  };

  const validateEmail = (email) => {
    // Expressão regular simples para validação básica de email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateUserName = (userName) => {
    // Verifica se os dois primeiros caracteres são letras
    return /^[a-zA-Z]{2}/.test(userName);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Main')}> 
          <Text style={styles.logoutButtonText}>Sair</Text> 
        </TouchableOpacity>

        <Text style={styles.title}>Criar Conta</Text>

        <TextInput
          style={[styles.input, errors.userName && styles.inputError]}
          placeholder="Nome de usuário"
          onChangeText={setUserName}
          value={userName}
        />
        {errors.userName && <Text style={styles.errorText}>{errors.userName}</Text>}

        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <TextInput
          style={[styles.input, errors.password && styles.inputError]}
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <TextInput
          style={[styles.input, errors.confirmPassword && styles.inputError]}
          placeholder="Confirmar Senha"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry
        />
        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

        <Text style={styles.subtitle}>Queremos te conhecer melhor</Text>

        <View style={styles.questionRow}>
          <View style={styles.question}>
            <Text style={styles.questionText}>Você tem diabetes?</Text>
            <View style={styles.options}>
              <TouchableOpacity
                style={[styles.optionButton, hasDiabetes === true && styles.selectedOption]}
                onPress={() => setHasDiabetes(true)}
              >
                <Text style={styles.optionButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, hasDiabetes === false && styles.selectedOption]}
                onPress={() => setHasDiabetes(false)}
              >
                <Text style={styles.optionButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
            {errors.hasDiabetes && <Text style={styles.errorText}>{errors.hasDiabetes}</Text>}
          </View>

          <View style={styles.question}>
            <Text style={styles.questionText}>Cuida de alguém que tem diabetes?</Text>
            <View style={styles.options}>
              <TouchableOpacity
                style={[styles.optionButton, caresForDiabetic === true && styles.selectedOption]}
                onPress={() => setCaresForDiabetic(true)}
              >
                <Text style={styles.optionButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, caresForDiabetic === false && styles.selectedOption]}
                onPress={() => setCaresForDiabetic(false)}
              >
                <Text style={styles.optionButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
            {errors.caresForDiabetic && <Text style={styles.errorText}>{errors.caresForDiabetic}</Text>}
          </View>
        </View>

        <View style={styles.questionRow}>
          <View style={styles.question}>
            <Text style={styles.questionText}>Usa a contagem de carboidrato com terapia nutricional?</Text>
            <View style={styles.options}>
              <TouchableOpacity
                style={[styles.optionButton, usesCarbCounting === true && styles.selectedOption]}
                onPress={() => setUsesCarbCounting(true)}
              >
                <Text style={styles.optionButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, usesCarbCounting === false && styles.selectedOption]}
                onPress={() => setUsesCarbCounting(false)}
              >
                <Text style={styles.optionButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
            {errors.usesCarbCounting && <Text style={styles.errorText}>{errors.usesCarbCounting}</Text>}
          </View>

          <View style={styles.question}>
            <Text style={styles.questionText}>Qual é o tipo de diabetes?</Text>
            <View style={styles.options}>
              <TouchableOpacity
                style={[styles.optionButton, diabetesType === 0 && styles.selectedOption]}
                onPress={() => setDiabetesType(0)}
              >
                <Text style={styles.optionButtonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, diabetesType === 1 && styles.selectedOption]}
                onPress={() => setDiabetesType(1)}
              >
                <Text style={styles.optionButtonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, diabetesType === 2 && styles.selectedOption]}
                onPress={() => setDiabetesType(2)}
              >
                <Text style={styles.optionButtonText}>2</Text>
              </TouchableOpacity>
            </View>
            {errors.diabetesType && <Text style={styles.errorText}>{errors.diabetesType}</Text>}
          </View>
        </View>

        <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
          <Text style={styles.createButtonText}>Criar Conta</Text>
        </TouchableOpacity>
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
    padding: 20,
    backgroundColor: '#FFFFFF', // Fundo branco
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  inputError: {
    borderColor: 'red', // Cor da borda para erro
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  question: {
    marginBottom: 15,
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15, // Espaço entre as linhas de questões
  },
  questionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  selectedOption: {
    backgroundColor: '#FF4500', // Cor laranja
  },
  optionButtonText: {
    color: '#333',
    textAlign: 'center',
  },
  createButton: {
    backgroundColor: '#FF4500', // Cor laranja
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  createButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  logoutButton: { // Estilos para o botão "Sair"
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF4500',
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateAccountScreen;