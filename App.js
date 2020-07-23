
import 'react-native-gesture-handler';
import React, { useState, useContext } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from "expo";
import * as Font from "expo-font";
import WelcomePageNavigation from './src/navigation/WelcomepageNavigation';








const AppContainer = (props) => {

  
  return(

  <NavigationContainer>

    <WelcomePageNavigation/>  
  
  </NavigationContainer>
  )};

function App() {

 

  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer/> : <AppLoading/>;
  }
 }
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
     /*  "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "Bahnschrift": require("./src/assets/fonts/bahnschrift.ttf"),
      "Roboto_medium" :  require("./src/assets/fonts/roboto-medium.ttf")
     */})
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
