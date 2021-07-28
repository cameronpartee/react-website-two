import './Cards.css'
import React from 'react'
import CardItem from './CardItem'
import img1 from "../images/IMG_2861.jpg"
import img2 from "../images/IMG_2862.jpg"
import img3 from "../images/IMG_2863.jpg"
import img4 from "../images/IMG_2869.jpg"
import img5 from "../images/IMG_2871.jpg"

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these other items!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={img1}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Shoes"
                        path="/services"
                        />

                        <CardItem 
                        src={img2}
                        text="Travel through the islands of Bali in a private cruise"
                        label="Shoes"
                        path="/services"
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem 
                        src={img3}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle"
                        label="Outfit"
                        path="/services"
                        />

                        <CardItem 
                        src={img4}
                        text="Travel through the islands of Bali in a private cruise"
                        label="Outfit"
                        path="/services"
                        />

                        <CardItem 
                        src={img5}
                        text="Travel through the islands of Bali in a private cruise"
                        label="Outfit"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards
