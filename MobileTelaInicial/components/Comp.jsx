//uma função retorna valores, essa vai retornar uma interface(usuário vai ver)
import {View, Text, Image, Button}  from "react-native";
import style from "./Comp.style";


//defaul = unica função que retorna o helloworld
export default function Comp()
{
    return(
        
        <View >
            <Image source={require('../assets/pucca.png')} style={style.image}></Image>
            <Text style={style.text}>Nome: Pucca</Text>
            <Text style={style.text1}>Status: Usuário ativo</Text>
            <Button style={style.button} title='Confirmar' onPress={() => alert('Bem-Vindo!!!')}></Button>
        </View>
    )
}




