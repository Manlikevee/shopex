import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import axios from 'axios';
import Toast from 'react-native-toast-message';
const Signin = () => {
const navigation = useNavigation();
const [error, setError] = useState(null);
const [userData, setUserData] = useState(null);
const [email, setEmail] = useState('');
const [loadingbar, Setloadingbar] = useState(false)


const handleProceed = async () => {

    if (!email.trim()) {
   
      Toast.show({
        

        type: 'error',
        text1: 'Email cannot be empty'
      });

      return;
    }

    try {
        Setloadingbar(true)
      const response = await axios.get(`https://vee-commerce.cyclic.app/user/${email}`);
      setUserData(response.data);
      setError(null); // Clear any previous errors
      Setloadingbar(false)
      navigation.replace('welcome', { email: email, username: response?.data?.username })
  
    } catch (error) {
      if (error.response && error.response.status === 404) {
        Setloadingbar(false)
        Toast.show({
            type: 'error',
            text1: 'Email does not exist'
          });
 
      } else {
        setError('An error occurred while processing your request');
      }
      Setloadingbar(false)
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
      {/* <Text>Welcome Enter Your Email Address</Text> */}
     
     <View>
     <Text style={styles.placeholder}>Email Address</Text>
      <TextInput style={styles.myinput}
        placeholder={'Enter Your Email'}
        secureTextEntry={false}
        onChangeText={(text) => setEmail(text)}
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



<Text style={styles.bluebtntext}>Proceed</Text>

      </TouchableOpacity>

      }

     



      </View>

      <Text style={styles.alreadyhave} > Dont Have An Account? <Text style={styles.boldblue}>Signup</Text>  </Text>
          </View>
  
      </View>
    </View>
  )
}

export default Signin

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
fontSize: 15,
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