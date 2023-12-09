import React from "react";
import './Servicetrip.css';
import Servicedata from "./Servicedata";
import Service1 from '../Components/assets/flightbooking.jpg';
import Service2 from '../Components/assets/hotels.jpg';
import Service3 from '../Components/assets/vacation2.jpg';

function Servicetrip() {
    return (
        <div className="strip">
            <h1>Our Services</h1>
            <p>Elevate Your Journey with Our Exceptional Services</p>
            <div className="stripcard">
                <a href="https://www.skyscanner.co.in" target="_blank">
                    <Servicedata
                        simage={Service1}
                        sheading="Flight Bookings"
                        stext="Flight booking allows travelers to search for and reserve flights to their desired destinations. Whether it's a one-way journey, round trip, or multi-city itinerary, this service provides options for finding and purchasing airline tickets to reach your destination by air."
                    />
                </a>

                <a href="https://www.cleartrip.com/hotels" target="_blank">
                    <Servicedata
                        simage={Service2}
                        sheading="Hotel Reservations"
                        stext="Hotel reservations enable travelers to find and secure accommodations at hotels, resorts, or other lodging options. Users can choose from a variety of options, compare prices, and make bookings for their stay, ensuring a comfortable and convenient place to rest during their travels"
                    />
                </a>

                <a href="https://www.thomascook.in/holidays/international-tour-packages" target="_blank">
                    <Servicedata
                        simage={Service3}
                        sheading="Vacation Packages"
                        stext="Vacation packages provide all-inclusive travel experiences, bundling flights, accommodations, and often activities or tours into a single package. These packages are designed to simplify travel planning, offering convenience and cost savings for those looking for a comprehensive travel solution."
                    />
                </a>
            </div>
        </div>
    );
}

export default Servicetrip;
