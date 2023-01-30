import React, { Component } from "react";

export default class Searching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleUpdateCity(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.refresh(this.state.value);
  }
  render() {
    return (
      <div className="p-2 flex-grow-1">
        <form onClick={(event) => this.handleSubmit(event)}>
          <div className="d-flex">
            <div className="p-2 flex-grow-1">
              <input
                type="text"
                placeholder="Enter a city.."
                className="form-control"
                autoComplete="off"
                autoFocus="on"
                onChange={(event) => this.handleUpdateCity(event)}
                value={this.state.value}
              />
            </div>
            <div className="p-2">
              <input
                type="submit"
                value="🔎"
                className="btn btn-outline-primary w-100"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
