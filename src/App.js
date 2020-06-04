import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";

function App() {
    return (
        <React.Fragment>
            <Header/>
            <div className="container">
              <Nav/>
              <Main/>
            </div>
        </React.Fragment>
    );
}

export default App;
