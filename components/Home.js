import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Seja Bem Vindo</Text>
      <Text style={estilo.titulo2}>Ao Nosso Restaurante!</Text>
      <Image
        style={estilo.img}
        source={{
          uri:
            'https://offloadmedia.feverup.com/saopaulosecreto.com/wp-content/uploads/2020/11/12044156/lassu-restaurante-1024x576.jpg',
        }}
      />
      <Text style={estilo.paragrafo}>
        Um restaurante de pratos típicos da culinária francesa, com um ambiente
        aconchegante, um atendimento acolhedor e proativo e um cardápio variado
        e requentado.
      </Text>
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
  },
  titulo2: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#FF4500',
  },
  paragrafo: {
    fontSize: 17,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    textAlign:'justify',
  },
  img: {
    width: 325,
    height: 225,
  },
});
