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
    const [slicedfashion, setslicedfashion] = useState(false);
    const [slicedtv, setslicedtv] = useState(false);
    const [slicephones, setslicephones] = useState(false);
    const [games, setgames] = useState(false);
    const [grocery, setgrocery] = useState(false);
    const fetchdata = async () => {
      axios
      .get('https://vee-commerce.cyclic.app/product')
      .then((response) => {
        // Handle the successful response and store the data in the state
        setProductData(response.data);
        const numberOfItemsToDisplay = 10;
    
        console.log('fetched')
        const filteredData1 = response?.data?.filter(item => item.categoryId === 3);
        const slicedFilteredData1 = filteredData1.slice(0, numberOfItemsToDisplay);
        setslicedtv(slicedFilteredData1)

        const filteredData2 = response?.data?.filter(item => item.categoryId === 4);
        const slicedFilteredData2 = filteredData2.slice(0, numberOfItemsToDisplay);
        setslicephones(slicedFilteredData2)


        const filteredData3 = response?.data?.filter(item => item.categoryId === 9);
        const slicedFilteredData3 = filteredData3.slice(0, numberOfItemsToDisplay);
        setslicedtv(slicedFilteredData3)


        const filteredData4 = response?.data?.filter(item => item.categoryId === 10);
        const slicedFilteredData4 = filteredData4.slice(0, numberOfItemsToDisplay);
        setgames(slicedFilteredData4)


        const filteredData5 = response?.data?.filter(item => item.categoryId === 8);
        const slicedFilteredData5 = filteredData5.slice(0, numberOfItemsToDisplay);
        setslicedfashion(slicedFilteredData5)




        const filteredData7 = response?.data?.filter(item => item.categoryId === 7);
        const slicedFilteredData7 = filteredData7.slice(0, numberOfItemsToDisplay);
        setgrocery(slicedFilteredData7)


        // const filteredData8 = response?.data?.filter(item => item.categoryId === 4);
        // const slicedFilteredData8 = filteredData2.slice(0, numberOfItemsToDisplay);
        // setslicephones(slicedFilteredData1)


      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error:', error);
      });
    }
    
      useEffect(() => {
        // Make a GET request to the endpoint
        fetchdata()
      }, []); 


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

    <View style={styles.mts}>
      <Text style={{marginBottom: 10,}}>Category</Text>
      <View>
<TextInput style={styles.myinput}
        placeholder={'Search For A Product'}
        secureTextEntry={true}
      />
</View>
<View>
<View style={{justifyContent:'space-between', flexDirection: 'row'}}>
<Text style={{marginTop: 10,}}>Television</Text>
<Text style={{marginTop: 10, color:'#0369AB', fontWeight: '900'}}>View All</Text>
</View>


<FlatList
style={styles.flatlist}
data={slicedtv}
horizontal={true} 
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<View style={styles.gridItem}>
<Image source={{ uri: item.image }} style={styles.productImage} />
<Text numberOfLines={1} style={styles.productTitle}>
{item.name.length > 15 ? item.name.slice(0, 20) + '...' : item.name}
</Text>
<Text style={styles.gridTextday}>{(accounting.formatMoney(item?.price, '₦ ', 2))}</Text>

<TouchableOpacity style={styles.cartbtn} onPress={() => navigation.navigate('singlescreen', { paramName: item.id })}>
         <Text style={styles.carttxt}>Detail</Text>
      </TouchableOpacity>

</View>
)}
/>
</View>



<View>
<View style={{justifyContent:'space-between', flexDirection: 'row'}}>
<Text style={{marginTop: 10,}}>Mobile Phones</Text>
<Text style={{marginTop: 10, color:'#0369AB', fontWeight: '900'}}>View All</Text>
</View>


