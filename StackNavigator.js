import { StyleSheet, Text, View , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import Welcomeback from './screens/Welcomeback';
import Homepage from './screens/Homepage';
import Singlepage from './screens/Singlepage';
import CustomHeaderRight from './components/CustomHeaderRight';
import Singlescreen from './screens/Singlescreen';
import Customback from './components/Customback';
import Cart from './components/Cart';
import Category from './screens/Category';
const CustomHeaderLeft = () => {
  return (
    <TouchableOpacity>
     <Text style={{color: '#033BAB', fontWeight:'900'}}>Shop Ex</Text>
    </TouchableOpacity>
  );
};

// Custom header right component

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen} 
        options={{headerShown: false}}/>

    <Stack.Screen name="welcome" component={Welcomeback} 
        options={{headerShown: false}}/>

<Stack.Screen
  name="singlescreen"
  component={Singlescreen}
  options={({ navigation }) => ({
    headerLeft: () => <Customback />,
    headerRight: () => <Cart />,
    headerTitle: '',
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
    headerStyle: {
      backgroundColor: "#fff",
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitleStyle: {
      shadowOpacity: 0,
    },
  })}
/>


<Stack.Screen
  name="Category"
  component={Category}
  options={({ navigation }) => ({
    headerLeft: () => <Customback />,
    headerRight: () => <Cart />,
    headerTitle: '',
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
    headerStyle: {
      backgroundColor: "#fff",
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTitleStyle: {
      shadowOpacity: 0,
    },
  })}
/>

 <Stack.Screen name="Store" component={Homepage} 
      options={({ navigation }) => ({
        headerLeft: () => <CustomHeaderLeft />,
        headerRight: () => <CustomHeaderRight />,
        headerTitle: '',
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: 'bold' },
        headerStyle: { backgroundColor: '#2a485c' },
      })}
      
      />

<Stack.Screen name="Tabs" component={Singlepage} 
      options={({ navigation }) => ({
        headerLeft: () => <CustomHeaderLeft />,
        headerRight: () => <CustomHeaderRight />,
        headerTitle: '',
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: 'bold' },
        headerStyle: {         backgroundColor:'#FAFAFA'},
      })}
      
      />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

