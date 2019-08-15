import React, {
    Component
} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        // console.log(dish);
        if(dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card> 
                    
                );
        } else {
            return (
                <div></div>
            );
        }
    }
    



    renderComments(dish) {
        if(dish != null) {
            let layoutComment = dish.comments.map((Comment) => {
                return ( 
                        <li key = {Comment.id} className="list-unstyled"> 
                            <div>
                                <p>{Comment.comment}</p>
                                <p>-- {Comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(Comment.date)))}</p>
                            </div>
                        </li>
                    
                    )
                }
            );
            return (
                <ul>
                    <h4>Comments</h4>
                    {layoutComment}
                </ul>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
    

    render() {
        // console.log(this.props.dish[0]);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish[0])}                    
                    </div>
                    
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish[0])}                        
                    </div>                        
                </div>
            </div>
        );
    }

}


export default DishDetail;