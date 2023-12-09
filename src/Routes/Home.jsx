import React from "react";
import { useEffect } from "react";
import homeimg from "../../Components/assets/scenary2.jpg"
import Hero from "../../Components/Hero";
import Destination from "../../Components/Destination";
import Trip from "../../Components/Trip";
import Footer from "../../Components/Footer";


function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    document.body.style.backgroundColor = "whitesmoke";

    return (
        <>
            <Hero cName="hero"
                heroImg={homeimg}
                title="Your Journey Your Uncharted Story"
                text="Choose Your Favourite Destination."
                btntext="Travel Plan"
                url="/travel-plan"
                btnclass="show" />
            <Destination />
            <Trip />
            <Footer />

        </>
    )
}

export default Home