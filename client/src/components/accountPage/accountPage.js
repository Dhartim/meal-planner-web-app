import React, { Component } from "react";
import Axios from "axios";

import AccountContext, {AccountProvider} from "../accountPage/accountContext";
import AccountConsumer from "../accountPage/accountContext"

export default class AccountPage extends Component {
    constructor(props) {
        super(props);
        // console.log("state")
        // console.log(this.state);
        // console.log(this.props);

        // const resp = this.getAccountDetails()
        // this.state = this.getAccountDetails();
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            userId: ""
        };
    }

    getAccountDetails = () => {
        // const { email, firstName, lastName } = this.state;
        console.log("Context")
        console.log(AccountContext)
        console.log(AccountConsumer)
        console.log(AccountProvider)
        // const email = AccountContext.email;
        // console.log(AccountContext)
        // console.log("EMAIL")
        // console.log(email)
        // Axios.get('/accountDetails', {params: {
        //     email: email}
        //     // firstName: firstName,
        //     // lastName: lastName
        // })
        //     .then((response) => {
        //         console.log("response")
        //         console.log(response.headers);
        //         console.log(response.body)
        //
        //         if (response.status === 200) {
        //             console.log(response.status);
        //         }
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }

    render() {

        let resp = this.getAccountDetails();

        return (
            <div>
                {/*<p>*/}
                resp: {resp}
                {/*</p>*/}
            </div>
        )
    }
}