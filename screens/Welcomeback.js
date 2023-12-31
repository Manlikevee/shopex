import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Welcomeback = () => {
  const route = useRoute();
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [password, setPassword] = useState('');
  const [loadingbar, Setloadingbar] = useState(false)
  const id = route?.params?.email
  const username = route?.params?.username
  const navigation = useNavigation();

  const handleProceed = async () => {
    if (!password.trim()) {
      Toast.show({
        type: 'error',
        text1: 'Password cannot be empty',
      });
      console.log('error');
      return;
    }

    try {
      Setloadingbar(true);


      const requestBody = {
        email: id,
        password: password,
      };

      // Set a timeout of 20 seconds (20000 milliseconds)
      const timeout = 25000;

      // Use Promise.race to handle the first promise that resolves or rejects
      const response = await Promise.race([
        axios.post('https://vee-commerce.cyclic.app/user/signIn', requestBody),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Request timed out')), timeout)
        ),
      ]);

      Setloadingbar(false);

      // Assuming the response contains a token or user data
      // You may need to adapt this based on the actual API response
      const token = response.data;
      console.log(token);
      await AsyncStorage.setItem('my-access-key', response?.data?.accessToken);
      await AsyncStorage.setItem('my-refresh-key', response.data.refreshToken);
      navigation.replace('Tabs');

    } catch (error) {
      console.log(error.response?.data);
      console.log(error?.message)
      if (error.message === 'Request timed out') {
        Toast.show({
          type: 'error',
          text1: 'Request timed out. Please try again.',
        });
      } else if (error.response?.data) {
        console.log('ff')
        Toast.show({
          type: 'error',
          text1: error?.response?.data?.message,
        });
        Setloadingbar(false);
      } 
       else {
        setError('An error occurred while processing your request');
      }

      Setloadingbar(false);
      // Toast.show({
      //   type: 'error',
      //   text1: 'Request timed out. Please try again.',
      // });
      setUserData(null); // Clear user data in case of an error
    }
  };


  return (
    <View style={styles.container}>
        <View style={styles.top}>
        <Image
         source={require('../assets/3.jpg')}
          style={styles.heroImage}
          resizeMode="cover">

        </Image>

        </View >
        <View style={styles.bottom}>
          <View style={styles.bottomcontent}>
            <View style={styles.logocenter}>
            <Image
         source={require('../assets/grp.png')}
          style={styles.logoImage}
          resizeMode="contain">

        </Image>
            </View>

          <Text style={styles.txtcentertwo}> Login To Continue </Text>

      <View style={styles.buttongroup}>
      <Text>Welcome back, {username}</Text>
     
     <View>
     <Text style={styles.placeholder}>Enter Password</Text>
      <TextInput style={styles.myinput}
        placeholder={'••••••••••'}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
      />
        
        </View> 
     
        {loadingbar ?  
     <TouchableOpacity
     style={styles.bluebtn} 
        onPress={() => {
        
    
      }}
      >



<ActivityIndicator size="small" color="#d7c49e"   />

      </TouchableOpacity> :
        
        <TouchableOpacity
        style={styles.bluebtn} 
        onPress={() => {
            handleProceed()
      
        }}
      >



<Text style={styles.bluebtntext}>Sign in</Text>

      </TouchableOpacity>

      }


      </View>

      <Text style={styles.alreadyhave} > Not {username}? <Text style={styles.boldblue}>Switch Account</Text>  </Text>
          </View>
  
      </View>
    </View>
  )
}

export default Welcomeback

const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logocenter: {
        
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      bluebtn:{
backgroundColor:'#0369AB',
padding: 19,
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
      },
      placeholder:{
fontSize: 14,
color: '#999',
marginBottom: 7
      },
      myinput:{
borderWidth: 1,
borderColor: '#ddd',
padding: 7,
borderRadius: 4,
fontSize: 18,
      },
      boldblue:{
        color:'#0369AB',
        fontWeight: 'bold'
      },
      lightbluebtn:{
        backgroundColor:'#F0F3F5',
        padding: 19,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      },
      lightbluebtntext:{
color: '#0369AB'
      },
     bluebtntext:{
        color: '#F0F3F5'
              },
      txtcenter:{
        fontSize: 17,
        marginTop: 20,
        marginBottom: 2,
textAlign: 'center'

      },
      txtcentertwo:{
        fontSize: 17,
        marginTop: 5,
        marginBottom: 2,
textAlign: 'center'

      },
      alreadyhave:{
     fontSize: 15,
      marginTop: 20,
      marginBottom: 2,
textAlign: 'center'
      },
      top: {
        flex: 1,
        width: '100%',
        backgroundColor: 'lightblue', // Example background color
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttongroup:{
padding: 10,
gap: 20,
width: '100%',
marginTop: 20,
      },
      bottom: {
   
        flex: 1,
   
        width: '100%',
        backgroundColor: 'white', // Example background color

      },
      bottomcontent:{
        padding: 15,
        gap: 10,
        width: '100%',
      },
      heroImage: {
        width: '100%',
        height: '100%',
      },
      logoImage: {
        width: 40,
        height: 40,
      },
      subtext:{
        fontWeight: '300',
        textAlign:'center',
        color: '#888'
      }
})