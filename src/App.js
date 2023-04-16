import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import { Footer } from "./containers/Footer";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = useState(false);
  let [color] = useState("#36d7b7");

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    marginTop: "350px",
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2750);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <ClimbingBoxLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/product/:productId" component={ProductDetails} />
            <Route>404 Not Found!</Route>
          </Switch>
          <Footer></Footer>
        </Router>
      )}
    </div>
  );
}

export default App;
