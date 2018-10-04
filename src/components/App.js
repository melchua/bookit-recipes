import React, { Component } from 'react';
import logo from '../assets/chef.svg';
import './App.css';
import RecipeListView from './RecipeListView/RecipeListView';
// import ModalModalExample from './modals/ModalModalExample';
import RecipeIngredientsModal from './modals/RecipeIngredientsModal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipeModalIsOpen: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  render() {
    const {recipeStore} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        
        <button onClick={this.handleOpenModal}>Show Me the Modal</button>
        {console.log(this.state.recipeModalIsOpen)}
        <RecipeIngredientsModal 
          isOpen={this.state.recipeModalIsOpen} 
          handleCloseModal={this.handleCloseModal}
        />
        {console.log(this.state.recipeModalIsOpen)}
        <RecipeListView recipeStore={recipeStore} />
        
      </div>
    );
  }

  handleOpenModal() {
    this.setState({recipeModalIsOpen: true});
  }

  handleCloseModal() {
    this.setState({recipeModalIsOpen: false});
  }

}

export default App;
