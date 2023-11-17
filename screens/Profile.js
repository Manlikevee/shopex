import { StyleSheet, Text, RefreshControl, View, ScrollView, Image, TextInput, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';
import { styles } from '../styles/styles'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import accounting from 'accounting';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
const Profile = () => {
  const navigation = useNavigation();

  const logout = async  () => {
    await AsyncStorage.removeItem('my-access-key');
    await AsyncStorage.removeItem('my-refresh-key');



       
    Toast.show({
        

      type: 'error',
      text1: 'User Logged Out successful'
    });
    navigation.replace('Home');

  }

  const [refreshing, setRefreshing] = useState(false);
    const menuItems = [
      { iconName: 'package', title: 'Order', linkName: 'OrderPage' },
      { iconName: 'inbox', title: 'Inbox', linkName: 'OrderPage' },
      { iconName: 'credit-card', title: 'Voucher', linkName: 'OrderPage' },
      { iconName: 'shopping-bag', title: 'Saved Items', linkName: 'OrderPage' },
      { iconName: 'search', title: 'Recent Search', linkName: 'OrderPage' },
      // Add more items as needed
    ];

    const profileitems = [
      { iconName: 'home', title: 'Address Book', linkName: 'OrderPage' },
      { iconName: 'credit-card', title: 'Payment Method', linkName: 'OrderPage' },
      { iconName: 'user-x', title: 'Deactivate Account', linkName: 'OrderPage' },
      // Add more items as needed
    ];
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {

      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <ScrollView style={styles.mttwo}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.profilehead}>
        <View style={styles.profilephoto}>
          <Image
            source={require('../assets/image1.png')}
            style={{
              width: '100%',
              padding: 5,
              height: 95,
              resizeMode: 'cover',
            }}
          >

          </Image>
        </View>

        <Text style={styles.toptitle}>Welcome Tobi Ayeni</Text>
        <Text style={styles.bottomtitle}>Odahviktor@gmail.com</Text>
      </View>
      <View style={styles.mt}>
        <Text> My Shopex Account </Text>
        <View style={styles.shopexprofileflex}>


          {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.jcs}
          onPress={() => {} }
        >
          <View style={styles.gpt}>
            <View style={styles.shopexicon}>
              <Text>
                <FeatherIcon color="#f8991e" name={item.iconName} size={18} />
              </Text>
            </View>
            <View style={styles.shopextext}>
              <Text>{item.title}</Text>
            </View>
          </View>
          <View>
            <Text>
              <FeatherIcon color="#033BAB" name="arrow-right" size={16} />
            </Text>
          </View>
        </TouchableOpacity>
      ))}
          
        </View>
      </View>


      <View style={styles.mt}>
        <Text> My Settings</Text>
        <View style={styles.shopexprofileflex}>


          {profileitems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.jcs}
          onPress={() => {} }
        >
          <View style={styles.gpt}>
            <View style={styles.shopexicon}>
              <Text>
                <FeatherIcon color="#f8991e" name={item.iconName} size={18} />
              </Text>
            </View>
            <View style={styles.shopextext}>
              <Text>{item.title}</Text>
            </View>
          </View>
          <View>
            <Text>
              <FeatherIcon color="#033BAB" name="arrow-right" size={16} />
            </Text>
          </View>
        </TouchableOpacity>
      ))}
          
        </View>
      </View>

      <TouchableOpacity style={styles.mt}         onPress={() => {
            logout()
      
        }}>
        <Text style={styles.tac}> Logout </Text>
        </TouchableOpacity>

        <View style={{marginBottom:130}}>

</View>
    </ScrollView>
  )
}

export default Profile

