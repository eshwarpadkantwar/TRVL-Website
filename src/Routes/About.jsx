import React from "react";
import { useEffect } from "react";
import Hero from "../../Components/Hero";
import Aboutimg from "../../Components/assets/aboutimg3.jpg"
import Footer from "../../Components/Footer";
import Aboutus from "../../Components/Aboutus";

function About() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero cName="hero-mid"
                heroImg={Aboutimg}
                title="About"
                url="/"
                btnclass="hide" />
            <Aboutus />
            <Footer />
        </>
    )
}

export default About