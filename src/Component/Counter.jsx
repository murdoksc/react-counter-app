import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-1">
            {" "}
            <span className={this.badgeStyles()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            {" "}
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className={this.diableMinus()}
            >
              -
            </button>
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary m-2 "
              diabled={this.props.counter.value === 0 ? "disabled" : ""}
            >
              +
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger"
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }
  diableMinus() {
    return this.props.counter.value > 0
      ? "btn btn-secondary m-2 "
      : "btn btn-secondary m-2 disabled";
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
