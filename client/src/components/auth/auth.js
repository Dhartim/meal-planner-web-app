import React, {Component} from "react";
import axios from 'axios';

export default function NavbarAuthCheck(ComponentToAuthorize) {

  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        loggedIn: false,
      };
    }

    componentDidMount() {
      axios
        .get('/checkauth', {
          headers: {
            'x-access-token': localStorage.getItem('jwtToken')
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
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
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