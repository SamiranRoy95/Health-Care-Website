
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Login from './Login';
import Detail from './Detail';
import PrivateRoute from './PrivateRoute';
import NotFound from "./NotFound";
import Footer from './Footer';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
    
     <Router>
     <Header/>
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route  path="/home">
           <Home/>
         </Route>
         <Route path="/services">
           <Services/>
         </Route >
         <Route path="/about">
           <About/>
         </Route>

         <Route path="/contact">
           <Contact />
           </Route>

         <Route path="/login">
           <Login/>
         </Route>

         <PrivateRoute path="/detail/:detailid">
           <Detail/>
         </PrivateRoute>
         <Route component={NotFound} />
         
         
       </Switch>
       
           <Footer/>
           
     </Router>
     
    </div>
  );
}

export default App;
