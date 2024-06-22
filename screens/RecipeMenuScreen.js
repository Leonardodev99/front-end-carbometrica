import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const RecipeMenuScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
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
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AllRecipes')}>
                    <Text style={styles.buttonText}>VER MAIS</Text>
                </TouchableOpacity>
                <View style={styles.imageRow}>
                    <View style={styles.item}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../assets/igredientes.jpg')}
                                style={styles.image}
                            />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('NewRecipe')}>
                            <Text style={styles.circleTextBold}>NOVA RECEITA</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <View style={styles.circle}>
                            <Image
                                source={require('../assets/minhas.jpg')}
                                style={styles.image}
                            />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('MyRecipes')}>
                            <Text style={styles.circleTextBold}>MINHAS RECEITAS</Text>
                        </TouchableOpacity>
                    </View>
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
        marginTop: 50,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default RecipeMenuScreen;

