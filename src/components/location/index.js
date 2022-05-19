import React from 'react';

const Location = () => {
    return(
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15354.097018941404!2d-47.9713124!3d-15.829020099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a31da36aa6579%3A0x4d6e81b090f7c83d!2zQ2VudHJvIGRlIFNhw7pkZSBuwrAgMiAtIEd1YXLDoQ!5e0!3m2!1sen!2sbr!4v1652958101212!5m2!1sen!2sbr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
                width="100%" 
                height="500px" 
                frameBorder="0"
                title="gglemaps" 
                allowFullScreen>
            </iframe>

            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>

        </div>
    )
}

export default Location;