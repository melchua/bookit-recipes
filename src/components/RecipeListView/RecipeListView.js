import React, {Component} from 'react';
import RecipeView from '../RecipeView/RecipeView';
import { Card, Header } from 'semantic-ui-react';
import { observer } from 'mobx-react';

class RecipeListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }
    componentDidMount() {
    
    }

    render() {
    const {recipeStore} = this.props;
    console.log(this.state.recipes);
    return (
        <div>
            <Header as='h1'>Search Recipes</Header> 
            <Card.Group>
            {recipeStore.recipes.map((recipe) => <RecipeView key={recipe.id} recipe={recipe}/>)}
            </Card.Group>
        </div>
        )
    }
}
export default observer(RecipeListView);
