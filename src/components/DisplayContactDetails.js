import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { getUsers } from '../selectors/DisplayContactsSelector';
import { connect } from 'react-redux';
import * as loadRecords from '../actions/LoadUserAction';
import '../App.css';

class DisplayContactDetails extends Component {

    componentDidMount() {
        this.props.actions();
    }

    toDisplayRecords(records,match){
     return records && records.filter(val=>val.general.firstName===match.params.fname);
    }
    render() {
        const { match ,records} = this.props;
        let display=this.toDisplayRecords(records,match);
        return (
            <div className="display-container">
                {display && display.map(person => {
                    return (
                        <Row key={person.general.firstName}>
                            <Col md={3}>
                                <img src={person.general.avatar} alt="contact person" className="contact-details-image" />
                            </Col>
                            <Col md={9}>
                                <h4>
                                    <span>{person.general.firstName} </span>
                                    <span> {person.general.lastName} </span>
                                </h4>
                                <div>{`${person.job.title} - ${person.job.company}`} </div><br />
                                <div>{`Email: ${person.contact.email}`} </div>
                                <div>{`Phone: ${person.contact.phone}`} </div>
                                <div>{`Address: ${person.address.zipCode},${person.address.street},${person.address.city},${person.address.country}`} </div>
                            </Col>
                        </Row>
                    )
                })}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        records: getUsers(state)
    }
}

export default connect(mapStateToProps, {
    actions: loadRecords.LoadUserAction
})(DisplayContactDetails);