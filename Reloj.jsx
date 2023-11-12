import React from 'react';
import { View, Text } from 'react-native';

const Reloj = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>{formatTiempo(props.tiempo)}</Text>
    </View>
  );
};

const formatTiempo = (segundos) => {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;
  return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
};

export default Reloj;