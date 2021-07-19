import { useState } from 'react'

const Dimensions = (props) => {
    const [color, setColor] = useState(props.color)
    const [size, setSize] = useState(props.size)

    const { colors, sizes } = props.dimensions;

    // useEffect(() => {
    //     callFun(color, size)
    // }, [color, size])

    const callFunn = (selColor, selSize) => {
        setSize(selSize);
        setColor(selColor);
        props.fun(`Sport Shoe ${selColor} ${selSize}`)
    }

    // const callFun1 = (selSize) => {
    //     props.fun(`Sport Shoe ${color} ${selSize}`)
    // }

    return (<div >
        <div>Color:{color}</div>
        <div className="d-flex flex-row flex-wrap">
            {colors && colors.map((item, i) => (
                <div key={i} onClick={() => callFunn(item.title, size)}
                    className={color === item.title ? 'm-1 border border-primary variant-img' : 'm-1 border border-secondary variant-img'} >
                    <img src={item.images[0].src} alt={item.images[0].alt}></img>
                </div>
            ))}
        </div>
        <br />
        <div>Size:{size}</div>
        <div className="d-flex flex-row flex-wrap">
            {sizes && sizes.map((item, i) => (
                <button key={i} onClick={() => callFunn(color, item.title)}
                    className={size === item.title ? 'm-1 border border-primary variant-img' : 'm-1 border border-secondary variant-img'}>
                    {item.title}
                </button>
            ))}
        </div>
        <div>
            {props.quan === 0 && <p>Not available</p>}
        </div>
    </div>)

}

export default Dimensions;
