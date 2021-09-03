import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Conta() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Meu Perfil</Text>
      <Image
        style={estilo.img}
        source={{
          uri:
            'http://www.rachegebran.com.br/wp-content/uploads/perfil.jpg',
        }}
      />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F0E68C'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0000FF',
    marginBottom: 20,
  },
  img: {
    width: 325,
    height: 225,
  },
});
