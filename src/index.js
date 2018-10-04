import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import axios from 'axios';

import { recipeStore } from './models/RecipeStore'

const myRecipeStore = recipeStore.create({
   recipes: [] 
}); 

// myRecipeStore.load('avocado', 9);

// Book stuff
// axios.get(`https://www.googleapis.com/recipes/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBE2vtFJYpk5DQnOd5Cwlq3o48GL-eP03Q`)
// .then(res => {
//   const blah = res.data;  
//   console.log( blah.items[6].volumeInfo.title ) ;
// })


ReactDOM.render(<App recipeStore={myRecipeStore}/>, document.getElementById('root'));


