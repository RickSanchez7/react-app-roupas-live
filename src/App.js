import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Home from './pages/home';
// import About from './pages/about';
// import Cart from './pages/cart';
// import Products from './pages/products';
// import ProductsType from './pages/products-type';
// import Services from './pages/services';
// import Login from './pages/login';
import Error from './pages/error';
import Navbar from './components/navbar';
import Loading from './components/loading.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

//React.lazy Loading
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Cart = lazy(() => import('./pages/cart'));
const Products = lazy(() => import('./pages/products'));
const ProductsType = lazy(() => import('./pages/products-type'));
const Services = lazy(() => import('./pages/services'));
const Login = lazy(() => import('./pages/login'));

function App() {
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
          <Suspense fallback={<Loading />}>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/products'>
              <Products />
            </Route>
            <Route
              path='/products/:titleId'
              children={<ProductsType />}
            ></Route>
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
          </Suspense>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
