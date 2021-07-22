import {
    useQuery
} from "@apollo/client";
import { ugc } from '../query/query'
import Imageblock from "./Imageblock";
import { useLocation } from "react-router-dom";
import { matchPath } from 'react-router'
import StarRatings from 'react-star-ratings';

const Ugc = () => {

    const loc = useLocation();

    const match = matchPath(loc.pathname, {
        path: '/product/:productid/:variantid/:title',
        exact: true,
        strict: false
    })

    const productid = match.params.productid;
    const { loading, error, data } = useQuery(ugc, { variables: { id: parseInt(productid) } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (<div className="container ugc-block pt-4">
        <div className="d-flex flex-row user-images ">
            {data.ugc.uploaded && data.ugc.uploaded.map((item, i) => (
                <Imageblock key={i} image={item} />
            ))}
        </div>
        <div className="pt-4"><h3>Reviews</h3></div>
        <div className="d-flex review-container">
            <div className="review-section">
                <div>
                    <StarRatings
                        rating={data.ugc.averageRating}
                        starRatedColor="Black"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                    />
                </div>
            </div>

            <div>
                {data.ugc.reviews && data.ugc.reviews.map((item, i) => (
                    <div className="reviews" key={i}>
                        <h4>{item.review_title}</h4>
                        <StarRatings
                            rating={item.rating}
                            starRatedColor="Black"
                            numberOfStars={5}
                            name='rating'
                            starDimension="15px"
                        />
                        <p>{item.review_content}</p>
                    </div>

                ))}
            </div>
        </div>

    </div>)
}

export default Ugc;
