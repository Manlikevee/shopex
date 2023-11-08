import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native'
const Customback = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.actions}>
    <SafeAreaView>
      <View style={styles.actionWrapper}>
        <TouchableOpacity
onPress={() => navigation.goBack()}
          style={{ marginRight: 'auto' }}>
          <View style={styles.action}>
            <FeatherIcon color="#242329" name="chevron-left" size={20} />
          </View>
        </TouchableOpacity>


      </View>


    </SafeAreaView>
  </View>
  )
}

export default Customback

const styles = StyleSheet.create({
    actionWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      action: {
        width: 36,
        height: 36,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderStyle: 'solid',
        borderRadius: 12,
        marginHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },

})