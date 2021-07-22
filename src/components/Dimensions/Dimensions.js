import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Dimensions = (props) => {
    const [color, setColor] = useState(props.attr.product.color)
    const [selectedSize, setselectedSize ] = useState("")
    const [quant, setquant ] = useState(undefined)
    const availableSizes = props.attr.availableSizes;

    const history = useHistory();

    const callFunn = (selColor,url) => {
        sizeChanged("")
        setColor(selColor.color)
        history.push(`/product/${url}`);
    }

    const sizeChanged=(item)=>{
        setselectedSize(item.size)
        setquant(item.quan)
    }

    return (
        <div >
        <div>Select Color</div>
        <div className="d-flex flex-row variant-images">
            {props.features && props.features.map((item, i) => (
                <div key={i} onClick={() => callFunn(item, item.url)}
                    className={color === item.color ? 'm-1 border border-primary variant-img' : 'm-1 border border-secondary variant-img'} >
                    <img src={item.images[0].src} alt={item.images[0].alt}></img>
                </div>
            ))}
        </div>
        <br />
        <div>Select Size</div>
        <div className="d-flex flex-row flex-wrap">
            {availableSizes && availableSizes.map((item, i) => (
                <button key={i} onClick={() => sizeChanged(item)}
                    className={selectedSize === item.size ? 'm-1 border variant-img active' : 'm-1 border border-secondary variant-img'}>
                    {item.size}
                </button>
            ))}
        </div>
        <div>
            {parseInt(quant)===0 && <p className="not-available">Not available</p>}
            {parseInt(quant)===1 && <p>Only one left. Don't miss it. Hurry up</p>}
        </div>
            
    </div>
    )
}

export default Dimensions;
