import React from "react";
import { useEffect } from "react";
import Hero from "../../Components/Hero";
import Loginimg from "../../Components/assets/cover.jpg"
import Footer from "../../Components/Footer";
import Signin from "../../Components/Signin";

function Login() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero cName="hero-mid"
                heroImg={Loginimg}
                title="Login"
                url="/"
                btnclass="hide" />
            <Signin />
            <Footer />
        </>

    )
}

export default Login