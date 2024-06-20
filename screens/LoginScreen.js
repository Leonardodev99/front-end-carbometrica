import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = () => {
        // Simular um processo de login
        if (email === 'tiago@gmail.com' && password === '1234') {
            setMessage('Login successful!');
        } else {
            setMessage('Invalid email or password');
        }
    };

    return (
        <View style={styles.container}>
            
            <Image
                source={require('../assets/carbometrica.png')}
                style={styles.carbometrica}
            />
            
           
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    carbometrica: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 10,
    },
    message: {
        marginTop: 20,
        textAlign: 'center',
        color: 'red',
    },
});

export default LoginScreen;
