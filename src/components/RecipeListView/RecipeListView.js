import React, {Component} from 'react';
import RecipeView from '../RecipeView/RecipeView';
import { Card } from 'semantic-ui-react';
import { observer } from 'mobx-react';


class RecipeListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    componentDidMount() {
    
    }

    render() {
    const {recipeStore} = this.props;

    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="search" value={this.state.search} onChange={this.handleChange} />
                <input type="submit" value="Search" />
            </form>

            <Card.Group>
            {recipeStore.recipes.map((recipe) => <RecipeView key={recipe.id} recipe={recipe}/>)}
            </Card.Group>
        </div>
        )
    }

    handleChange = event => {
        this.setState({
            search: event.target.value
        });
    }

    handleSubmit = event => {
        this.props.recipeStore.load(this.state.search, 9);
        event.preventDefault();
    }
}
export default observer(RecipeListView);
