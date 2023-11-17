import { StyleSheet, Text, RefreshControl, View, ScrollView, Image, TextInput, ImageBackground, FlatList, TouchableOpacity , ActivityIndicator} from 'react-native'
import React, { useEffect, useState, useContext } from 'react';
import { styles } from '../styles/styles'
import {useNavigation} from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';
import accounting from 'accounting';
import {UserData} from '../styles/Shopexcontext';

const Category = () => {
    const navigation = useNavigation();
    const { fetchdata } = useContext(UserData);
    const { productdata } = useContext(UserData);
    const { slicedData } = useContext(UserData);

    const [refreshing, setRefreshing] = useState(false);
    const [slicedfashion, setslicedfashion] = useState(false);
    const [slicedtv, setslicedtv] = useState(false);
    const [slicephones, setslicephones] = useState(false);
    const [games, setgames] = useState(false);
    const [grocery, setgrocery] = useState(false);
    const [drinks, setdrinks] = useState(false);
    const [jewelry, setjewelry] = useState(false);
    const [washer, setwasher] = useState(false);
    const [Fridge, setFridge] = useState(false);
    
    const showdata = async () => {

        console.log('fetched')
       const numberOfItemsToDisplay = 12;
        const filteredData1 = productdata?.filter(item => item.categoryId === 7);
        const slicedFilteredData1 = filteredData1.slice(0, numberOfItemsToDisplay);
        setslicedtv(slicedFilteredData1)

        const filteredData2 = productdata?.filter(item => item.categoryId === 2);
        const slicedFilteredData2 = filteredData2.slice(0, numberOfItemsToDisplay);
        setslicephones(slicedFilteredData2)


        const filteredData11 = productdata?.filter(item => item.categoryId === 9);
        const slicedFilteredData11 = filteredData11.slice(0, numberOfItemsToDisplay);
        setjewelry(slicedFilteredData11)


        const filteredData4 = productdata?.filter(item => item.categoryId === 8);
        const slicedFilteredData4 = filteredData4.slice(0, numberOfItemsToDisplay);
        setgames(slicedFilteredData4)


        const filteredData5 = productdata?.filter(item => item.categoryId === 6);
        const slicedFilteredData5 = filteredData5.slice(0, numberOfItemsToDisplay);
        setslicedfashion(slicedFilteredData5)




        const filteredData7 = productdata?.filter(item => item.categoryId === 5);
        const slicedFilteredData7 = filteredData7.slice(0, numberOfItemsToDisplay);
        setgrocery(slicedFilteredData7)

        const filteredData10 = productdata?.filter(item => item.categoryId === 10);
        const slicedFilteredData10 = filteredData10.slice(0, numberOfItemsToDisplay);
        setdrinks(slicedFilteredData10)

        
        const filteredData8 = productdata?.filter(item => item.categoryId === 4);
        const slicedFilteredData8 = filteredData8.slice(0, numberOfItemsToDisplay);
        setwasher(slicedFilteredData8)


        const filteredData12 = productdata?.filter(item => item.categoryId === 3);
        const slicedFilteredData12 = filteredData12.slice(0, numberOfItemsToDisplay);
        setFridge(slicedFilteredData12)
    }
    
      useEffect(() => {
        showdata();
        // Make a GET request to the endpoint
        fetchdata();
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
  <ImageBackground
          resizeMode="repeat" 
          source={require('../assets/Union.png')}
  > 
    <View style={styles.mts}>
      <Text style={{marginBottom: 10,}}>Category</Text>
      <View>
<TextInput style={styles.myinput}
        placeholder={'Search For A Product'}
        secureTextEntry={true}
      />
</View>

<View style={styles.banner}>
        <Image
         source={require('../assets/candor.jpg')}
         style={{ 
            width:'100%',
            padding:5,
          height:100,
            resizeMode: 'cover',}}
      >

        </Image>
        </View>

<View>
<View style={{justifyContent:'space-between', flexDirection: 'row', backgroundColor:'#000', padding: 12, borderRadius:4, alignItems:'center'}}>
<Text style={{color:'#fff'}}>Television</Text>
<Text style={{ color:'#0369AB', fontWeight: '900'}}>View All</Text>
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
<View style={{justifyContent:'space-between', flexDirection: 'row', backgroundColor:'#000', padding: 12, borderRadius:4, alignItems:'center'}}>
<Text style={{color:'#fff'}}>Mobile Phones</Text>
<Text style={{ color:'#0369AB', fontWeight: '900'}}>View All</Text>
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

    
<View>
<View style={{justifyContent:'space-between', flexDirection: 'row', backgroundColor:'#000', padding: 12, borderRadius:4, alignItems:'center'}}>
<Text style={{color:'#FFF'}}>Video Games</Text>
<Text style={{ color:'#0369AB', fontWeight: '900'}}>View All</Text>
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

<View style={styles.banner}>
        <Image
         source={require('../assets/booz.jpg')}
         style={{ 
          marginTop:20,
            width:'100%',
            padding:5,
          height:100,
            resizeMode: 'cover',}}
      >

        </Image>
        </View>

        <View>
<View style={{justifyContent:'space-between', flexDirection: 'row', backgroundColor:'#000', padding: 12, borderRadius:4, alignItems:'center'}}>
<Text style={{color:'#FFF'}}>Drinks</Text>
<Text style={{ color:'#0369AB', fontWeight: '900'}}>View All</Text>
</View>





<FlatList
style={styles.flatlist}
data={drinks}
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
<View style={{justifyContent:'space-between', flexDirection: 'row', backgroundColor:'#000', padding: 12, borderRadius:4, alignItems:'center'}}>
<Text style={{color:'#FFF'}}>Jewelry</Text>
<Text style={{ color:'#0369AB', fontWeight: '900'}}>View All</Text>
</View>





<FlatList
style={styles.flatlist}
data={jewelry}
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
<View style={{justifyContent:'space-between', flexDirection: 'row', backgroundColor:'#000', padding: 12, borderRadius:4, alignItems:'center'}}>
<Text style={{color:'#FFF'}}>Fashion</Text>
<Text style={{ color:'#0369AB', fontWeight: '900'}}>View All</Text>
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

<View style={styles.banner}>
        <Image
         source={require('../assets/Component.png')}
         style={{ 
            width:'100%',
            padding:5,
            height:100,
            resizeMode: 'cover',}}
      >

        </Image>
        </View>

<View>





<View style={{justifyContent:'space-between', flexDirection: 'row', backgroundColor:'#000', padding: 12, borderRadius:4, alignItems:'center'}}>
<Text style={{color:'#FFF'}}>Grocery</Text>
<Text style={{ color:'#0369AB', fontWeight: '900'}}>View All</Text>
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


<View>





<View style={{justifyContent:'space-between', flexDirection: 'row', backgroundColor:'#000', padding: 12, borderRadius:4, alignItems:'center'}}>
<Text style={{color:'#FFF'}}>Washing Machine</Text>
<Text style={{ color:'#0369AB', fontWeight: '900'}}>View All</Text>
</View>





<FlatList
style={styles.flatlist}
data={washer}
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





<View style={{justifyContent:'space-between', flexDirection: 'row', backgroundColor:'#000', padding: 12, borderRadius:4, alignItems:'center'}}>
<Text style={{color:'#FFF'}}>Fridge</Text>
<Text style={{ color:'#0369AB', fontWeight: '900'}}>View All</Text>
</View>





<FlatList
style={styles.flatlist}
data={Fridge}
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



        <View style={styles.banner}>
        <Image
         source={require('../assets/banner.png')}
         style={{ 
            width:'100%',
            padding:5,
            height:100,
            resizeMode: 'cover',
       }}
      >

        </Image>
        </View>
<View style={{marginBottom:100}}>

</View>
    </View>
    </ImageBackground>
    </ScrollView>
  )
}

export default Category

