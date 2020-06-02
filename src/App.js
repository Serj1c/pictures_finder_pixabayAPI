import React, {Component} from 'react';
import './App.css';
import NavBar from './Navbar/Navbar';
import Search from './Search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <NavBar />
        <Search />
        </div>
      </MuiThemeProvider>
    );
  } 
};

export default App;

