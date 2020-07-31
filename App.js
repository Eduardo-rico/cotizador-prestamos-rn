import {Text, View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import React, {useState} from 'react';

import colors from './src/utils/colors.js';

import Form from './src/components/Form';
import Footer from './src/components/Footer.js';

// YellowBox.ignoreWarnings(["Picker has been extracted"]) por si quiero quitar los warnings

const App = () => {
  const [capital, guardarCapital] = useState(null);
  const [interes, guardarInteres] = useState(null);
  const [meses, guardarMeses] = useState(null);

  const calcular = () => {
    console.log(`capital ${capital}, interes: ${interes} meses: ${meses}`);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de préstamos</Text>
        <Form
          guardarCapital={guardarCapital}
          guardarInteres={guardarInteres}
          guardarMeses={guardarMeses}
        />
      </SafeAreaView>
      <View>
        <Text>Hola</Text>
      </View>
      <Footer calcular={calcular} />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
});
