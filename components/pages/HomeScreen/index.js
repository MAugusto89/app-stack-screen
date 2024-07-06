import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { style } from './style'
import ProfileScreen from "../ProfileScreen";

export default function HomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>

      <TouchableOpacity style={style.button} onPress={()=> navigation.navigate ('Profile')}>
        <Text>Tela de Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button} onPress={()=> navigation.navigate ('Config')}>
        <Text>Tela de Configuração</Text>
      </TouchableOpacity>
    </View>
  );
}