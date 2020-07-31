import {Text, View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';

import colors from './src/utils/colors.js';

import Form from './src/components/Form';
import Footer from './src/components/Footer.js';
import Resultado from './src/components/Resultado.js';

// YellowBox.ignoreWarnings(["Picker has been extracted"]) por si quiero quitar los warnings

const App = () => {
  const [capital, guardarCapital] = useState(null);
  const [interes, guardarInteres] = useState(null);
  const [meses, guardarMeses] = useState(null);
  const [total, guardarTotal] = useState({});
  const [error, guardarError] = useState('');

  useEffect(() => {
    if (capital && interes && meses) {
      calcular();
    } else {
      resetError();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [capital, interes, meses]);

  const calcular = () => {
    resetError();
    console.log(`capital ${capital}, interes: ${interes} meses: ${meses}`);
    if (!capital) {
      guardarError('No dijiste cuanto dinero');
    } else if (!interes) {
      guardarError('no dijiste el interes');
    } else if (!meses) {
      guardarError('no dijiste los meses');
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -meses)) / i);
      guardarTotal({
        pagoMensual: fee.toFixed(2),
        pagoTotal: (fee * meses).toFixed(2),
      });
    }
  };

  const resetError = () => {
    guardarError(null);
    guardarTotal({});
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
      <Resultado
        capital={capital}
        interes={interes}
        meses={meses}
        total={total}
        error={error}
      />
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
