import React, { Component } from "react";
import Axios from "axios";

export default class AccountPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            firstName: '',
            lastName: ''
        };
    }

    getAccountDetails = () => {
        const { email, firstName, lastName } = this.state;

        Axios.get('/accountDetails', {
            email: email,
            firstName: firstName,
            lastName: lastName
        })
            .then((response) => {
                console.log(response.headers);

                if (response.status == 200) {
                    console.log(response.status);
                }
            })
            .catch(error => {
                console.log(error.body);
            })
    }

    render() {
        return (
            <div>
                <p>
                    Email: {this.state.email}, First Name: {this.state.firstName}, Last Name: {this.state.lastName}
                </p>
            </div>
        )
    }
}