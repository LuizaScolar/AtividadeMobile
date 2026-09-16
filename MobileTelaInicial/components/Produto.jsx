import { Button } from "react-native";
import {View, Text, Image} from "react-native";

export default function Produto(){

    return(
        <View>
            <Image source={require("../assets/pucca.png")} />
            <Text>Pucca</Text>
            <Button title="Comprar" onPress={()=> alert("Comprado!!")}/>
        </View>
    )

}