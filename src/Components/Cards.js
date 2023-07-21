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
            <img className="tour-img"></img>
            <div className="tour-info">
                <div className="tours-detail">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="tour-description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>     
                </div>
            </div>
            <div>
                <button className="ins">Intrested</button>
                <button className="not-ins" onClick={ () => removeTour(id)}>Not Intrested</button>
            </div>
        </div>
    );
}
export default Card;