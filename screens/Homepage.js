import { StyleSheet, Text, RefreshControl, View, ScrollView, Image, TextInput, FlatList, TouchableOpacity , ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react';
import { styles } from '../styles/styles'
import {useNavigation} from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';
import accounting from 'accounting';
const Homepage = () => {
  const navigation = useNavigation();
  const [productdata, setProductData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [slicedData, setslicedData] = useState(false);
  const sampleData = [

  
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/2698201/1.jpg?5660`,
      name: `IPhone X 3GB RAM+64GB(Renewed) -Black`,
      price: '₦ 174,500'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2698201/1.jpg?5628`,
      name: `IPhone X 3GB RAM+64GB (Renewed) -White`,
      price: '₦ 176,500 '
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/931009/1.jpg?5328`,
      name: `IPhone 6 16GB(Refurbished) - Gold (Grade A)`,
      price: '₦ 71,412'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0477811/1.jpg?2168`,
      name: `IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P`,
      price: '₦ 79,412'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/4956431/1.jpg?8817`,
      name: `Apple Iphone XR 64gb White, Free Pouch`,
      price: '₦ 279,412'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/709296/1.jpg?1393`,
      name: `Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch,`,
      price: '₦ 620,000'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/139307/1.jpg?3251`,
      name: `Apple IPhone 12 Pro (128 GB) - Pacific Blue`,
      price: '₦ 520,000'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/122749/1.jpg?5259`,
      name: `Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch,`,
      price: '₦ 720,000'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/884688/1.jpg?2746`,
      name: `Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black
      `,
      price: '₦ 920,000 '
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2928632/1.jpg?5128`,
      name: `Tecno Spark 10c- 6.6" - 4GB/128GB`,
      price: '₦ 120,000'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/10/045718/1.jpg?0894`,
      name: `Hp 15 AMD RYZEN3 -12GB RAM 1TB HDD Wins 10Pro-2.6GHz To 3.5GHz`,
      price: '₦ 229,500 '
    },

    {
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/7067422/1.jpg?8486',
      name: `XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray`,
      price: '₦ 118,650'
    },
  

   
  
  
      {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/2698201/1.jpg?5660`,
      name: `IPhone X 3GB RAM+64GB(Renewed) -Black`,
      price: '₦ 174,500'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2698201/1.jpg?5628`,
      name: `IPhone X 3GB RAM+64GB (Renewed) -White`,
      price: '₦ 176,500 '
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/931009/1.jpg?5328`,
      name: `IPhone 6 16GB(Refurbished) - Gold (Grade A)`,
      price: '₦ 71,412'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0477811/1.jpg?2168`,
      name: `IPhone 7 Plus 32GB+RAM3GB(Renewed-)-Black IPhone7P`,
      price: '₦ 79,412'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/4956431/1.jpg?8817`,
      name: `Apple Iphone XR 64gb White, Free Pouch`,
      price: '₦ 279,412'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/709296/1.jpg?1393`,
      name: `Apple IPhone 12 Pro Max - 256GB, 6GB RAM, 6.7-Inch,`,
      price: '₦ 620,000'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/139307/1.jpg?3251`,
      name: `Apple IPhone 12 Pro (128 GB) - Pacific Blue`,
      price: '₦ 520,000'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/122749/1.jpg?5259`,
      name: `Apple IPhone 13 Pro Max - 256GB, 6GB RAM, 6.7-Inch,`,
      price: '₦ 720,000'
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/884688/1.jpg?2746`,
      name: `Samsung Galaxy Z Fold 3 - 256GB ROM Dual Sim - Phantom Black
      `,
      price: '₦ 920,000 '
    },
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/92/2928632/1.jpg?5128`,
      name: `Tecno Spark 10c- 6.6" - 4GB/128GB`,
      price: '₦ 120,000'
    },
  
    {
      imageUrl: `https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/96/8887922/1.jpg?2905`,
      name: `XIAOMI Redmi Note 12 6.67'' 8GB 128GB ROM Android 13 - Onyx Gray`,
      price: '₦ 150,000'
    },
    {
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/7067422/1.jpg?8486',
      name: `XIAOMI Redmi 10 2022 - 6.5" (4GB RAM, 128GB ROM) - Carbon Gray`,
      price: '₦ 118,650'
    },
  
    {
      name: 'product1',
      price: '$19.99',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/74/7067422/1.jpg?8486',
    },
    {
      name: 'product2',
      price: '$29.99',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/7542032/1.jpg?3477',
    },
    {
      name: 'product3',
      price: '$14.99',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/2037521/1.jpg?6055',
    },
    {
      name: 'product4',
      price: '$49.99',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/909098/1.jpg?3607',
    },
    {
      name: 'product5',
      price: '$9.99',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/5017732/1.jpg?8724',
    },
    {
      name: 'product6',
      price: '$9.99',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/30/709296/1.jpg?1393',
    },
    {
      name: 'product7',
      price: '$9.99',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/1941122/1.jpg?1042',
    },
    {
      name: 'product8',
      price: '$9.99',
      imageUrl: 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/1357061/1.jpg?5747',
    },
    // Add more products as needed
  ];

const fetchdata = async () => {
  axios
  .get('https://vee-commerce.cyclic.app/product')
  .then((response) => {
    // Handle the successful response and store the data in the state
    setProductData(response.data);
    const numberOfItemsToDisplay = 10;
     setslicedData(response.data.slice(0, numberOfItemsToDisplay));
    console.log('fetched')

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
      fetchdata()
      setRefreshing(false);
    }, 2000);
  }, []);

  const sampleDatatwo = [
    {
      name: 'Mobile',

      imageUrl: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg',
    },
    {
      name: 'Laptops',

      imageUrl: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/O/180272_1652891518.jpg',
    },
    {
      name: 'Washer',

      imageUrl: 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/C/E/104208_1550739086.jpg',
    },


    {
      name: 'Refrigerators',

      imageUrl: 'https://fouanistore.com/storage/data/products/230.jpg?v=0',
    },

    {
      name: 'Fashion',

      imageUrl: 'https://reuplane.com/cdn/shop/products/e85c9ab82b678ffe77e8ad82fbb2b74c.webp?v=1693167537&width=713',
    },

    
    {
      name: 'Watches',

      imageUrl: 'https://watchlocker.ng/wp-content/uploads/2023/10/85303-357RN-NRN.jpg',
    },


    
    // Add more products as needed
  ];
  return (
    <ScrollView style={styles.mt}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
 

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
<TextInput style={styles.myinput}
        placeholder={'Search For A Product'}
        secureTextEntry={true}
      />
</View>


<FlatList
style={styles.flatlist}
  data={sampleDatatwo}
  keyExtractor={(item) => item.name}
  numColumns={3}
  renderItem={({ item }) => (
    <TouchableOpacity style={styles.gridItems}>
      <Image source={{ uri: item.imageUrl }} style={styles.sampleproductImage} />
      <Text style={styles.productTitles}>{item.name}</Text>
    </TouchableOpacity>
  )}
/>


<View style={styles.banner}>
        <Image
         source={require('../assets/bernard.png')}
         style={{ 
          marginTop: 20,
            width:'98%',

            padding:5,
            borderRadius: 5,
            resizeMode: 'cover',}}
      >

        </Image>
        </View>

        {productdata ? (
<FlatList
style={styles.flatlist}
  data={slicedData}
  keyExtractor={(item) => item.id}
  numColumns={2}
  renderItem={({ item }) => (
    <View style={styles.gridItem}>
      <Image source={{ uri: item.image}} style={styles.productImage} />
      <Text numberOfLines={1} style={styles.productTitle}>{item.name}</Text>
      <Text style={styles.gridTextday}>{(accounting.formatMoney(item?.price, '₦ ', 2))}</Text>

      <TouchableOpacity style={styles.cartbtn} onPress={() => navigation.navigate('singlescreen', { paramName: item.id })}>
         <Text style={styles.carttxt}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  )}
/>
        )
        : 
        <View style={{marginTop: 10, marginBottom: 30}}>
        <ActivityIndicator
size='large'
color='#033BAB'/>

  </View>
        }




<View style={{marginBottom:130}}>

</View>


   
    </ScrollView>
  )
}

export default Homepage

