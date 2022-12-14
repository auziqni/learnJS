import { Component } from "react";

// form and list

function ValueList(props) {
  return (
    <ul>
      {props.item.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", listvalue: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.setState({
      listvalue: [...this.state.listvalue, this.state.value],
      value: "",
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            {/* Name: */}
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ValueList item={this.state.listvalue} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <div>{/* <form onSubmit={} */}</div>;
  }
}

export default NameForm;
