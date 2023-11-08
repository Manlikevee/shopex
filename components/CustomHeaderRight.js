import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'

const CustomHeaderRight = () => {
  return (
    <View>
    <Image
     source={require('../assets/image1.png')}
     style={{ 
        width:35, height: 35,
        padding:5,
        borderRadius: 90,
        resizeMode: 'contain',}}
  >

    </Image>
    </View>
  )
}

export default CustomHeaderRight