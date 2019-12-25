import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'
import {getcomments} from '../actions/actionsContacts'



class Comments extends Component {
    componentDidMount = () => {
        this.props.getcomments()
    }
    render() {
        return (
            <div className="d-flex flex-column ">
                {this.props.commentslist.filter(el => String(el.postId) == String(this.props.match.params.id)).map(comment => <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>COMMENTS: {comment.name}</Card.Text>
                    </Card.Body>
                </Card>)}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        commentslist : state.Reducer

    };
}
export default connect( mapStateToProps,{getcomments})(Comments);
   
