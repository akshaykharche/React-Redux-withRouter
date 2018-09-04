import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactList from './ContactList';
import SearchDetails from './SearchContactDetails';
import * as loadRecords from '../actions/LoadUserAction';
import { getUsers } from '../selectors/DisplayContactsSelector';
import MDSpinner from "react-md-spinner";
import '../App.css';

export class ContactDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedRecords: []
        }
        this.searchDetails = this.searchDetails.bind(this);
    }

    searchDetails(event) {
        let records = this.props && this.props.records;
        let searchValue = event.target.value;
        let updatedRecords = records.filter(value => {
            return (value.general.firstName.toLowerCase() === searchValue.toLowerCase() ||
                value.general.lastName.toLowerCase() === searchValue.toLowerCase() ||
                value.job.title.toLowerCase() === searchValue.toLowerCase()
            )
        })
        this.setState({ updatedRecords })
    }
    componentDidMount() {
        this.props.actions();
    }
    render() {
        let { updatedRecords } = this.state;
        let { records, loading } = this.props;
        if (loading) {
            return <MDSpinner className="spinner" size={150} />
        }
        return (
            <div className="outer-container">
                <div><SearchDetails onChange={this.searchDetails} /></div>
                {updatedRecords && updatedRecords.length > 0 ?
                    <ContactList records={updatedRecords} /> : records ?
                        <ContactList records={records} /> : null}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        records: getUsers(state),
        loading: state.users && state.users.loading
    }
}

export default connect(mapStateToProps, {
    actions: loadRecords.LoadUserAction
})(ContactDetails);
