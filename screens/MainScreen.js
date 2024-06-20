import React from "react";
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Image source={require('../assets/carbometrica.png')}
                style={styles.carbometrica}
            />
            <Text style={styles.text}>Sua receita calculada como magia!</Text>
            <View style={[styles.circle, styles.left]}>
                <Text style={styles.circleText}>Calcular carboidrato daquela receita feita em casa?</Text>
            </View>
            <View style={[styles.circle, styles.center]}>
                <Text style={styles.circleText}>Ter acesso a receitas com a contagem pronta?</Text>
            </View>
            <View style={[styles.circle, styles.right]}>
                <Text style={styles.circleText}>Glecemia na meta mesmo comendo o bolo de chocolate?</Text>
            </View>
            <Button title="BOA! QUERO VER!" onPress={() => navigation.navigate('Register')}/>
            <Text style={styles.texta}>Já usa a CARBO?</Text>
            <Button title="PODE ENTRAR!" onPress={() => navigation.navigate('Login')}/>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 50,
    },
    text: {
        fontSize: 12,
        color: '#FF4500',
        marginTop: 10,
        fontWeight: 'bold',
    },
    carbometrica: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
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
        marginTop: 10, 
        padding: 10,
    },
    left: {
        alignSelf: 'flex-start',
        marginLeft: 200, 
    },
    center: {
        alignSelf: 'center',
    },
    right: {
        alignSelf: 'flex-end',
        marginRight: 200, 
    },
    circleText: {
        fontSize: 12,
        color: '#FF4500',
        textAlign: 'center',
    },
    texta: {
        fontSize: 12,
        color: '#FF4500',
        marginTop: 65,
        fontWeight: 'bold',
    },
});

export default MainScreen;
