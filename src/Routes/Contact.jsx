import React from "react";
import { useEffect } from "react";
import Hero from "../../Components/Hero";
import Contactimg from "../../Components/assets/3.jpg"
import Footer from "../../Components/Footer";
import Contactform from "../../Components/Contactform";

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero cName="hero-mid"
                heroImg={Contactimg}
                title="Contact"
                url="/"
                btnclass="hide" />
            <Contactform />
            <Footer />
        </>
    )
}

export default Contact