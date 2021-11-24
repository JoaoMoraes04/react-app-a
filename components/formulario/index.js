import React, {useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native';

export default function Formulario () {
    const {cep, onChangeCEP}= useState('')
    const {cidade, onChangeCidade} = useState('')

    const handleConsultar = () => {
        onChangeCidade(cep)
    }

    return(
        <View>
            <Text>Digite um CEP (somente números):</Text>
            <TextInput value={cep} onChangeText={onChangeCEP} />
            <Button tittle="Consultar" onPress={handleConsultar} />
            <Text></Text>
        </View>
    )
}