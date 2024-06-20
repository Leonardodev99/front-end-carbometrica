import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect( () => {
        setTimeout(() => {
            navigation.replace('Main');
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/carbometrica.png')}
                style={styles.carbometrica}
            />
            <Text style={styles.text}>Carbométrica, Ajudando você!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FF4500',
        marginTop: 10,
    },
    carbometrica: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    }
});


export default SplashScreen;