<FlatList
style={styles.flatlist}
data={slicephones}
horizontal={true} 
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<View style={styles.gridItem} >
<Image source={{ uri: item.image }} style={styles.productImage} />
<Text numberOfLines={1} style={styles.productTitle}>
{item.name.length > 15 ? item.name.slice(0, 20) + '...' : item.name}
</Text>
<Text style={styles.gridTextday}>{(accounting.formatMoney(item?.price, '₦ ', 2))}</Text>
<TouchableOpacity style={styles.cartbtn} onPress={() => navigation.navigate('singlescreen', { paramName: item.id })}>
         <Text style={styles.carttxt}>Detail</Text>
      </TouchableOpacity>

</View>
)}
/>
</View>

        <View style={styles.banner}>
        <Image
         source={require('../assets/banner.png')}
         style={{ 
            width:'100%',
            padding:5,
            resizeMode: 'contain',}}
      >

        </Image>
        </View>
<View>
<View style={{justifyContent:'space-between', flexDirection: 'row'}}>
<Text style={{marginTop: 10,}}>Video Games</Text>
<Text style={{marginTop: 10, color:'#0369AB', fontWeight: '900'}}>View All</Text>
</View>


<FlatList
style={styles.flatlist}
data={games}
horizontal={true} 
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<View style={styles.gridItem} onPress={() => navigation.navigate('singlescreen', { paramName: item.id })}>
<Image source={{ uri: item.image }} style={styles.productImage} />
<Text numberOfLines={1} style={styles.productTitle}>
{item.name.length > 15 ? item.name.slice(0, 20) + '...' : item.name}
</Text>
<Text style={styles.gridTextday}>{(accounting.formatMoney(item?.price, '₦ ', 2))}</Text>

<TouchableOpacity style={styles.cartbtn} onPress={() => navigation.navigate('singlescreen', { paramName: item.id })}>
         <Text style={styles.carttxt}>Detail</Text>
      </TouchableOpacity>
</View>
)}
/>
</View>


<View>
<View style={{justifyContent:'space-between', flexDirection: 'row'}} onPress={() => navigation.navigate('singlescreen', { paramName: item.id })}>
<Text style={{marginTop: 10,}}>Fashion</Text>
<Text style={{marginTop: 10, color:'#0369AB', fontWeight: '900'}}>View All</Text>
</View>





<FlatList
style={styles.flatlist}
data={slicedfashion}
horizontal={true} 
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<View style={styles.gridItem} onPress={() => navigation.navigate('singlescreen', { paramName: item.id })}>
<Image source={{ uri: item.image }} style={styles.productImage} />
<Text numberOfLines={1} style={styles.productTitle}>
{item.name.length > 15 ? item.name.slice(0, 20) + '...' : item.name}
</Text>
<Text style={styles.gridTextday}>{(accounting.formatMoney(item?.price, '₦ ', 2))}</Text>
<TouchableOpacity style={styles.cartbtn} onPress={() => navigation.navigate('singlescreen', { paramName: item.id })}>
         <Text style={styles.carttxt}>Detail</Text>
      </TouchableOpacity>

</View>
)}
/>
</View>



<View>
<View style={{justifyContent:'space-between', flexDirection: 'row'}}>
<Text style={{marginTop: 10,}}>Grocery</Text>
<Text style={{marginTop: 10, color:'#0369AB', fontWeight: '900'}}>View All</Text>
</View>





<FlatList
style={styles.flatlist}
data={grocery}
horizontal={true} 
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<View style={styles.gridItem} onPress={() => navigation.navigate('singlescreen', { paramName: item.id })}>
<Image source={{ uri: item.image }} style={styles.productImage} />
<Text numberOfLines={1} style={styles.productTitle}>
{item.name.length > 15 ? item.name.slice(0, 20) + '...' : item.name}
</Text>
<Text style={styles.gridTextday}>{(accounting.formatMoney(item?.price, '₦ ', 2))}</Text>
<TouchableOpacity style={styles.cartbtn} onPress={() => navigation.navigate('singlescreen', { paramName: item.id })}>
         <Text style={styles.carttxt}>Detail</Text>
      </TouchableOpacity>

</View>
)}
/>
</View>


<View style={{marginBottom:100}}>

</View>
    </View>
    </ScrollView>
  )
}

export default Category

