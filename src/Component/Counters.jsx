import React, { Component } from "react";
import reactDom from "react-dom";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onDecrement,
      onIncrement,
    } = this.props;
    return (
      <React.Fragment>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <button className="btn btn-primary m-2" onClick={onReset}>
                  RESET
                </button>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                {counters.map((m) => (
                  <Counter
                    key={m.id}
                    counter={m}
                    onDelete={onDelete}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                  ></Counter>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Counters;
