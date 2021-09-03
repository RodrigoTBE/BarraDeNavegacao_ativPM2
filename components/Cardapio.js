import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Busca() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Pratos Do Dia!</Text>
      <Image
        style={estilo.imgs}
        source={{
          uri:
            'https://www.conexaoparis.com.br/wp-content/uploads/2015/07/magret-clementine-a.jpg',
        }}
      />
      <Text style={estilo.paragrafo1}>Magret de pato com laranjas</Text>
      <Image
        style={estilo.imgs}
        source={{
          uri:
            'https://www.conexaoparis.com.br/wp-content/uploads/2015/07/lagosta-a.jpg',
        }}
      />
      <Text style={estilo.paragrafo2}>Lagosta cozida e grelhada</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0E68C',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF4500',
    marginBottom: 20,
  },
  paragrafo1: {
    fontSize: 17,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
    textAlign: 'justify',
  },
  paragrafo2: {
    fontSize: 17,
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
  },
  imgs: {
    width: 300,
    height: 200,
  },
});
