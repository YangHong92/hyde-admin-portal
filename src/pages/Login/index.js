import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router';
import {fetchReq, login} from '../../utils/utils';

import '../../styles/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    }
    this.email = React.createRef()
    this.password = React.createRef()

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();

    const props = this.props;
    const email = this.email;
    const pwd = this.password
    
    fetchReq('/api/login', {
      body: JSON.stringify({ 
        email: email.current.value, 
        password: pwd.current.value })
    }).then(data => {
      login(data.token)
 
      props.history.replace('/admin/admin_dashboard')
    }).catch(msg => 
      alert(msg)
    )
  }

  render() {
    const state = this.state;

    return (
      <div className="registerLogin-page">
      <div className="content-box container">
        <div className="row">
          <div className="col-md-6 form-col">
            <div className="logo-container">
              <Link className="logo" to="/" style={{'color': 'black'}}>
                Hyde International Talents
              </Link>
            </div>
            <div className="registerLogin-title_content">
              <h2>Admin Portal Log in </h2>
            </div>
            <form className="registerLogin-form">
              <div className="form-group ">
                <label>Username</label>
                <input type="email" className="form-control" ref={this.email} placeholder="HIT Admin"/>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" ref={this.password} placeholder="*******"/>
              </div>
              <div className="apply-btn create_btn btn" onClick={this.handleLogin}> Log in </div>
            </form>
          </div>
          <div className="col-md-6 bg-col">
            <div className="login-bg_image">
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(Login)