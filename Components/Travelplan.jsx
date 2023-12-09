import React from "react";
import { useEffect } from "react";
import "./Travelplan.css";

function Travelplan() {

    //only for the background
    useEffect(() => {
        document.body.classList.add("travelplan-body-background");
        return () => {
            document.body.classList.remove("travelplan-body-background");
        };
    }, []);

    //actual code starts from here
    return (
        <div className="app">

            <header className="header">
                <h1>Travel Plan & Precautions</h1>
            </header>
            <div className="content">
                <ul className="precautions">
                    <li>
                        <h2>
                            Traveling can be a wonderful and enriching experience, but it's
                            essential to take necessary precautions to ensure your trip goes
                            smoothly and safely.
                        </h2>
                        <br></br>
                    </li>
                    <li>
                        <h2>Research Your Destination</h2>
                        <ul>
                            <li>
                                Research the culture, customs, and local laws of your
                                destination.
                            </li>
                            <li>
                                Check for any travel advisories or health alerts from your
                                government.
                            </li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Travel Insurance</h2>
                        <ul>
                            <li>
                                Purchase comprehensive travel insurance to cover medical
                                emergencies, trip cancellations, lost luggage, and other
                                unexpected events.
                            </li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Vaccinations and Health Precautions</h2>
                        <ul>
                            <li>
                                Consult a healthcare professional to ensure you have all
                                necessary vaccinations for your destination.
                            </li>
                            <li>
                                Pack any prescription medications and a basic first-aid kit.
                            </li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Passport and Visa</h2>
                        <ul>
                            <li>
                                Ensure your passport is valid for at least six months beyond
                                your return date.
                            </li>
                            <li>Obtain any necessary visas or entry permits.</li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Safety and Security</h2>
                        <ul>
                            <li>Register with your embassy or consulate if required.</li>
                            <li>
                                Share your itinerary and contact information with a trusted
                                friend or family member.
                            </li>
                            <li>
                                Be aware of local safety conditions and avoid high-risk areas.
                            </li>
                            <li>
                                Keep copies of important documents, such as your passport,
                                separately from the originals.
                            </li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Finances</h2>
                        <ul>
                            <li>
                                Notify your bank of your travel plans to avoid any issues with
                                your credit/debit cards.
                            </li>
                            <li>
                                Carry a mix of payment methods, including cash and cards, and
                                keep them secure.
                            </li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Packing</h2>
                        <ul>
                            <li>
                                Pack appropriate clothing for the local climate and activities.
                            </li>
                            <li>
                                Consider the 3-1-1 rule for carrying liquids in your carry-on
                                luggage (3.4-ounce containers, 1 quart-sized clear bag, 1 bag
                                per passenger).
                            </li>
                            <li>Pack a universal adapter for electrical outlets.</li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Language</h2>
                        <ul>
                            <li>
                                Learn some basic phrases in the local language, or have a
                                translation app handy.
                            </li>
                            <li>Carry a language dictionary or translation app.</li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Safety Precautions</h2>
                        <ul>
                            <li>
                                Be cautious of your surroundings, especially in crowded areas.
                            </li>
                            <li>
                                Avoid displaying expensive items, and keep your belongings
                                secure.
                            </li>
                            <li>
                                Use reputable transportation options and be cautious with
                                unknown taxi drivers.
                            </li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Travel Itinerary</h2>
                        <ul>
                            <li>
                                Create an itinerary with important details, including hotel
                                reservations, emergency contacts, and local attractions.
                            </li>
                            <li>
                                Plan for alternative routes or accommodations in case of
                                unexpected changes.
                            </li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Emergency Contacts</h2>
                        <ul>
                            <li>
                                Carry a list of emergency contacts, including local emergency
                                services and your country's embassy or consulate.
                            </li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Local Transportation</h2>
                        <ul>
                            <li>
                                Research local transportation options and schedules in advance.
                            </li>
                            <li>Make sure you have a map or GPS app to navigate.</li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Stay Informed</h2>
                        <ul>
                            <li>
                                Stay updated on local news and events that may affect your
                                travel plans.
                            </li>
                            <li>
                                Be aware of local customs and etiquette to show respect to the
                                local culture.
                            </li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Environmental and Ethical Considerations</h2>
                        <ul>
                            <li>
                                Respect the environment and local customs by minimizing your
                                impact and supporting responsible tourism.
                            </li>
                        </ul>
                        <br></br>
                    </li>
                    <li>
                        <h2>Health and Hygiene</h2>
                        <ul>
                            <li>
                                Practice good hygiene and carry essential hygiene items like
                                hand sanitizer and face masks, especially in crowded or communal
                                settings.
                            </li>
                        </ul>
                    </li>
                    <br></br>
                    <br></br>
                    <h5>
                        <em>
                            Remember that being well-prepared and informed can significantly
                            enhance your travel experience while helping to ensure your safety
                            and well-being. Keep an open mind, embrace new experiences, and be
                            respectful of the local culture and customs for a truly enriching
                            journey.
                        </em>
                    </h5>
                </ul>
            </div>
        </div>
    );
}

export default Travelplan
