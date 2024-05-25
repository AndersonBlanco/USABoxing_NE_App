import * as React from "react";
import { useState } from "react";
import {TouchableOpacity, View, Text, SafeAreaView, Button, Image, StyleSheet, TextInput} from "react-native"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationActions } from '@react-navigation/native';

import usaBoxingNE_logo from "../imgs/usaBoxingNE_logo.png";
import GoogleLogo from "../imgs/google_logo.png";
import AppleLogo from "../imgs/apple_logo.png";
import ArrowSVG from "../imgs/arrowSVG";
import DumbellSVG from "../imgs/DumbellSVG";

export default function SelectAccType(){
    //falase = fitness account, true = athlete account
    const [accType, setAccType] = useState(false); 
    const 
    typeSelectedContStyle = {
        backgroundColor: "black",
    }, 
    typeSelectedTextStyle = {
        color: "white"
    }

    const FitnessType = (
        <TouchableOpacity style = {styles.gymAccType}>
        <Text style={styles.gymAccType_title}>Fitness</Text>
        <DumbellSVG fill = "black" size = {70} />
       </TouchableOpacity>
    )

    const AthleteType = (
        <TouchableOpacity style = {styles.gymAccType}>
        <Text style={styles.gymAccType_title}>Fitness</Text>
        <DumbellSVG fill = "black" size = {70}/>
       </TouchableOpacity>
    )

    const Types = (
        <View style = {styles.row}>
            {FitnessType}
            {AthleteType}
        </View>
    )

    const NextButton = (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Next</Text>
        </TouchableOpacity>
    )

    const BackButton = (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.button_text}>Back</Text>
        </TouchableOpacity>
    )

    const Buttons = (
        <View style = {styles.column}>
            {NextButton}
            {BackButton}
        </View>
    )

    return(
        <SafeAreaView>
             <View style = {styles.cont}>
                    <Image source={usaBoxingNE_logo} style={styles.logo}/>
                    {Types}
                {Buttons}
                </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    cont:{      
        backgroundColor: "white",
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        paddingTop: 75
    },
    logo:{
        height: 125,
        width: 125,
 
    },
    gymAccType:{
        borderColor: "black",
        borderWidth: 2,
        height: 270,
        textAlign: "center",
        alignItems:"center",
        justifyContent:"center",
        paddingHorizontal: 35,
        borderRadius: 10,

    },
    gymAccType_title:{
        textTransform:"uppercase",
        fontWeight: "500",
        top: -30,
        fontSize: 17
    },
    row:{
         display:"flex",
         flexDirection:"row",
         columnGap: 50,
         bottom: -50
    },
    column:{
        rowGap: 25,
    },
    button:{
        backgroundColor: "black",
         bottom: -100,
        width: 250, 
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 20,
        paddingVertical: 10,
    },
    button_text:{
        color: "white",
        fontSize: 15, 

    },


})