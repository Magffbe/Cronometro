import React from 'react';
import { View, Text, Button } from 'react-native';

const BotonControl = (props) => {
  return (
    <View>
      <Button
        title={props.corriendo ? 'Pausar' : 'Iniciar'}
        onPress={props.controlarCronometro}
      />
      <Button title="Reiniciar" onPress={props.reiniciarCronometro} />
    </View>
  );
};

export default BotonControl;