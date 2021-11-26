
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Contact from "./components/Contact/Contact";
import Card from "./components/Services/Card/Card";
import Destinations from "./components/Services/Destinations";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/shared/Header/Header";
import Footer from "./Pages/shared/Footer/Footer";
import CardDetails from "./components/Services/Card/CardDetails";
import AddDestinations from "./components/AddDestinations/AddDestinations";
import { AuthProvider } from "./Contexts/AuthProvider";
import Booking from "./components/Booking/Booking";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllOrders from "./components/AllOrders/AllOrders";
import MyOrders from "./components/MyOrders/MyOrders";


function App() {
  return (
   
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/card">
            <Card></Card>
          </Route>
          <PrivateRoute exact path="/booking/:_id">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute exact path="/my_orders">
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute exact path="/all_orders">
            <AllOrders />
          </PrivateRoute>
          <PrivateRoute exact path="/details/:_id">
            <CardDetails></CardDetails>
          </PrivateRoute>
          <Route exact path="/destinations">
            <Destinations></Destinations>
          </Route>
          <PrivateRoute exact path="/adddestinations">
            <AddDestinations></AddDestinations>
          </PrivateRoute>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
   
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    
  );
}

export default App;
