import './App.css';
import ProductDesc from "./components/ProductDesc";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Helmet } from "react-helmet"
// import {
//   useQuery,
//   gql
// } from "@apollo/client";



function App() {

  // const Metadata = gql`
  //   {
  //     metadata(pid:1) {
  //       pid
  //       title
  //       desc
  //     }
  //     }
  // `;

  // const { loading, error, data } = useQuery(Metadata);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;
  return <div>

    {/* <Helmet>
      <meta charSet="utf-8" />
      <title>{data.metadata.title}</title>
      <meta
        name="description"
        content={data.metadata.desc}
      />
    </Helmet> */}
    <h1>asdfgh</h1>
    <ProductDesc />
    <Router>
      <Switch>
        <Route path="/product" component={ProductDesc} />
      </Switch>
    </Router>
  </div>

}

export default App;
