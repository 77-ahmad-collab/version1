import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const CaterersDataContext = createContext();

export const CatererDataProvider = (props) => {
    const [catererProducts, setCatererProducts] = useState([
    //     {
    //     "d_caterer_id": 1,
    //     "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/atera_thumb.jpg",
    //     "ca_name": "Rehman Caterers",
    //     "ca_passwd": "password123",
    //     "ca_email": "rehmancaterers@example.com",
    //     "ca_address": "Block 13/D, Gulshan-e-Iqbal, Karachi",
    //     "ca_town":"Gulshan-e-Iqbal",
    //     "ca_description": "Specialists in desi cuisines",
    //     "ca_headline": "The best food in town !",
    //     "ca_minamount": 5000,
    //     "ca_workinghours": "24 hours",
    //     "ca_mobileno": 3451234567
    // },
    // {
    //     "d_caterer_id": 2,
    //     "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/Namaste_thumb.jpg",
    //     "ca_name": "Mateen Caterers",
    //     "ca_passwd": "p@$$w0Rd",
    //     "ca_email": "delight@example.com",
    //     "ca_address": "Nazimabad Block 10",
    //     "ca_town":"Nazimabad",
    //     "ca_description": "Specialists in desi cuisines",
    //     "ca_headline": "The best food in town !",
    //     "ca_minamount": 1000,
    //     "ca_workinghours": "24 hours",
    //     "ca_mobileno": 3456789123
    // },
   
    // {
    //     "d_caterer_id": 3,
    //     "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/Namaste_thumb.jpg",
    //     "ca_name": "Delight Caterers",
    //     "ca_passwd": "p@$$w0Rd",
    //     "ca_email": "delight@example.com",
    //     "ca_address": "Defence Block 6",
    //     "ca_town":"Defence",
    //     "ca_description": "Specialists in desi cuisines",
    //     "ca_headline": "The best food in town !",
    //     "ca_minamount": 1000,
    //     "ca_workinghours": "24 hours",
    //     "ca_mobileno": 3456789123
    // },
])

useEffect(() =>{
    axios.get('http://damp-headland-05751.herokuapp.com/show/caterers')  
    .then(response=>{   
        console.log(response.data);
        setCatererProducts(response.data);      
    })
    .catch(function(error){
        console.log(error);
    })  
 },[])



    const value = {
        catererProducts: [catererProducts, setCatererProducts]
    }
    
    return (
        <CaterersDataContext.Provider value={value}>
            {props.children}
        </CaterersDataContext.Provider>
    )
}


