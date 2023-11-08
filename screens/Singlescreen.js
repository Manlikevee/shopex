import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';
import Swiper from 'react-native-swiper';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../styles/styles';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import accounting from 'accounting';
export default function Singlescreen() {
  const [productdata, setProductData] = useState(null);

  const route = useRoute();
  const id = route?.params?.paramName
  
  useEffect(() => {
    // Check if an 'id' exists, and only make the GET request if it does
    if (id) {
      axios
        .get(`https://vee-commerce.cyclic.app/product/${id}`)
        .then((response) => {
          // Handle the successful response and store the data in the state
          setProductData(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          // Handle any errors here
          console.error('Error:', error);
        });
    }
  }, [id]);
  
  const IMAGES = [
    'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/3978932/1.jpg?0950',
    'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/3978932/4.jpg?0950',
    'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/12/3978932/3.jpg?0950',
  ];
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

   
  ];

  const [value, setValue] = React.useState(0);

  return (
    <View style={{ flex: 1, backgroundColor:'#FAFAFA' }}>
 
{productdata ? 
  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 90 }}>
  <View style={styles.photos}>
    {/* <Swiper
      renderPagination={(index, total) => (
        <View style={styles.photosPagination}>
          <Text style={styles.photosPaginationText}>
            {index + 1} / {total}
          </Text>
        </View>
      )}>
      {IMAGES.map((src, index) => (
        <View key={src} style={{ flex: 1, backgroundColor:'#fff', padding: 4, }}>
          <Image alt="" source={{ uri: src }} style={styles.photosImg} />
        </View>
      ))}
    </Swiper> */}
 <View  style={{ flex: 1, backgroundColor:'#fff', padding: 4, }}>
          <Image alt="" source={{ uri: productdata.image }} style={styles.photosImg} />
        </View>

  </View>
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{productdata?.name}
    
    
    </Text>

    <View style={styles.headerRow}>
      <View style={styles.headerLocation}>
        <FeatherIcon color="#7B7C7E" name="map-pin" size={14} />

        <Text style={styles.headerLocationText}>
          Lagos, Nigeria
        </Text>
      </View>

      <Text style={styles.headerPrice}>  {(accounting.formatMoney(productdata?.price, '₦ ', 2))}</Text>
    </View>

    <View style={styles.headerRow}>
      <View style={styles.headerStars}>
        <FontAwesome color="#033BAB" name="star" solid={true} size={14} />

        <FontAwesome color="#033BAB" name="star" solid={true} size={14} />

        <FontAwesome color="#033BAB" name="star" solid={true} size={14} />

        <FontAwesome color="#033BAB" name="star" solid={true} size={14} />

        <FontAwesome color="#033BAB" name="star" size={14} />

        <Text style={styles.headerStarsText}>20 reviews</Text>
      </View>

      <Text style={styles.headerDistance}>4.6 miles</Text>
    </View>
  </View>
  <View style={styles.picker}>
    <TouchableOpacity
      onPress={() => {
        // handle onPress
      }}
      style={styles.pickerDates}>
      <FeatherIcon color="#242329" name="calendar" size={16} />

      <Text style={styles.pickerDatesText}>11 Mar - 12 Mar</Text>
    </TouchableOpacity>

    <View style={styles.pickerFilterWrapper}>
      <TouchableOpacity
        onPress={() => {
          // handle onPress
        }}
        style={styles.pickerFilter}>
        <View style={styles.pickerFilterItem}>
      
          <FontAwesome color="#242329" name="car" size={15} />

          <Text style={styles.pickerFilterItemText}>4-5 Days</Text>
        </View>


      </TouchableOpacity>
    </View>
  </View>

  <View style={styles.about}>
    <Text style={styles.aboutTitle}>About</Text>

    <Text style={styles.aboutDescription}>
    {productdata?.description}

    

    </Text>
  </View>
  <View style={styles.about}>
  <Text style={styles.alsotext}>
You May Also Like
</Text>
  </View>

  <FlatList
style={styles.flatlist}
data={sampleData}
horizontal={true} 
keyExtractor={(item) => item.name}
renderItem={({ item }) => (
<View style={styles.gridItem}>
<Image source={{ uri: item.imageUrl }} style={styles.productImage} />
<Text numberOfLines={1} style={styles.productTitle}>
{item.name.length > 15 ? item.name.slice(0, 20) + '...' : item.name}
</Text>
<Text style={styles.gridTextday}>{item.price}</Text>

<TouchableOpacity style={styles.cartbtn} onPress={() => navigation.navigate('Singlescreen')}>
   <Text style={styles.carttxt}>View Product</Text>
</TouchableOpacity>
</View>
)}
/>
</ScrollView>


 : 
 <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
<ActivityIndicator
size='large'
color='#033BAB'/>

  </View>
}
    

      <View style={styles.overlay}>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.btn}>
              <Text style={styles.btnText}> Add Wishlist </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={{ flex: 1, paddingHorizontal: 8 }}>
            <View style={styles.btnSecondary}>
              <Text style={styles.btnSecondaryText}>Add To Cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

