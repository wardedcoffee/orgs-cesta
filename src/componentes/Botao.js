import React from "react";
import { StyleSheet, TouchableOpacity, Text  } from "react-native";


export default function Botao({ children, style }) {
   let estilo = estilos.botao;
   let estilozo = estilos.textoBotao;
   
   return <TouchableOpacity style={[style, estilo]}>
            <Text style={[style, estilozo]}>{ children }</Text>
        </TouchableOpacity> 
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})