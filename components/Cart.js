import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const Cart = () => {
  return (
    <View style={styles.actions}>
    <SafeAreaView>
      <View style={styles.actionWrapper}>
      <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.action}>
                <FeatherIcon color="#242329" name="heart" size={18} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.action}>
                <FeatherIcon color="#242329" name="share" size={18} />
              </View>
            </TouchableOpacity>

      </View>


    </SafeAreaView>
  </View>
  )
}

export default Cart

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