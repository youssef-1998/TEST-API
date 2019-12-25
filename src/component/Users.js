import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import {getallcontact} from '../actions/actionsContacts'


class Users extends Component {
    componentDidMount = () => {
        this.props.getallcontact()
       
    }

    render() {
        return (
            <div className="d-flex flex-column ">
                {this.props.userlist.map(user => <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>NAME: {user.name}</Card.Title>
                        <Card.Title>USER NAme: {user.username}</Card.Title>
                        <Card.Text>EMAIL: {user.email}</Card.Text>
                        <NavLink to={`/posts/${user.id}`}>
                            <Button variant="primary">posts</Button>
                        </NavLink>
                    </Card.Body>
                </Card>)}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        userlist : state.Reducer

    };
}

export default connect(mapStateToProps,{getallcontact})(Users);

