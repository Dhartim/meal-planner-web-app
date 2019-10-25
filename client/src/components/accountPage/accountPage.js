import React, { Component } from "react";
import Axios from "axios";

export default class AccountPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            userId: ""
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
                    let account = response.data.account
                    this.setState({
                        email: account.email,
                        firstName: account.firstName,
                        lastName: account.lastName,
                        userId: account.id
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    };

    render() {
       return (
            <div>
                <p>
                Email: {this.state.email}
                </p>
                <p>
                Name: {this.state.firstName} {this.state.lastName}
                </p>
            </div>
        )
    }
}