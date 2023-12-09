import React from "react";
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>TRVL</h1>
                    <p>Choose your favorite destination.</p>
                </div>
                <div>
                    <a href="#">
                        <FontAwesomeIcon className="fonticons" id="fb" icon={faFacebookSquare} />
                        <a href="#">
                            <FontAwesomeIcon className="fonticons" id="insta" icon={faInstagramSquare} />
                            <a href="#">
                                <FontAwesomeIcon className="fonticons" id="twitter" icon={faTwitterSquare} />

                                <a href="#">
                                    <FontAwesomeIcon className="fonticons" id="mail" icon={faEnvelope} />
                                </a>
                            </a>
                        </a>
                    </a>
                </div>


            </div>
            <div className="bottom">
                <div>
                    <h4>
                        Project
                    </h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>
                        Community
                    </h4>
                    <a href="/">Github</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>
                        Help
                    </h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshoot</a>
                    <a href="/">Contact Us</a>

                </div>
                <div>
                    <h4>
                        Others
                    </h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>

                </div>
            </div>
        </div>
    )
}

export default Footer;
