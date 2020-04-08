import React, { Component } from "react";
class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    user: "",
    date: this.minDate,
  };
  handlerDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  handlerText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handlerCheckBox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };
  handlerUser = (e) => {
    console.log(e.target.value);
    this.setState({
      user: e.target.value,
    });
  };

  handlerClick = () => {
    const { text, date, checked, user } = this.state;
    const add = this.props.addTask(text, date, checked, user);
    if (!add) {
      this.setState({
        text: "",
        checked: false,
        user: "",
        date: this.minDate,
      });
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="dodaj zadanie"
          value={this.state.text}
          onChange={this.handlerText}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          id="inportend"
          onChange={this.handlerCheckBox}
        />
        <label htmlFor="inportand">Na cito</label>

        <label htmlFor="data">Do kiedy zrobić</label>
        <input
          type="date"
          value={this.state.date}
          min={this.minDate}
          max="2021-12-31"
          onChange={this.handlerDate}
        />
        <ChangeUser change={this.handlerUser} />
        <button onClick={this.handlerClick}>Dodaj</button>
      </div>
    );
  }
}
const ChangeUser = (props) => (
  <>
    <select name="nazwa" onChange={props.change}>
      <option value="">Wybierz os.</option>
      <option value="Dorcia">Dorcia</option>
      <option value="Aśka">Aśka</option>
      <option value="Marlenka">Marlenka</option>
      <option value="Aneta">Aneta</option>
      <option value="Ewelina">Ewelina</option>
      <option value="Agnieszka">Agnieszka</option>
      <option value="Kaśka">Kaśka</option>
      (...)
    </select>
  </>
);

export default AddTask;
