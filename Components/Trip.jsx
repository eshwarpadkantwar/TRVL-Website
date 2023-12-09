import React from "react";
import "./Trip.css";
import Tripdata from "./TripData";
import Trip1 from '../Components/assets/paris.jpg'
import Trip2 from '../Components/assets/london.jpg'
import Trip3 from '../Components/assets/egypt.jpg'

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <Tripdata
                    image={Trip1}
                    heading="Trip in Paris"
                    text="Paris, often called the 'City of Lights,' captivates with its romantic ambiance and iconic landmarks like the Eiffel Tower and Louvre Museum. Explore charming streets, savor world-class cuisine, and visit historic sites in this enchanting city."
                />
                <Tripdata
                    image={Trip2}
                    heading="Trip in London"
                    text="London, the UK's dynamic capital, blends rich history with modern allure. Home to Buckingham Palace, the British Museum, and West End theaters, it offers a fusion of tradition and contemporary culture. Discover diverse neighborhoods, historic architecture, and global flavors."
                />
                <Tripdata
                    image={Trip3}
                    heading="Trip in Egypt"
                    text="Egypt, in northeastern Africa, immerses you in ancient grandeur with the Pyramids of Giza, Sphinx, and Nile River temples. Journey through time to unravel pharaohs' mysteries and experience the timeless beauty of this remarkable land."
                />
            </div>
        </div>
    );
}

export default Trip;
