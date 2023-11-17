import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();

useEffect(() => {
const checkLoginStatus = async() => {

  try {
    const token = await AsyncStorage.getItem('my-access-key');

    if (token){
      navigation.replace('Tabs');
    }
    else {
  
    }
  } catch (error) {
    console.log(error)
  }

}; checkLoginStatus();
}, [])
  return (
    <View style={styles.container}>
        <View style={styles.top}>
        <Image
         source={require('../assets/2.jpg')}
          style={styles.heroImage}
          resizeMode="cover">

        </Image>

        </View >
        <View style={styles.bottom}>
          <View style={styles.bottomcontent}>
          <Text style={styles.txtcenter}>Welcome To <Text style={styles.boldblue}>Shopexs</Text>  </Text>
      <Text style={styles.subtext}>Discover a world of Home & Kitchen essentials all in one place – your ultimate destination for quality products.</Text>

      <View style={styles.buttongroup}>
<TouchableOpacity style={styles.bluebtn}>
<Text style={styles.bluebtntext}>Create An Account</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.lightbluebtn} onPress={() => navigation.navigate('singlescreen')}>
<Text style={styles.lightbluebtntext}>Sign In As Guests</Text>
</TouchableOpacity>
      </View>
<Pressable onPress={() => navigation.navigate('Signin')}>
      <Text style={styles.alreadyhave} > Already Have An Account? <Text style={styles.boldblue}>Sign in</Text>  </Text>
      </Pressable>
          </View>
  
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      subtext:{
        fontWeight: '300',
        textAlign:'center',
        color: '#888'
      }
})