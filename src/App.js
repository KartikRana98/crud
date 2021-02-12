import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';

import Books from "./containers/Books";
import CreateBook from "./containers/CreateBook";

import './App.css';

class App extends React.Component {
   constructor(props){
     super(props);
   }

   render(){
      return (
        <Router>
            <div className="App container border mt-4">
          <Switch>
              {/* <Books/> */}
              {/* <CreateBook/> */}
            
            
            <Route path="/" exact component={Books}/>
            <Route path="/create" exact component={()=><CreateBook/>}></Route>
            <Route path="/create/:id" exact component={()=><CreateBook/>}></Route>
          </Switch>
          </div>
        </Router>

        
      );

   }
}

export default App;
