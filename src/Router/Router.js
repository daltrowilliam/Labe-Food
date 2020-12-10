import {BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';
import InitialPage from '../Pages/InitialPage'
import LoginPage from '../Pages/LoginPage'
import SignUpPage from '../Pages/SignUpPage'
import FeedPage from '../Pages/FeedPage'
import ProfilePage from '../Pages/ProfilePage'
import AddressPage from '../Pages/AddressPage'
import RestaurantPage from '../Pages/RestaurantPage'
import EditProfilePage from '../Pages/EditProfilePage'
import { GlobalState } from '../Global/GlobalState';
import CartPage from '../Pages/CartPage';
import { MainContainer } from '../Pages/Styles/styles';
import BottomMenu from '../Components/BottomMenu/BottomMenu';
import Header from '../Components/HeaderMenu/Hearder';
import OnGoingOrder from '../Components/onGoingOrder/OnGoingOrder';


export default function Router() {
  return (
    <BrowserRouter>
    <GlobalState>
      <MainContainer>
        <Header/>
        <Switch>
            <Route exact path="/" component={InitialPage}/>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/sign_up" component={SignUpPage} />
            <Route exact path="/feed" component={FeedPage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/update_profile" component={EditProfilePage} />
            <Route exact path="/restaurant/:id" component={RestaurantPage} />
            <Route exact path="/address_form" component={AddressPage} />
            <Route exact path="/cart" component={CartPage} />
        </Switch>
        <OnGoingOrder/>
        <BottomMenu/>
      </MainContainer>
    </GlobalState>
    </BrowserRouter>
  );
}
