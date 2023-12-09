import React from "react";
import { useEffect } from "react";
import Hero from "../../Components/Hero";
import Serviceimg from "../../Components/assets/imgservice2.jpg"
import Footer from "../../Components/Footer";
import Servicetrip from "../../Components/Servicetrip";

function Service() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            <Hero cName="hero-mid"
                heroImg={Serviceimg}
                title="Service"
                url="/"
                btnclass="hide" />
            <Servicetrip />
            <Footer />
        </>
    )
}

export default Service