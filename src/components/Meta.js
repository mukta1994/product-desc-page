import { Helmet } from "react-helmet"
import {
  useQuery,
} from "@apollo/client";
import { Metadata } from '../query/query'



const Meta = (props) => {

  const { loading, error, data } = useQuery(Metadata,{variables:{pid:parseInt(props.id)}});
  if(data)
    console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    return <Helmet>
      <meta charSet="utf-8" />
      <title>{data.metadata.page_title}</title>
      <meta
        name="description"
        content={data.metadata.description}
      />
      <meta name="keywords" content={data.metadata.keywords}></meta>
    </Helmet>

}

export default Meta;
