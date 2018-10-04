import React, {Component} from 'react';
import { observer } from 'mobx-react';
import './RecipeView.css';
import { Image, Card } from 'semantic-ui-react';

class RecipeView extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }
    render() {
        const {recipe} = this.props;
        return (
            <Card onClick={this.showModal}>
                {recipe.read ? <Image src={recipe.image} label={{ as: 'a', corner: 'right', icon: 'check circle' }} /> : 
                    <Image src={recipe.image} />
                }
            
                <Card.Content>
                    <Card.Header>{recipe.label}</Card.Header>
                    <Card.Meta>
                        <span></span>
                    </Card.Meta>
                </Card.Content>

            </Card>
        )
    }
    handleToggleRead = (e) => {
        console.log(this.props.recipe);
        this.props.recipe.toggle();
        console.log("after: ", this.props.recipe.read);
    };    
    showModal = () => {
        this.setState({show:true});
    };
    hideModal = () => {
        this.setState({show:false});
    };
};

export default observer(RecipeView);