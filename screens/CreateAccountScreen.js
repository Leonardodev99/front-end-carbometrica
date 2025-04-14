import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

const CreateAccountScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [temDiabete, setTemDiabete] = useState(null);
  const [cuidaDiabete, setCuidaDiabete] = useState(null);
  const [usaAContagem, setUsaAContagem] = useState(null);
  const [tipoDeDiabete, setTipoDeDiabete] = useState(null);

  const [errors, setErrors] = useState({}); 

  const handleCreateAccount = async () => {
    const newErrors = {};

    if (!nome.trim()) {
      newErrors.userName = 'Nome de usuário é obrigatório';
    } else if (!validateUserName(nome)) {
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

    if (temDiabete === null) {
      newErrors.temDiabete = 'Selecione uma opção';
    }

    if (cuidaDiabete === null) {
      newErrors.cuidaDiabete = 'Selecione uma opção';
    }

    if (usaAContagem === null) {
      newErrors.usaAContagem = 'Selecione uma opção';
    }

    if (tipoDeDiabete === null) {
      newErrors.tipoDeDiabete = 'Selecione um tipo';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Criando conta com dados:', {
        nome,
        email,
        password,
        confirmPassword,
        temDiabete,
        cuidaDiabete,
        usaAContagem,
        tipoDeDiabete,
      });

      try {
        const response = await axios.post('http://localhost:3006/users/', {
          nome,
          email,
          password,
          temDiabete,
          cuidaDiabete,
          usaAContagem,
          tipoDeDiabete,
        });
        
        console.log('Resposta do servidor:', response.data);
        
        navigation.navigate('Main');
      } catch (error) {
        console.error('Erro ao criar a conta:', error);
        setErrors({ apiError: 'Ocorreu um erro ao criar a conta. Por favor, tente novamente.' });
      }
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateUserName = (nome) => {
    return /^[a-zA-Z]{2}/.test(nome);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Main')}> 
          <Text style={styles.logoutButtonText}>Sair</Text> 
        </TouchableOpacity>

        <Text style={styles.title}>Criar Conta</Text>

        {errors.apiError && <Text style={styles.errorText}>{errors.apiError}</Text>}

        <TextInput
          style={[styles.input, errors.nome && styles.inputError]}
          placeholder="Nome de usuário"
          onChangeText={setNome}
          value={nome}
        />
        {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}

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
                style={[styles.optionButton, temDiabete === "sim" && styles.selectedOption]}
                onPress={() => setTemDiabete("sim")}
              >
                <Text style={styles.optionButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, temDiabete === "não" && styles.selectedOption]}
                onPress={() => setTemDiabete("não")}
              >
                <Text style={styles.optionButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
            {errors.temDiabete && <Text style={styles.errorText}>{errors.temDiabete}</Text>}
          </View>

          <View style={styles.question}>
            <Text style={styles.questionText}>Cuida de alguém que tem diabetes?</Text>
            <View style={styles.options}>
              <TouchableOpacity
                style={[styles.optionButton, cuidaDiabete === "sim" && styles.selectedOption]}
                onPress={() => setCuidaDiabete("sim")}
              >
                <Text style={styles.optionButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, cuidaDiabete === "não" && styles.selectedOption]}
                onPress={() => setCuidaDiabete("não")}
              >
                <Text style={styles.optionButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
            {errors.cuidaDiabete && <Text style={styles.errorText}>{errors.cuidaDiabete}</Text>}
          </View>
        </View>

        <View style={styles.questionRow}>
          <View style={styles.question}>
            <Text style={styles.questionText}>Usa a contagem de carboidrato com terapia nutricional?</Text>
            <View style={styles.options}>
              <TouchableOpacity
                style={[styles.optionButton, usaAContagem === "sim" && styles.selectedOption]}
                onPress={() => setUsaAContagem("sim")}
              >
                <Text style={styles.optionButtonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, usaAContagem === "não" && styles.selectedOption]}
                onPress={() => setUsaAContagem("não")}
              >
                <Text style={styles.optionButtonText}>Não</Text>
              </TouchableOpacity>
            </View>
            {errors.usaAContagem && <Text style={styles.errorText}>{errors.usaAContagem}</Text>}
          </View>

          <View style={styles.question}>
            <Text style={styles.questionText}>Qual é o tipo de diabetes?</Text>
            <View style={styles.options}>
              <TouchableOpacity
                style={[styles.optionButton, tipoDeDiabete === 0 && styles.selectedOption]}
                onPress={() => setTipoDeDiabete(0)}
              >
                <Text style={styles.optionButtonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, tipoDeDiabete === 1 && styles.selectedOption]}
                onPress={() => setTipoDeDiabete(1)}
              >
                <Text style={styles.optionButtonText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton, tipoDeDiabete === 2 && styles.selectedOption]}
                onPress={() => setTipoDeDiabete(2)}
              >
                <Text style={styles.optionButtonText}>2</Text>
              </TouchableOpacity>
            </View>
            {errors.tipoDeDiabete && <Text style={styles.errorText}>{errors.tipoDeDiabete}</Text>}
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
    backgroundColor: '#FFFFFF', 
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
    borderColor: 'red', 
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
    marginBottom: 15, 
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
    backgroundColor: '#FF4500', 
  },
  optionButtonText: {
    color: '#333',
    textAlign: 'center',
  },
  createButton: {
    backgroundColor: '#FF4500', 
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
  logoutButton: { 
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