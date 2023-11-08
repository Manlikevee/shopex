import { StyleSheet, Text, RefreshControl, View, ScrollView, Image, TextInput, FlatList, TouchableOpacity , ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react';
import { styles } from '../styles/styles'
import {useNavigation} from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';
import accounting from 'accounting';

const Category = () => {
    const navigation = useNavigation();
    const [productdata, setProductData] = useState(null);
    const [refreshing, setRefreshing] = useState(false);


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
    
        setTimeout(() => {
      
          setRefreshing(false);
        }, 2000);
      }, []);
  return (
    <ScrollView style={styles.mt}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>

    <View>
      <Text>Category</Text>
    </View>
    </ScrollView>
  )
}

export default Category

