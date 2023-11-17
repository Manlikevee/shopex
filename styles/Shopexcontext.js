import { createContext,  useEffect, useState, useContext} from "react";
import axios from 'axios';
const UserData = createContext();

const Shopexcontext = ({ children }) => {
    const [userId, setUserId] = useState('2');
    const [productdata, setProductData] = useState(null);
    const [slicedData, setslicedData] = useState(false);
    const [grocery, setgrocery] = useState(false);

const fetchdata = async () => {
        axios
        .get('https://vee-commerce.cyclic.app/product')
        .then((response) => {
          // Handle the successful response and store the data in the state
          setProductData(response.data);
          const numberOfItemsToDisplay = 12;
           setslicedData(response.data.slice(0, numberOfItemsToDisplay));
           const filteredData7 = response?.data?.filter(item => item.categoryId === 5);
           const slicedFilteredData7 = filteredData7.slice(0, numberOfItemsToDisplay);
           setgrocery(slicedFilteredData7)
          
           console.log('fetched')
      
      
        })
        .catch((error) => {
          // Handle any errors here
          console.error('Error:', error);
        });
      }


    return (
        <UserData.Provider value={{ userId, productdata,fetchdata, slicedData, grocery, setProductData }}>
            {children}
        </UserData.Provider>
    );
}

export { Shopexcontext, UserData };
