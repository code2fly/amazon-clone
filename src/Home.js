import React from 'react';
import Product from './Product';
import './Home.css';



function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id="1234678"
                        title="The lean startup: How Constant innovation creates Radically Successfull Business Paperback"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={5} />
                    <Product
                        id="987654"
                        title="One stop Laptop accessories - With all possible accessories you can imagine."
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg"
                        rating={4} />
                </div>

                <div className="home__row">

                    <Product
                        id="987084"
                        title="Mini Waffle maker - automatic waffle maker "
                        price={9.90}
                        image="https://m.media-amazon.com/images/I/71wvIZCRZ1L._AC_SY400_.jpg"
                        rating={2} />
                    <Product
                        id="987634"
                        title="Mixer grinder and juicer"
                        price={25.99}
                        image="https://m.media-amazon.com/images/I/71zrQU+yLvL._AC_SY400_.jpg"
                        rating={4} />
                    <Product
                        id="987624"
                        title="One stop Laptop accessories "
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg"
                        rating={4} />
                </div>

                <div className="home__row">

                    <Product
                        id="987624"
                        title="TLC QLed TV - Best QLed TV in market, Netflix, Hulu, Youtube premium subscription free for 1 year"
                        price={700.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Ut6ZxFbpL._AC_SL1500_.jpg"
                        rating={5} />

                </div>

            </div>
        </div>
    )
}

export default Home
