import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent'

export default AuthenticatedComponent(class Home extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.user.login}</h1>
    );
  }
});
