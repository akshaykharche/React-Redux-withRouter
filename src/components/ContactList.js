import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';
export class ContactList extends Component {
    render() {
        return (
            <Grid>
                {this.props && this.props.records.map(person => {
                    return (
                        <Row key={person.general.firstName} className="row-style" >
                            <Col md={3}>   <img src={person.general.avatar} alt="contact person" className="image-resolution" /> </Col>
                            <Col md={9}>
                                <Link to={`/contacts/${person.general.firstName}`} target="_blank">
                                    <span>{person.general.firstName} </span>
                                    <span> {person.general.lastName} </span>
                                </Link>
                                <div>{person.job.title} </div>
                            </Col>
                        </Row>
                    )
                })}
            </Grid>
        );
    }
}

export default ContactList;
