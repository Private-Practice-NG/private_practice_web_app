import React, { Component } from 'react'
import UserLogin from './UserLogin/UserLogin';
import SpecialistLogin from './UserLogin/UserLogin';
import HospitalLogin from './UserLogin/UserLogin';

// Import Css
import './loginpage.css';


export default class LoginPage extends Component {

    state = {
        usertype: ''
    }

    componentDidMount() {
        let usertype = this.props.match.params.usertype;
        this.setState({ usertype });
    }

    render() {
        if (this.state.usertype === 'user') {
            return (<UserLogin />);
        }
        if (this.state.usertype === 'specialist') {
            return (<SpecialistLogin />);
        }
        if (this.state.usertype === 'hospital') {
            return (<HospitalLogin />);
        }
        return(
            
        );
    }
}
