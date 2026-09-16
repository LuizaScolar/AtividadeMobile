import {View, Text, Image, Button} from "react-native";
import style from "./Produto.style";

export default function Produto(props){

    return(
        <View >
            <Image source={require('../assets/conceitual.png')} style={style.image}></Image>
            <Text style={style.text}>Nome: Quadro Conceitual</Text>
            <Text style={style.text1}>Preco: </Text>
            <Button style={style.button} title='Confirmar' onPress={() => alert('Item Comprado!!!')}></Button>
        </View>
    )

}