import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Resultado = ({error, capital, interes, meses, total}) => {
  return (
    <View style={styles.contenedor}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>Resumen</Text>
        </View>
      )}
      <DataResult
        title={'Cantidad solicitada: '}
        valores={`${capital} pesos`}
      />
      <DataResult title={'Interés mensual: '} valores={`${interes} %`} />
      <DataResult title={'Plazos: '} valores={`${meses} meses`} />
      <DataResult
        title={'Pago mensual: '}
        valores={`${total.pagoMensual} pesos`}
      />
      <DataResult title={'Pago total: '} valores={`${total.pagoTotal} pesos`} />
      <View>
        <Text style={styles.error}> {error}</Text>
      </View>
    </View>
  );
};

export default Resultado;

const styles = StyleSheet.create({
  contenedor: {
    marginHorizontal: 40,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
  boxResult: {
    padding: 25,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  valores: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});

const DataResult = (props) => {
  const {title, valores} = props;
  return (
    <View style={styles.valores}>
      <Text>{title} </Text>
      <Text>{valores} </Text>
    </View>
  );
};
