import React, { Component } from 'react';
import logo from '../assets/chef.svg';
import './App.css';
import RecipeListView from './RecipeListView/RecipeListView';


class App extends Component {
  render() {
    const {recipeStore} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
          <RecipeListView recipeStore={recipeStore} />
      </div>
    );
  }
}

export default App;
