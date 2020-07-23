import React, { Component, useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    ScrollView,
    Modal,
    TouchableOpacity,
    KeyboardAvoidingView,
    Button,
    Alert,
    ActivityIndicator,
} from "react-native";
/* import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen"; */
/* import styles from "../styles/MedicalInvestigation_styles"; */
import AsyncStorage from '@react-native-community/async-storage';




 export function ModalComponent({isVisible, setIsVisable, result, clearDataResult}) {
    
    
/* 
     useEffect( () => {
         
        //getData();
       //bindDataToResult();

        


        return () => {
            console.log('cleaned up')
        }
    }, []); */
console.log("the result object is",result);
    

    return (

        
        <Modal
        animationType={"none"} /* transparent={true} */
        visible={isVisible}
        presentationStyle="fullScreen"
        //onRequestClose={() => { this.setModalVisible(false) }}
        >
        
               
                    <View>
                        {/*  <Button title='Cancel' onPress={() => { setIsVisable(!isVisible) }} />
                <Button title='Send mail'  />  */}
     
                {(result.name !== "") &&  (<Text > {result.name} </Text>) }
                {(result.isHosp === true) &&  (<Text > isHosp </Text>) }
                {(result.pincode !== "") &&  (<Text > {result.pincode} </Text>) }
                {(result.booksRead.length !== 0) &&  (<Text > {result.booksRead.join(', ')} </Text>) }
                {(result.name !== "") &&  (<Text > {result.name} </Text>) }
                
                   

                        <TouchableOpacity
                            
                            onPress={() => {
                                setIsVisable(false);
                                clearDataResult();
                            }}
                        >
                            <Text style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>Cancel</Text>
                        </TouchableOpacity>
                        
                    </View>
        
            </Modal>

    )
}

export  default ModalComponent;