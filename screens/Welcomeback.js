import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const Welcomeback = () => {
  const navigation = useNavigation();
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

          <Text style={styles.txtcentertwo}> Login To Continues </Text>

      <View style={styles.buttongroup}>
      <Text>Welcome back, Alfred!</Text>
     
     <View>
     <Text style={styles.placeholder}>Enter Password</Text>
      <TextInput style={styles.myinput}
        placeholder={'••••••••••'}
        secureTextEntry={true}
      />
        
        </View> 
     
<TouchableOpacity style={styles.bluebtn} onPress={() => navigation.navigate('Tabs')}>
<Text style={styles.bluebtntext}>Sign In</Text>
</TouchableOpacity>


      </View>

      <Text style={styles.alreadyhave} > Not Vee? <Text style={styles.boldblue}>Switch Account</Text>  </Text>
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