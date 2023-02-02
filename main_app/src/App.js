import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { Routes as Switch, Route } from 'react-router-dom';
import PrivateRoute from './containers/PrivateRoute';
import Login from './containers/login';
import Tree from './containers/Tree';
import About from './containers/About';
import TreeRendererRenderer from './containers/TreeRendererRenderer'
import QrScanner from './containers/QRScanner';
import AboutProj from './containers/AboutProj';
import Contact from './containers/Contact';
import HomePage from './containers/Home';
import EnterID from './containers/EnterID';
import NoPageFound from './containers/NoPageFound';
import Ribbon from './containers/Ribbon';

function App() { 
    const item = {
        location: "Peril Farm",
        name: "Rice grains",
        description: "Rice grains",
        quantity: "500",
        expirationDate: "12/3/23",
        sourceInfo: "Farm",
        cost: 1000,
        compliance: {
          temperature: (temp) => temp <= 20,
          moisture: (moisture) => moisture <= 60,
        },
        componentItems: [
            {
                location: "Peril Farm",
                name: "Rice grains",
                description: "Rice grains",
                quantity: "500",
                expirationDate: "12/3/23",
                sourceInfo: "Farm",
                cost: 1000,
                compliance: {
                  temperature: (temp) => temp <= 20,
                  moisture: (moisture) => moisture <= 60,
                },
                componentItems: [
                  
                ]
            }
        ]
    };
    return (
      <>
      <Ribbon />
      <Switch>
        <Route path="/" exact element={ <Login /> } />
        <Route path="/tree" exact element={ <Tree item={item}/> } />
        <Route path="/item/:id" element={ <TreeRendererRenderer /> } />
        <Route path="/home" exact element={ <HomePage /> } />
        <Route path="/qr" exact element={ <QrScanner /> } />
        <Route path="/search" exact element={ <EnterID /> } />
        <Route path="/about_us" exact element={ <About/>} />        
        <Route path="/contact_us" exact element={ <About/>} />
        <Route path="/about_project" exact element={ <About/>} />
        <Route exact path="/supplynode" element={<PrivateRoute><NoPageFound /></PrivateRoute>} />
        <Route path='*' element={< NoPageFound/>} />
      </Switch>
      </>
    );
  }
  
  export default App;
  //https://prod.liveshare.vsengsaas.visualstudio.com/join?4AB725A0D01267066BAD238B8ECB427B5F07
