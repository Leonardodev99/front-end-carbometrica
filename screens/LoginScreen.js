// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigation = useNavigation();

    const apiUrl = 'http://localhost:3006'; // URL do seu backend

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${apiUrl}/tokens`, {
                email,
                password,
            });

            if (response.status === 200) {
                const token = response.data.token; // Obter o token JWT

                // Armazenar o token JWT:
                await AsyncStorage.setItem('token', token);

                setMessage('Login successful!');
                navigation.navigate('RecipeMenu'); // Navegar para a tela principal
            } else {
                setMessage('Invalid email or password');
            }
        } catch (error) {
            console.error('Erro de login:', error);
            setMessage('Erro ao realizar login. Tente novamente mais tarde.');
        }
    };

    

  const handleForgotPassword = () => {
    // Navegar para a tela de recuperação de senha
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/carbometrica.png')}
        style={styles.carbometrica}
      />
      <TextInput
        style={[styles.input, { marginTop: 100 }]} // Adicionando margem superior ao primeiro campo de entrada
        placeholder="Email"
        placeholderTextColor="#FF4500" // Adicionando cor laranja ao placeholder
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, { marginTop: 30 }]}
        placeholder="Password"
        placeholderTextColor="#FF4500" // Adicionando cor laranja ao placeholder
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>ESQUECEU SUA SENHA?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  carbometrica: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 40, // Adicionando margem superior para mover a imagem para o topo
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alinhando o conteúdo ao topo
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  input: {
    height: 40,
    borderColor: 'orange',
    borderWidth: 0, // Removendo todas as bordas
    borderBottomWidth: 1, // Adicionando apenas a borda inferior
    marginBottom: 12,
    padding: 10,
    width: '80%', // Ajustando o tamanho do campo de entrada
    alignSelf: 'center',
    color: '#FF4500', // Adicionando cor laranja ao texto
    textAlign: 'center', // Centralizando o texto dentro das caixas de entrada
  },
  forgotPasswordText: {
    color: '#FF4500', // Adicionando cor laranja carregado ao texto
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#0000FF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '50%', // Ajustando o tamanho do botão
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FF4500',
    fontWeight: 'bold',
  },
  message: {
    marginTop: 20,
    textAlign: 'center',
    color: 'red',
  },
});

export default LoginScreen;



