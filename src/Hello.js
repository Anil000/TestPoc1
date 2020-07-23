import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'

import { CommonActions } from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';

import { Checkbox } from "react-native-paper";
/*  */


class Hello extends Component {

  state = {
    name: "",
    isHosp: false,
    pincode: '',
    booksRead: {

      alchemist: false,
      mindfulness: false,
      powerOfNow: false,
      principles: false,
      cost: {

        alchemist: "",
        mindfulness: "",
        powerOfNow: "",
        principles: ""

      }
    },
    Hobbies: {
      readingBooks: false,
      walking: false,
      playingchess: false,
      cost: {
        chessSubscription: '',
        readingSubscription: ''
      }
    },
    isVisible: false

  }


  setPincode = (pincode) => {
    this.setState({ pincode: pincode })
    //console.log('setPincode ', this.state)
  }
  setBRAlchemist = (alchemist) => {
    this.setState({ booksRead: { ...this.state.booksRead, alchemist } })
    //console.log('alchemist ', this.state)
  }
  setBRMindfulness = (mindfulness) => {
    this.setState({ booksRead: { ...this.state.booksRead, mindfulness } })
    //console.log('setmindfulness ', this.state)
  }
  setBRPowerOfNow = (powerOfNow) => {
    this.setState({ booksRead: { ...this.state.booksRead, powerOfNow } })
    //console.log('powerof now ', this.state)
  }
  setBRPrinciples = (principles) => {
    this.setState({ booksRead: { ...this.state.booksRead, principles } })
    //console.log('principles ', this.state)
  }
  setReadingBooks = (readingBooks) => {
    this.setState({ Hobbies: { ...this.state.Hobbies, readingBooks } })
    //console.log('Reading books ', this.state)
  }
  setWalking = (walking) => {
    this.setState({ Hobbies: { ...this.state.Hobbies, walking } })
    //console.log('walking ', this.state)
  }
  setPlayingChess = (playingchess) => {
    this.setState({ Hobbies: { ...this.state.Hobbies, playingchess } })
    //console.log('playing chess ', this.state)
  }

  setAlchemistCost = (alchemist) => {
    this.setState({ cost: { ...this.state.booksRead.cost, alchemist } })
  }

