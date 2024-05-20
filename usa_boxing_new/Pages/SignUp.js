import * as React from "react";
import {View, Text, SafeAreaView, Button, Image, StyleSheet, TextInput} from "react-native"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationActions } from '@react-navigation/native';

import usaBoxingNE_logo from "../imgs/usaBoxingNE_logo.png";

export default function Auth({navigation}){
 
    return(
        <SafeAreaView>
            <View style = {styles.cont}>
                <Image source={usaBoxingNE_logo} style={styles.logo}/>
                <View style = {styles.inputs}>
                    <TextInput placeholder="username" placeholderTextColor={"rgba(0,0,0,.25)"} style = {styles.inputTags}/>
                    <TextInput placeholder="password" placeholderTextColor={"rgba(0,0,0,.25)"} style = {styles.inputTags}/>
                </View>
                <Button title="TestButton (Home)" onPress={() => navigation.replace("Home")}/>
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

    inputs:{
        backgroundColor:"transparent",
        rowGap: 50,
        top: 100
    },
    inputTags:{
        color: "rgba(255,255,255)",
        width: 255,
        textAlign: "left",
        borderBottomColor: "black",
        borderBottomWidth: 1.5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        fontSize: 15
    }
})