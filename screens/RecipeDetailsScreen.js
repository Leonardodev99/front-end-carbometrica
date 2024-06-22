import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RecipeDetailsScreen = () => {
  const navigation = useNavigation();

  const handleShareOnFacebook = () => {
    // Substitua "https://www.facebook.com/sharer/sharer.php?u=" pelo link da sua receita
    const url = 'https://www.facebook.com/sharer/sharer.php?u=';
    Linking.openURL(url);
  };

  const handleShareOnWhatsApp = () => {
    // Substitua "whatsapp://send?text=" pelo link da sua receita
    const url = 'whatsapp://send?text=';
    Linking.openURL(url);
  };

  const handleInfoPress = () => {
    // Navegar para a tela de cálculo de porções (a ser implementada)
    navigation.navigate('CalculatePortion');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.menuIcon}>
            <View style={styles.menuLine} />
            <View style={styles.menuLine} />
            <View style={styles.menuLineBlue} />
          </View>
        </TouchableOpacity>
        <Text style={styles.recipeTitle}>Nome da Receita</Text>
        <View style={styles.shareIcons}>
          <TouchableOpacity onPress={handleShareOnFacebook}>
            <View style={styles.facebookIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShareOnWhatsApp}>
            <View style={styles.whatsappIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>INGREDIENTES</Text>
        <View style={styles.blueLine} />

        <View style={styles.ingredientsTable}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Nome</Text>
            <Text style={styles.tableHeaderText}>Quantidade</Text>
            <Text style={styles.tableHeaderText}>Carboidrato</Text>
          </View>
          {/* Tabela de ingredientes aqui */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Farinha</Text>
            <Text style={styles.tableCell}>200g</Text>
            <Text style={styles.tableCell}>30g</Text>
          </View>
          {/* Adicione mais linhas de ingredientes conforme necessário */}
        </View>

        <Text style={styles.note}>Se a quantidade for 0, considere a seu gosto</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>MODO DE PREPARO</Text>
        <Text style={styles.preparationText}>Aqui vai a descrição detalhada do modo de preparo da receita.</Text>
      </View>

      <TouchableOpacity onPress={handleInfoPress} style={styles.infoButton}>
        <Text style={styles.infoButtonText}>Deseja saber a quantidade certa a comer para não passar mal?</Text>
      </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuIcon: {
    width: 20,
    height: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuLine: {
    width: 20,
    height: 3,
    backgroundColor: 'orange',
    marginBottom: 2,
  },
  menuLineBlue: {
    width: 20,
    height: 3,
    backgroundColor: 'blue',
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
  },
  shareIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  facebookIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#3b5998', // Azul do Facebook
    marginRight: 10,
    borderRadius: 5,
  },
  whatsappIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#25D366', // Verde do WhatsApp
    borderRadius: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 10,
  },
  blueLine: {
    height: 2,
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  ingredientsTable: {
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  tableHeaderText: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tableCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    textAlign: 'center',
  },
  note: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
  preparationText: {
    fontSize: 14,
    marginBottom: 20,
  },
  infoButton: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  infoButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RecipeDetailsScreen;