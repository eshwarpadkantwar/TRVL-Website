import React from "react";
import Destinationdata from '../Components/Destinationdata'
import '../Components/Destination.css'
import Mountain1 from "../Components/assets/taj-mahal.jpg"
import Mountain2 from "../Components/assets/tajmahalp2.jpg"
import Mountain3 from "../Components/assets/colosseum.jpg"
import Mountain4 from "../Components/assets/colosseum2.jpg"

function Destination() {

    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>
            <Destinationdata className="first-des"
                heading="Taj Mahal, Agra, India"
                text="The Taj Mahal is one of the most iconic and breathtaking monuments in the world. This magnificent white marble mausoleum, located in Agra, India, is a UNESCO World Heritage Site and a symbol of eternal love. Built by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, the Taj Mahal is an architectural marvel that blends Persian, Islamic, and Indian design influences"
                img1={Mountain1}
                img2={Mountain2} />

            <Destinationdata className="first-des-reverse"
                heading="The Colosseum, Rome, Italy"
                text="The Colosseum, or the Flavian Amphitheatre, is an enduring symbol of ancient Rome located in the heart of Italy's capital. Its monumental architecture has defied time and consistently mesmerized global visitors. This historic amphitheater, completed in 80 AD, once hosted grand spectacles for crowds of up to 80,000 people, showcasing gladiatorial contests and other forms of entertainment. As you step into its colossal stone arches, you can vividly imagine the echoes of ancient cheers and the dramatic events that unfolded within."
                img1={Mountain3}
                img2={Mountain4} />
        </div >
    )
}

export default Destination