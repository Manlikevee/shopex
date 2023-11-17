import { StyleSheet, Text, View, ScrollView, Image, TextInput, FlatList, TouchableOpacity,  } from 'react-native'
import {React, useEffect, useState, useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import Welcomeback from './Welcomeback';
import Icon, { Icons } from '../components/Icons';
import Homepage from './Homepage';
import * as Animatable from 'react-native-animatable';

import Colors from '../components/Colors';
import Category from './Category';
import Profile from './Profile';
const Singlepage = () => {

    const TabArr = [
        { route: 'Homepage', label: 'Home', type: Icons.Ionicons, activeIcon: 'home', inActiveIcon: 'home-outline', component: Homepage },
        { route: 'Category', label: 'Like', type: Icons.Ionicons, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: Category },
        { route: 'LoginScreen', label: 'Search', type: Icons.Ionicons, activeIcon: 'bookmark', inActiveIcon: 'bookmark-outline', component: LoginScreen },
        { route: 'LoginScreens', label: 'Searchs', type:  Icons.MaterialCommunityIcons, activeIcon: 'account-circle', inActiveIcon: 'account-circle-outline', component: Profile },
      ];


const TabButton = (props) => {
        const { item, onPress, accessibilityState } = props;
        const focused = accessibilityState.selected;
        const viewRef = useRef(null);
      
        useEffect(() => {
          if (focused) {
            viewRef.current.animate({0: {scale: 1, rotate: '0deg'}, 1: {scale: 1., rotate: '0deg'}});
          } else {
            viewRef.current.animate({0: {scale: 1, rotate: '0deg'}, 1: {scale: 1, rotate: '0deg'}});
          }
        }, [focused])
      
        return (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={{ flex: 1,
                justifyContent: 'center',
                alignItems: 'center',}}>
            <Animatable.View
              ref={viewRef}
              duration={1000}
              style={{ flex: 1,
                justifyContent: 'center',
                alignItems: 'center',}}>
              <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? Colors.primary : Colors.primaryLite} />
            </Animatable.View>
          </TouchableOpacity>
        )
      }
const Tab = createBottomTabNavigator();
  return (
 
     <Tab.Navigator
     screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 55,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 10
        }
      }}
     >
  {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
   
  )
}

export default Singlepage