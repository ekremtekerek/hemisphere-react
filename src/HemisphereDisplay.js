import React from 'react';
import './Hemisphere.css'
import NorthernPic from './img/nothern.jpg';
import SouthernhernPic from './img/southern.jpg';


const hemisphereConfig = {
    Northern : {
        text : "it is northern hemisphere",
        picture : NorthernPic
    },
    Southern : {
        text : "it is Southern hemisphere",
        picture : SouthernhernPic
    }
}

function HemisphereDisplay({ latitude }) {

    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const { text, picture } = hemisphereConfig[hemisphere]

    return (
        <div className={hemisphere}>

            <div className="ui raised text container segment">
                <div className="image">
                     <img src={picture} alt="" />
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{ text }</h1>
                </div>
            </div>

            
            
        </div>
    )
}

export default HemisphereDisplay
