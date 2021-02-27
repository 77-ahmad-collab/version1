import React, {createContext, useState} from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
        "_id":1,
        "mname": "Bristo-C Chinese Restaurant",
        "caterer":"Rehman Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/atera_thumb.jpg",
        "price": 10,
        "feat":"New",
        "fill":"true",
        "detail":"chinese, sea-food, caribbean, thai, fast-food",
        "delivery":"Free delivery",
        "time":"7 Min",
        "links":"https://pk.oriflame.com/products/product?code=31786",
        "count": 1
    },
    {
        "_id":2,
        "mname": "Masala Chicken Biryani",
        "caterer":"Delight Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/Namaste_thumb.jpg",
        "price":20,
        "feat":"",
        "fill":"false",
        "detail":"chinese, sea-food, caribbean, thai, fast-food",
        "delivery":"$5 delivery",
        "time":"2 Min",
        "links":"https://pk.oriflame.com/products/product?code=34912",
        "count": 1
    },
    {
        "_id":3,
        "mname": "Namaste India Restaurant ",
        "caterer":"Rehman Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/riccardo_thumb.jpg",
        "price":30,
        "feat":"New",
        "fill":"true",
        "detail":"chinese, sea-food, caribbean, thai, fast-food",
        "delivery":"$5 delivery",
        "time":"10 Min",
        "links":"https://pk.oriflame.com/products/product?code=35823",
        "count": 1
    },
    {
        "_id":4,
        "mname": "Bristo-C Chinese Restaurant",
        "caterer":"Delight Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/mama_thumb.jpg",
        "price":40,
        "feat":"New",
        "fill":"true",
        "detail":"chinese, sea-food, caribbean, thai, fast-food",
        "delivery":"Free delivery",
        "time":"4 Min",
        "links":"https://pk.oriflame.com/products/product?code=35416",
        "count": 1
    },
    {
        "_id":5,
        "mname": "Red Dragon",
        "caterer":"Mateen Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/Namaste_thumb.jpg",
        "price":25,
        "detail":"chinese, sea-food, caribbean, thai, fast-food",
        "delivery":"$5 delivery",
        "time":"1 Min",
        "feat":"",
        "fill":"false",
        "links":"https://pk.oriflame.com/products/product?code=35573",
        "count": 1
    }
    ,
    {
        "_id":6,
        "mname": "Beef Pulao",   
        "caterer":"Mateen Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/mama_thumb.jpg",
        "price":35,
        "feat":"New",
        "fill":"true",
        "detail":"chinese, sea-food, caribbean, thai, fast-food",
        "delivery":"Free delivery",
        "time":"0 Min",
        "links":"https://pk.oriflame.com/products/product?code=35823",
        "count": 1
    },
    {
        "_id":7,
        "mname": "Bristo-C Chinese Restaurant",     
        "caterer":"Mateen Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/atera_thumb.jpg",
        "price": 10,
        "detail":"chinese, sea-food, caribbean, thai, fast-food",
        "delivery":"Free delivery",
        "feat":"",
        "fill":"false",
        "time":"7 Min",
        "links":"https://pk.oriflame.com/products/product?code=31786",
        "count": 1
    },
    {
        "_id":8,
        "mname": "Beef Pulao",      
        "caterer":"Rehman Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/Namaste_thumb.jpg",
        "price":20,
        "feat":"New",
        "fill":"true",
        "detail":"chinese, sea-food, caribbean, thai, fast-food",
        "delivery":"$5 delivery",
        "time":"2 Min",
        "links":"https://pk.oriflame.com/products/product?code=34912",
        "count": 1
    },
    {
        "_id":9,
        "mname": "Beef Pulao",
        "caterer":"Delight Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/atera_thumb.jpg",
        "price": 10,
        "feat":"New",
        "fill":"true",
        "detail":"chinese, sea-food, caribbean, thai, fast-food",
        "delivery":"Free delivery",
        "time":"7 Min",
        "links":"https://pk.oriflame.com/products/product?code=31786",
        "count": 1
    },
    {
        "_id":10,
        "mname": "Bristo-C Chinese Restaurant",
        "caterer":"Rehman Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/Namaste_thumb.jpg",
        "price":20,
        "feat":"",
        "fill":"false",
        "detail":"chinese, sea-food, caribbean, thai, fast-food",
        "delivery":"$5 delivery",
        "time":"2 Min",
        "links":"https://pk.oriflame.com/products/product?code=34912",
        "count": 1
    },
    {
        "_id":11,
        "mname": "Namaste India Restaurant ",
        "caterer":"Delight Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/riccardo_thumb.jpg",
        "price":30,
        "feat":"New",
        "fill":"true",
        "detail":"chinese, sea-food, caribbean, thai, fast-food",
        "delivery":"$5 delivery",
        "time":"10 Min",
        "links":"https://pk.oriflame.com/products/product?code=35823",
        "count": 1
    },
    {
        "_id":12,
        "mname": "Bristo-C Chinese Restaurant",
        "caterer":"Mateen Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/mama_thumb.jpg",
        "price":40,
        "feat":"New",
        "fill":"true",
        "detail":"chinese, sea-food, caribbean, thai, fast-food",
        "delivery":"Free delivery",
        "time":"4 Min",
        "links":"https://pk.oriflame.com/products/product?code=35416",
        "count": 1
    },
    {
        "_id":13,
        "mname": "Red Dragon",
        "caterer":"Mateen Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/Namaste_thumb.jpg",
                "price":25,
                "detail":"chinese, sea-food, caribbean, thai, fast-food",
                "delivery":"$5 delivery",
                "time":"1 Min",
                "feat":"",
                "fill":"false",
        "links":"https://pk.oriflame.com/products/product?code=35573",
        "count": 1
    }
    ,
    {
        "_id":14,
        "mname": "Namaste India Restaurant",
        "caterer":"Mateen Caterers",
        "imgsrc":"https://s3.amazonaws.com/redqteam.com/pickbazar/Food/mama_thumb.jpg",
        "price":35,
        "feat":"New",
        "fill":"true",
        "detail":"chinese, sea-food, caribbean, thai, fast-food",
        "delivery":"Free delivery",
        "time":"0 Min",
        "links":"https://pk.oriflame.com/products/product?code=35823",
        "count": 1
    },
])

    const value = {
        products: [products, setProducts]
    }
    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}


