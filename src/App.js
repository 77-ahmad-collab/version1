import logo from "./logo.svg";
import "./App.css";
import Section from "./components/Section.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { SideNav } from "react-sidenav";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import HomeCard from "./components/HomeCard.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login/Login";
// import AddProdConatiner from "./components/AddProdContainer.js"
import { DataProvider } from "./components/CardData.js";
import { CatererDataProvider } from "./components/Caterers.js";
import { FoodDataProvider } from "./components/FoodData.js";
// import SideNavPage from './components/SideNavbar';

import Header from "./components/Header";
import FoodDetails from "./components/FoodDetails.js";
import Appcheckout from "./checkout/Appcheckout";
// import Inedex from "./deghjee-checkout1/src";

function App() {
  return (
    <DataProvider>
      <FoodDataProvider>
        <CatererDataProvider>
          <div className="App">
            <BrowserRouter>
              {/* <Switch>
                <Route exact path="/">
                  <Section />
                </Route>
              </Switch> */}
              {/* <Switch> */}
              {/* <Header /> */}
              <Section />
              {/* <Login /> */}
              {/* <Section />
                </Route> */}
              {/* </Switch> */}
              {/* <Appcheckout /> */}
              {/* <FoodDetails /> */}
            </BrowserRouter>
          </div>
        </CatererDataProvider>
      </FoodDataProvider>
    </DataProvider>
  );
}

export default App;
