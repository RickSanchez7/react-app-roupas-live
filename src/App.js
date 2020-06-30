import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Cart from "./pages/cart";
import Products from "./pages/products";
import ProductsType from "./pages/products-type";
import Services from "./pages/services";
import Error from "./pages/error";
import Login from "./pages/login";
import Navbar from "./components/navbar";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

function App() {
  // const history = useHistory();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar currentUser={currentUser} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route path='/products/:titleId' children={<ProductsType />}></Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/login'>
            <Login currentUser={currentUser} />
          </Route>
          <Route path='/cart'>
            <Cart currentUser={currentUser} />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
