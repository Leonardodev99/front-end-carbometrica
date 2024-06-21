import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const MainScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Image source={require('../assets/carbometrica.png')}
                    style={styles.carbometrica}
                />
                <Text style={styles.text}>Sua receita calculada como magia!</Text>
                <View style={styles.triangleContainer}>
                    <View style={[styles.circle, styles.topCircle]}>
                        <Text style={styles.circleText}>Calcular carboidrato daquela receita feita em casa?</Text>
                    </View>
                    <View style={[styles.circle, styles.leftCircle]}>
                        <Text style={styles.circleText}>Ter acesso a receitas com a contagem pronta?</Text>
                    </View>
                    <View style={[styles.circle, styles.rightCircle]}>
                        <Text style={styles.circleText}>Glecemia na meta mesmo comendo o bolo de chocolate?</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Eyes')}>
                    <Text style={styles.buttonText}>BOA! QUERO VER!</Text>
                </TouchableOpacity>
                <Text style={styles.texta}>Já usa a CARBO?</Text>
                <TouchableOpacity style={[styles.button, styles.lastButton]} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>PODE ENTRAR!</Text>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 30,
    },
    text: {
        fontSize: 12,
        color: '#FF4500',
        marginTop: 5,
        fontWeight: 'bold',
    },
    carbometrica: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    triangleContainer: {
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#0000FF',
        position: 'absolute',
        padding: 10,
    },
    topCircle: {
        top: 0,
    },
    leftCircle: {
        left: 30,
        bottom: 50,
    },
    rightCircle: {
        right: 30,
        bottom: 50,
    },
    circleText: {
        fontSize: 12,
        color: '#FF4500',
        textAlign: 'center',
    },
    texta: {
        fontSize: 12,
        color: '#FF4500',
        marginTop: 20,  // Ajustado para diminuir a margem superior
        fontWeight: 'bold',
    },
    button: {
        borderWidth: 2,
        borderColor: '#0000FF',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    lastButton: {
        marginTop: 10,  // Ajustado para subir o último botão
    },
    buttonText: {
        color: '#FF4500',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default MainScreen;




