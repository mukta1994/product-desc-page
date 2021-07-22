import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const SlideShow = (props) => {

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];



    return (<div>
         {/* <Carousel images={props.showimgs} /> */}
         <ImageGallery items={images} />
    </div>)
}

export default SlideShow;
