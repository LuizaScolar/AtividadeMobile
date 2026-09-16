// o jsx é um html, só que escrito em js 
// importando as coisas 
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Comp from './components/Comp';
import Produto from './components/Produto';

// a View é tipo a div, o que o usuário vai ver.
export default function App() {
  // retorna algo
  return (
    //interface *chamando o style do container
    <View style={styles.container}>
      <Comp/>
      <Produto nome= 'Conceitual' preco={10.00}/>
      
      <Produto nome= 'Conceitual' preco={20.00}/>
      
      <Produto nome= 'Conceitual' preco={30.00}/>
    </View>
  );
}

// um tipo de estilização, como o css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: '20',
    fontWeight: 'bold',
  },
});

// comando pra criar o projeto: npx create-expo-app ProjetoMobile --template blank 
// comando pra caso dê erro: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
// comando pra vizualizar o projeto: npx expo start *precisa estar na mesma net pra ver o app pelo celular