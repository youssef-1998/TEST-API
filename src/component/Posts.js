import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getposts} from '../actions/actionsContacts'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { NavLink, BrowserRouter as Router } from 'react-router-dom';



class Posts extends Component {
    componentDidMount = () => {
        this.props.getposts()
    }
    render() {
        return (
            <div className="d-flex flex-column ">
                {this.props.postsList.filter(el => String(el.userId) == String(this.props.match.params.id)).map(post => <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>POST: {post.title}</Card.Text>
                        <NavLink to={`/comments/${post.id}`}>
                            <Button variant="primary">comments</Button>
                        </NavLink>
                    </Card.Body>
                </Card>)}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        postsList : state.Reducer

    };
}

export default connect(mapStateToProps,{getposts})(Posts);

