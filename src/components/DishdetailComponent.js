import React, {
    Component
} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Menu from '../components/MenuComponent';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }


    renderComments(comments) {
        console.log(comments);
        if(comments != null) {
            return comments.map((Comment) =>
                (
                    <div>
                        <ul key = {Comment.id} className="list-unstyled"> 
                            <li>{Comment.comment}</li>
                            <li>-- {Comment.author} , {(new Date(Comment.date)).toDateString()}</li>
                        </ul>
                    </div>
                )
            );
        } else {
            return (
                <div></div>
            );
        }
    }
    

    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                             </CardBody>
                         </Card>
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            </div>
        );
    }

}


export default DishDetail;