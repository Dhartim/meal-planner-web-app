import React, {Component} from "react";
import axios from 'axios';

import AccountContext from "../accountPage/accountContext";

export default function NavbarAuthCheck(ComponentToAuthorize) {

  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        loggedIn: false,
        redirect: false,
      };
    }

    componentDidMount() {
      const token = localStorage.getItem('jwtToken');
      console.log("token=%s", token);
      if(token !== null) {
        axios
          .get('/checkauth', {
            headers: {
              'x-access-token': token
            }
          })
          .then(res => {
            if (res.status === 200) {
              this.setState({
                loading: false,
                loggedIn: true,
              });
              console.log("Authorized.")
            } else {
              throw new Error(res.error);
            }
          })
          .catch(err => {
            console.log("auth error: %s", err);
            this.setState({
              loading: false,
              redirect: true
            });
          });
      } else {
        this.setState({
          loading: false,
          loggedIn: false,
        });
      }
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        console.log("Not logged in")
      }
      return (
        <React.Fragment>
          <ComponentToAuthorize auth={this.state.loggedIn} {...this.props} />
        </React.Fragment>
      );
    }
  }
}