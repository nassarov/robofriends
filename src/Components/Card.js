import React from "react";
const Card = ({email , name ,id})=>{
    return(
        <div className="bg-light-green dib grow br3 pa3 ma2 bw2 shadow-5 "> 
        {/* We used Tachyons */}
            <img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;