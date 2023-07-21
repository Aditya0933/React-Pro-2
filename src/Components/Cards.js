import { useState } from "react";
import Tours from "./Tours";

function Card( {id,name,image,info,price,removeTour}){
    const [readmore,setReadmore] = useState(false);
    const description = readmore ? info :`${info.substring(0,100)}....`;
    function readmoreHandler(){
        setReadmore(!readmore)
    }
    return (
        <div className="card">
            <img className="tour-img" src={image}></img>
            <div className="tour-info">
                <div className="tours-detail">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="tour-description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less` : `Read More`}
                    </span>     
                </div>
            </div>
            <div className="card-btn">
                <button className="btn">Intrested</button>
                <button className="btn" onClick={ () => removeTour(id)}>Not Intrested</button>
            </div>
        </div>
    );
}
export default Card;