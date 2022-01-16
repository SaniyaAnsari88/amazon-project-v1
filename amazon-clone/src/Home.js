import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">   
          <div className="home__container">
            <img className="home__image" src="https://m.media-amazon.com/images/I/61HEiWpEBaL._SX1500_.jpg" alt="" />

            <div className="home__row">
            <Product  
                id="01"
                title="See U in C by Ali Karim Sayed (Author)"
                price={4450}
                image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                />
            <Product 
                id="02"
                title=" Radiant Electro 18.5 inch All in One Gamming Computer Set"
                price={37799}
                image="https://m.media-amazon.com/images/I/61WfuVSFxAL._AC_UY218_.jpg"
                />
            <Product 
                id="03"
                title="Apple iPhone 13 Pro (256GB) - Gold"
                price={129900}
                image="https://m.media-amazon.com/images/I/61sDyXAepuL._AC_UY218_.jpg"
                />   
                <Product 
                id="04"
                title="Intel Core i5 - 4300M Processor, 4 GB Ram & 128 GB Optical Drive Notebook Computer "
                price={49999}
                image="https://m.media-amazon.com/images/I/41SC4m7YBPS.jpg"
                /> 
            <Product
                id="05"
                title="FAUSTO Women's Sport & Outdoor Running Shoes"
                price={899}
                image="https://m.media-amazon.com/images/I/71iBHgeeSZL._UX625_.jpg"
                />          
            </div>
            <div className="home__row">
            <Product 
                id="06"
                title="2019 Apple MacBook Pro (16-inch/40.65 cm, 16GB RAM, 1TB)"
                price={125000}
                image="https://m.media-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
                />
            <Product 
                id="07"
                title="realme Buds Q2 Active Noise Cancellation (ANC)"
                price={1999}
                image="https://m.media-amazon.com/images/I/61QyKqCvQIS._SL1500_.jpg://m.media-amazon.com/images/I/61KeIxmldLL._SL1500_.jpg"
                />
                <Product 
                id="08"
                title="Echo Dot (4th Gen, 2020 release) with clock |  LED display and Alexa (Blue)"
                price={4999}
                image="https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UL320_.jpg"
                />
                <Product
                id="09"
                title="Fashion Backpack for Girls"
                price={530}
                image="https://m.media-amazon.com/images/I/51uOID-87xL.jpg"
                />   
                <Product
                id="10"
                title="Women's Watch (Silver Colored Strap)"
                price={450}
                image="https://images-eu.ssl-images-amazon.com/images/I/81U+i+krZ4L._AC_UL160_SR160,160_.jpg"
                />   
            </div>
            <div className="home__row">
            <Product 
                id="11"
                title="Redmi 126 cm (50 inches) 4K Ultra HD Android Smart LED"
                price={38999}
                image="https://m.media-amazon.com/images/I/71Sdj04A8dS._SL1500_.jpg"
                />
                <Product 
                id="12"
                title="SHAUN Women's Sweatshirt"
                price={778}
                image="https://m.media-amazon.com/images/I/81lK1buSadL._AC_UL320_.jpg"
                />
                <Product
                id="13"
                title="Fashion Chikan Art"
                price={1999}
                image="https://m.media-amazon.com/images/I/41Zab9kd+4L._AC_UL320_.jpg"
                />   
                <Product
                id="14"
                title="Western Neckpiece Neck Chain"
                price={199}
                image="https://m.media-amazon.com/images/I/51be-m5sWDL._AC_UL320_.jpg"
                />   
                <Product
                id="15"
                title="OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)"
                price={29999}
                image="https://images-eu.ssl-images-amazon.com/images/I/41Gsj-Q-zOS._SX300_SY300_QL70_FMwebp_.jpg"
                />   
            </div>

          </div>  
        </div>
    )
}

export default Home;