  setchessCost = (chessSubscription) => {
    this.setState({ cost: { ...this.state.Hobbies.cost, chessSubscription } })
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      /* let name_asy = await AsyncStorage.getItem('name')
      let isHosp = await AsyncStorage.getItem('isHosp') */
      console.log('get data called')

      let State = await AsyncStorage.getItem('state')

      if (State !== "") {
        let stateObj = JSON.parse(State);
        this.setState({ ...stateObj });
        // value previously stored

        // console.log('Async state-------------------------------', stateObj.pincode);
        // console.log('-------------------------------', this.state);
        //setIsHosp(isHosp)
      }

    } catch (e) {
      // error reading value
      console.log(e)
    }
  }



  //console.log(navigation)

  //var pincode = '';
  /*  const Pincode = (value) => {
 
     //console.log( 'pin code method called' , value);
 
      pincode= value;
 
     console.log(`Pin code method called ${value}`);
 
 
   } */

  /*    const navigateAction = () => {
   
      console.log('navigation method called')
      return(
      CommonActions.navigate({
      name: 'name'
     })
  }
   */



  storeData = async () => {
    try {
      console.log('store data method called');
      await AsyncStorage.setItem('state', JSON.stringify(this.state));



      console.log('navigation method will called', this.state);

      //navigation.navigate('name');
    }



    catch (e) {
      console.log(e);
    }
  }


  /* navigateAction = CommonActions.navigate({
     name: 'name',
      action: NavigationActions.navigate({ routeName: 'NEXT_SCREEN', params: { previous_screen: 'CURRENT_SCREEN' } }), 
   }); */


  render() {

    const { navigation } = this.props;
    return (


      <View style={styles.container}>

        <ScrollView>
          <Text style={styles.TextStyle}>Hi Team</Text>
          <Text style={styles.TextStyle}>Hi Anil</Text>

          <View style={styles.makeItRow}>
            <Text style={styles.TextStyle}>Enter Pin code  </Text>
            {/* <TextInput placeholder= "enter pin code"  style = {styles.userInput} keyboardType = "number-pad"  onEndEditing = {(e) => setPincode(e.nativeEvent.text)}
       /> */}
            <TextInput placeholder="enter pin code" defaultValue={this.state.pincode} style={styles.userInput} keyboardType="number-pad" onChangeText={(text) => this.setPincode(text)}
            />


          </View>
          <Text style={styles.TextStyle}>pincode is : {this.state.pincode}</Text>

          <Checkbox style={styles.Checkbox}
            uncheckedColor='#121212'
            status={this.state.booksRead.alchemist ? 'checked' : 'unchecked'}
            onPress={() => this.setBRAlchemist(!this.state.booksRead.alchemist)} />

          <Text style={styles.neuromusculartext}>alchemist</Text>


          <Checkbox style={styles.Checkbox}
            uncheckedColor='#121212'
            status={this.state.booksRead.mindfulness ? 'checked' : 'unchecked'}
            onPress={() => { this.setBRMindfulness(!this.state.booksRead.mindfulness) }} />

          <Text style={styles.neuromusculartext}>mindfulness</Text>

          <Checkbox style={styles.Checkbox}
            uncheckedColor='#121212'
            status={this.state.booksRead.powerOfNow ? 'checked' : 'unchecked'}
            onPress={() => { this.setBRPowerOfNow(!this.state.booksRead.powerOfNow) }} />

          <Text style={styles.neuromusculartext}>Powerofnow</Text>

          <Checkbox style={styles.Checkbox}
            uncheckedColor='#121212'
            status={this.state.booksRead.principles ? 'checked' : 'unchecked'}
            onPress={() => { this.setBRPrinciples(!this.state.booksRead.principles) }} />

          <Text style={styles.neuromusculartext}>Principles</Text>

          <Checkbox style={styles.Checkbox}
            uncheckedColor='#121212'
            status={this.state.Hobbies.readingBooks ? 'checked' : 'unchecked'}
            onPress={() => { this.setReadingBooks(!this.state.Hobbies.readingBooks) }} />

          <Text style={styles.neuromusculartext}>Reading books</Text>

          <Checkbox style={styles.Checkbox}
            uncheckedColor='#121212'
            status={this.state.Hobbies.walking ? 'checked' : 'unchecked'}
            onPress={() => { this.setWalking(!this.state.Hobbies.walking) }} />

          <Text style={styles.neuromusculartext}>Walking</Text>

          <Checkbox style={styles.Checkbox}
            uncheckedColor='#121212'
            status={this.state.Hobbies.playingchess ? 'checked' : 'unchecked'}
            onPress={() => { this.setPlayingChess(!this.state.Hobbies.playingchess) }} />

          <Text style={styles.neuromusculartext}>Playing chess</Text>

          <TextInput placeholder="enter alchemist book cost" defaultValue={this.state.booksRead.cost.alchemist} style={styles.userInput} keyboardType="number-pad" onChangeText={(text) => this.setAlchemistCost(text)}
          />

          <TextInput placeholder="" defaultValue={this.state.booksRead.cost.powerOfNow} style={styles.userInput} keyboardType="number-pad" onChangeText={(text) => this.setPincode(text)}
          />

          <TextInput placeholder="enter alchemist book cost" defaultValue={this.state.booksRead.cost.principles} style={styles.userInput} keyboardType="number-pad" onChangeText={(text) => this.setPincode(text)}
          />

          <TextInput placeholder="chessSubscriptionCost" defaultValue={this.state.booksRead.cost.principles} style={styles.userInput} keyboardType="number-pad" onChangeText={(text) => this.setchessCost(text)}
          />


          <TouchableOpacity style={{ backgroundColor: 'red', height: 20 }} onPress={this.storeData}>


            <Text>continue</Text>

          </TouchableOpacity>

          <TouchableOpacity style={{ backgroundColor: 'red', height: 20, marginTop: 20 }} onPress={console.log('the state is', this.state)}>


            <Text>test</Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'red', height: 20, marginTop: 20 }} onPress={() => { navigation.navigate('name') }}>


            <Text>navigate</Text>

          </TouchableOpacity>
        </ScrollView>
      </View>


    )
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


export default Hello;