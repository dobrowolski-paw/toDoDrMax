import React, { Component } from "react";
class ChangeUser extends Component {
  state = {
    person: ""
  };
  changeUser = () => {
    this.props.changeUser(this.state.person);
  };

  handlerUser = e => {
    this.setState({
      person: e.target.value
    });
    this.changeUser();
  };

  render() {
    // console.log(this.state.person);
    return (
      <>
        <select name="nazwa" onChange={this.handlerUser}>
          <option value="">Wybierz os.</option>
          <option value="Dorcia">Dorcia</option>
          <option value="Aśka">Aśka</option>
          <option value="Marlenka">Marlenka</option>
          <option value="Aneta">Aneta</option>
          (...)
        </select>
      </>
    );
  }
}

export default ChangeUser;
