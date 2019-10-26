import React, { Component } from "react";
import Axios from "axios";

import Stripe from "../stripe";

export default class AccountPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            userId: "",
            customerId: "",
            expiresAt: "",
            createdAt: "",
            updatedAt: "",
        };
    }

    componentDidMount() {
        const jwtToken = localStorage.getItem('jwtToken');
        Axios.get('/account', {
            headers: {"x-access-token" : jwtToken}
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.status);
                    let account = response.data.account;
                    let customer = account.Customer;
                    this.setState({
                        email: account.email,
                        firstName: account.firstName,
                        lastName: account.lastName,
                        userId: account.id
                    });
                    if (customer) {
                        this.setState({
                            customerId: customer.id,
                            expiresAt: customer.expiresAt,
                            createdAt: customer.createdAt,
                            updatedAt: customer.updatedAt,
                        });
                    }
                }
            })
            .catch(error => {
                console.log(error);
            })
    };

    render() {

        let message;
        if (this.state.customerId) {
            message = <div>
                <p>
                    Your subscription is current.
                </p>
                <p>
                    Expires: {this.state.expiresAt}
                </p>
            </div>
        } else {
            message = <Stripe />;
        }

       return (
            <div>
                <p>
                Email: {this.state.email}
                </p>
                <p>
                Name: {this.state.firstName} {this.state.lastName}
                </p>
                {message}
            </div>
        )
    }
}