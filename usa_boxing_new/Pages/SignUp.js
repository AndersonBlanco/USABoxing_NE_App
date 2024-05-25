import * as React from "react";
import {TouchableOpacity, View, Text, SafeAreaView, Button, Image, StyleSheet, TextInput} from "react-native"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationActions } from '@react-navigation/native';

import usaBoxingNE_logo from "../imgs/usaBoxingNE_logo.png";
import GoogleLogo from "../imgs/google_logo.png";
import AppleLogo from "../imgs/apple_logo.png";
import ArrowSVG from "../imgs/arrowSVG";

const inputForm_from_top_Position = 70; 
export default function SignUp({navigation}){
    const SignUpButton = (
        <TouchableOpacity style = {styles.SignUpButton} onPress={() => navigation.replace("SelectAccType")}>
            <Text style = {styles.signUpText}>Select Accout Type  <ArrowSVG/></Text>
        </TouchableOpacity>
     )
    
     const SignInButton = (
        <View style = {styles.signUp}>
            <Text>Have an account?</Text>
        <TouchableOpacity style = {styles.signUpTextCont}>
            <Text style = {styles.signInText} onPress={() => navigation.replace("SignIn")}>SignIn</Text>
        </TouchableOpacity>
        </View>
     )
    
    const ResetAcc = (
        <View style = {[styles.signUp, {top: inputForm_from_top_Position * 2.5}]}>
            <Text>Forgot username / password?</Text>
        <TouchableOpacity style = {styles.signUpTextCont}>
            <Text style = {styles.signInText} onPress={() => navigation.replace("Home")}>reset</Text>
        </TouchableOpacity>
        </View>
    
     )
    
     const AuthPartitioners = (
        <View style= {styles.authPartitionsSection}>
            <Image source = {GoogleLogo} style = {styles.authPartitionsIcons}/>
            <Image source = {AppleLogo} style = {styles.authPartitionsIcons}/>
        </View>
     )
        return(
            <SafeAreaView>
                <View style = {styles.cont}>
                    <Image source={usaBoxingNE_logo} style={styles.logo}/>
                    <View style = {styles.inputs}>
                        <TextInput placeholder="username" placeholderTextColor={"rgba(0,0,0,.25)"} style = {styles.inputTags}/>
                        <TextInput placeholder="email" placeholderTextColor={"rgba(0,0,0,.25)"} style = {styles.inputTags}/>
                        <TextInput placeholder="password" placeholderTextColor={"rgba(0,0,0,.25)"} style = {styles.inputTags}/>
                    </View>
                    {SignInButton}
                    
                    <View style = {{rowGap: -150}}>
                        {SignUpButton}
                        {ResetAcc}
                    </View>
                    {AuthPartitioners}
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
        rowGap: 34,
        top: inputForm_from_top_Position
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
    },
    SignUpButton:{
        backgroundColor:"black",
        top: inputForm_from_top_Position *1.55,
        width: 250, 
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 20,
        paddingVertical: 10,
        left: 7
    },
    signUpText:{
        color: "white",
        fontSize: 15
    },
    signUp:{
        top: inputForm_from_top_Position *2.9,
        alignItems:"center",
        justifyContent:"flex",
        flexDirection:"row"
    },
    signUpTextCont:{
     marginLeft: 5
    },
    signInText:{
        color: "blue",
        textDecorationLine:"underline",

    },
    authPartitionsSection:{
        justifyContent:"flex",
        flexDirection:"row",
        top: inputForm_from_top_Position *3.1,
        columnGap: 50
    },
    authPartitionsIcons:{
        height: 50,
        width: 50,
      
    }
})