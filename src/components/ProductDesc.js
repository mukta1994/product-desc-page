import {
  useLazyQuery,
  gql
} from "@apollo/client";
import Dimensions from './Dimensions/Dimensions'
import SlideShow from './SlideShow'
import { useState, useEffect } from 'react'


const ProductDesc = () => {

  const [title, setTitle] = useState("Sport Shoe White 38");


  const Product = gql`
  {
    variant(title:"${title}"){
      product{
        id
      title
      size
      color
      desc
      quantity   
      }
   images{
      src
      alt
    }
    }
    products {
      id
      name
      dimensions{
        colors{
          title
          images{
            src
            alt
          }
        }
        sizes{
          title
        }
      }
    }
  }
`;


  const [runQuery, { loading, error, data }] = useLazyQuery(Product);

  useEffect(() => {
    runQuery();
  }, []);

  const callFun = (titlename) => {
    setTitle(titlename);
    runQuery();
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (<div className="container pt-4">
    {data &&
      <div className="d-flex">
        <div className="w-50">
          <SlideShow showimgs={data.variant.images} />
        </div>

        <div className="p-2">
          <h3>{data.variant.product.title}</h3>
          <Dimensions dimensions={data.products.dimensions} size={data.variant.product.size}
            color={data.variant.product.color} quan={data.variant.product.quantity} fun={(name) => callFun(name)} />
          <div>{data.variant.product.desc}</div>
        </div>
      </div>
    }
  </div>)
}

export default ProductDesc;
