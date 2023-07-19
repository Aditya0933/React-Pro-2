import { useState } from "react";
import Tours from "./Tours";

function Cards( {id,name,info,image,price},removeTourHandler){
    const [readmore,setReadmore] = useState(false)
    const description = `${info.substring(0,200)}`
    function readmoreHandler(){
        setReadmore(!readmore)
    }
    return (
        <div>
            <img scr={image}></img>
            <div className="tour-info">
                <div className="tours-detail">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="tour-description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore?`show less` : `read more`}
                    </span>
                </div>
            </div>
            <div>
                <button className="ins">Intrested</button>
                <button className="not-ins" onClick={ () => removeTourHandler(id)}>Not Intrested</button>
            </div>
        </div>
    );
}