import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';


const SlideShow = (props) => {

    return (<div>
         <Carousel images={props.showimgs} />
    </div>)
}

export default SlideShow;
