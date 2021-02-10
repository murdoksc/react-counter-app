import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className={this.badgeStyles()}>{this.formatCount()}</h1>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary "
        >
          INCREMENT
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          DELETE
        </button>
      </div>
    );
  }
  badgeStyles() {
    return this.props.counter.value <= 0
      ? "badge badge-warning m-2"
      : "badge badge-primary m-2";
  }

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  formatCount() {
    return this.props.counter.value <= 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
