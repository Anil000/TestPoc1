import React, { Component, useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { StackActions } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import { Checkbox } from "react-native-paper";
import ModalComponent from './component/ModelComponent';

export class name extends Component {
  /* 
    const [name, setName] = useState('');
    const [isHosp, setIsHosp] = useState(false); */

  state = {};


   result = {
    name: "",
    isHosp: false,
    pincode: '',
    booksRead: [],
    Hobbies: [] 
  
  }

   setIsVisible = () => {

    this.setState({isVisible: !this.state.isVisible})
  }
  
  clearDataResult = () => {

    console.log('clear data result');
    this.result = {
      name: "",
      isHosp: false,
      pincode: '',
      booksRead: [],
      Hobbies: [] 
    
    }
  }
  /* componentWillMount(){
    this.getData()
  } */

  componentDidMount(){
    console.log('component did mount called');
    this.getData()
  }


   getData = async () => {
     console.log('get data mthod called')
    try {
      /* let name_asy = await AsyncStorage.getItem('name')
      let isHosp = await AsyncStorage.getItem('isHosp') */

      let State = await AsyncStorage.getItem('state')

      if (State !== null) {
       const stateObj =  JSON.parse(State);
        // value previously stored
        console.log('-------------------------------in Name page state obj is ', stateObj);
        this.setState({...stateObj})

        console.log('the state in name.js is', this.state );

         
        


console.log(this.result)
      }

    } catch (e) {
      // error reading value
      console.log(e)
    }
  }

  async setDataToResult() {

    try {
      /* let name_asy = await AsyncStorage.getItem('name')
      let isHosp = await AsyncStorage.getItem('isHosp') */

      console.log('set data to result called');

      let State = await AsyncStorage.getItem('state')

      if (State !== null) {
       const stateObj =  JSON.parse(State);
        // value previously stored
        console.log('-------------------------------in Name page', stateObj);
        // this.setState({...stateObj})
        //setIsHosp(isHosp)

        console.log('the state in name.js is', this.state );

         
        if(stateObj.name !== null) {
          this.result.name= stateObj.name;
        }

        if(stateObj.isHosp ===  true) {
          this.result.isHosp= stateObj.isHosp;
        }

        if(stateObj.pincode !== null) {
          this.result.pincode= stateObj.pincode;
        }

        if(stateObj.booksRead.alchemist === true) {

          let alchemistBR = 'alchemist'
          this.result.booksRead.push(alchemistBR);
        }
        
        if(stateObj.booksRead.mindfulness === true) {

          let mindfulnessBR = 'mindfulness'
          this.result.booksRead.push(mindfulnessBR);
        }

        
        
        if(stateObj.booksRead.powerOfNow === true) {

          let powerOfNowBR = 'Power of Now'
          this.result.booksRead.push(powerOfNowBR);
        }



        if(stateObj.booksRead.principles === true) {

          let principles = 'Principles'
          this.result.booksRead.push(principles);
        }

        
          this.setIsVisible(true)

console.log(this.result)
      }

    } catch (e) {
      // error reading value
      console.log(e)
    }

  }

  
  render() {
    const {navigation} = this.props

  const  handleSubmit = () => {

      storeData();
      this.setDataToResult();
      
    
     }


  const  setName = (name) => {

      this.setState({ name })
    }
  
   const  setIsHosp = (isHosp) => {
  
      this.setState({ isHosp : isHosp })
    }

    
    
  
    /* useEffect(() => {
  
      try {
        name_asy = await AsyncStorage.getItem('name')
        if (name_asy !== null) {
          // value previously stored
          console.log(name_asy);
        }
      } catch (e) {
        // error reading value
        console.log(e)
      }
    }, []); */
  
  
   
    /* 
      useEffect(() => {
        getData();
    
      }, []); */
  
    
      const goBack= () => {

        storeData();
        navigation.navigate('Hello')

      }
  
  
  
const clearData = async () => {
  
      try {
        console.log('clear method called')
        await AsyncStorage.clear();
      }
      catch (e) {
        console.log(e);
      }
    }
  
  
   const  storeData = async (key, value) => {
      try {
  
        console.log('store data method called');
        await AsyncStorage.setItem("state", JSON.stringify(this.state));
  
        console.log('navigation method will called', value);
  
        // navigation.navigate("Hello"); 
  

  
  
      } catch (e) {
        console.log(e);
      }
    }

    

    return (

      <View style={styles.container}>
        <Text style={styles.TextStyle}>Hi Team</Text>
        <Text style={styles.TextStyle}>Hi Anil</Text>

        <View style={styles.makeItRow}>
          <Text style={styles.TextStyle}>Enter name:  </Text>
          {/* <TextInput placeholder= "enter pin code"  style = {styles.userInput} keyboardType = "number-pad"  onEndEditing = {(e) => setPincode(e.nativeEvent.text)}
       /> */}

          <TextInput placeholder="" defaultValue={this.state.name} style={styles.userInput} onEndEditing={(e) => setName(e.nativeEvent.text)} />
          

          <Checkbox style={styles.Checkbox}
            uncheckedColor='#121212'
            status={this.state.isHosp ? 'checked' : 'unchecked'}
            onPress={() => { setIsHosp(!this.isHosp) }} />

          <Text style={styles.neuromusculartext}>male</Text>




        </View>
        <Text style={styles.TextStyle}>My Name  is : {this.state.name}</Text>

        <TouchableOpacity style={{ backgroundColor: 'red', height: 20 }} onPress={goBack}>

          <Text> Back </Text>

        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: 'red', height: 20 , marginTop: 20}} onPress={handleSubmit}>

          <Text> Submit </Text>

        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: 'red', height: 20, marginTop: 50 }} onPress={() => {
          
          /* this.getData(); */
          clearData(); 
          
          navigation.reset({
            index: 0,
            routes: [{ name: 'Hello' }]
          })
        }}>


          {/*  () => navigation.reset({
        index: 0,
        routes: [{ name: 'Hello' }]
   }) */}


          <Text> clear </Text>

        </TouchableOpacity>

         <ModalComponent  isVisible = {this.state.isVisible} setIsVisable = {this.setIsVisible} result= {this.result} clearDataResult = {this.clearDataResult}/>

      </View>

    );
  }
}

const styles = StyleSheet.create({

  container: {

    /* backgroundColor: 'yellow',
    width: 600,
    height: 600,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center' */
  },

  TextStyle: {
    fontSize: 22,
    /* borderColor: 'red',
    borderWidth: 2 */
  },

  userInput: {

    // borderLeftWidth: 2,
    borderBottomWidth: 2,
    width: 100,
    height: 30,
    borderColor: 'red'

  },

  makeItRow: {

    flexDirection: 'row'
  }
})


export default name;