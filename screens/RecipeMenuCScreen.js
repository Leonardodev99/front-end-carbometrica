import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const RecipeMenuCScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.logoutButtonText}>Sair</Text>
                </TouchableOpacity>
                <Image
                    source={require('../assets/carbometrica.png')}
                    style={styles.carbometrica}
                />
                <Text style={styles.text}>TOP 3 CARBO DELÍCIAS</Text>
                <View style={styles.imageRow}>
                    <View style={styles.item}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../assets/batidodemorango.jpg')}
                                style={styles.image}
                            />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails')}>
                            <Text style={styles.circleText}>Batido de Morango</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../assets/macarraobroquiles.jpg')}
                                style={styles.image}
                            />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails')}>
                            <Text style={styles.circleText}>Macarrão de Franco e Brócolis</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../assets/saladadefrutas.jpg')}
                                style={styles.image}
                            />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails')}>
                            <Text style={styles.circleText}>Salada de Frutas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.orangeText}>Achou pouco? Acesse a biblioteca</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllRecipes')}>
                    <Text style={styles.buttonText}>VER MAIS</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={styles.orangeText1}>Para calcular a sua receita, inscreva-se</Text>
                    <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('CreateAccount')}>
                        <Text style={styles.createAccountButtonText}>CRIAR CONTA</Text>
                    </TouchableOpacity>
                </View>
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
        paddingTop: 30, // Subir a imagem da carbometrica ajustando o paddingTop
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF4500',
        marginTop: 40,
    },
    carbometrica: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10, // Reduzir o espaço abaixo da imagem da carbometrica
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    item: {
        alignItems: 'center',
    },
    circle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#ADD8E6',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: '#0000FF',
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        resizeMode: 'cover',
    },
    circleText: {
        fontSize: 12,
        color: '#FF4500',
        textAlign: 'center',
    },
    circleTextBold: {
        fontSize: 12,
        color: '#FF4500',
        textAlign: 'center',
        fontWeight: 'bold', // Adicionar negrito ao texto
    },
    button: {
        backgroundColor: '#FF4500',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    logoutButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: '#FF4500',
        padding: 10,
        borderRadius: 5,
        zIndex: 1, // Coloque o botão no topo de outros elementos
    },
    logoutButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orangeText: {
        color: '#FF4500',
        fontSize: 14,
        marginTop: 70, // Ajuste a margem superior conforme necessário
    },
    footer: {
        flexDirection: 'column', // Mudado para 'column' para colocar os elementos um abaixo do outro
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 10, // Ajuste a margem superior conforme necessário
    },
    orangeText1: {
        color: '#FF4500',
        fontSize: 14,
        marginTop: 30, // Ajuste a margem superior conforme necessário
    },
    createAccountButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginLeft: 10,
        marginTop: 10, // Espaço entre o texto e o botão
    },
    createAccountButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default RecipeMenuCScreen;
