import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';




import  hello from '../Hello';
import  name from '../Name';
/* import Login from '../screens/Login';
import Registrationpage from '../screens/Registrationpage'; */


const WelcomeStack = createStackNavigator();
const WelcomePageNavigation = () => (

    <WelcomeStack.Navigator headerMode='none' initialRouteName='Hello' >
     <WelcomeStack.Screen name='Hello' component={hello} />
     <WelcomeStack.Screen name='name' component={name} />
     {/* <WelcomeStack.Screen name='Login' component={Login} />
     <WelcomeStack.Screen name='Registrationpage' component={Registrationpage} /> */}
    
    </WelcomeStack.Navigator>

)

export default WelcomePageNavigation;