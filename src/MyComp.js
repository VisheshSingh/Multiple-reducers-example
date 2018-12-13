import React, { Component } from "react";
import { connect } from "react-redux";

class MyComp extends Component {
  render() {
    return (
      <div>
        <div className="button-1">
          <span>A:</span>
          <span>{this.props.a}</span>
          <button onClick={() => this.props.updateA(this.props.b)}>
            Update A
          </button>
        </div>
        <div className="button-2">
          <span>B:</span>
          <span>{this.props.b}</span>
          <button onClick={() => this.props.updateB(this.props.a)}>
            Update B
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    a: state.redA.a,
    b: state.redB.b
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateA: b => dispatch({ type: "UPDATE_A", value: b }),
    updateB: a => dispatch({ type: "UPDATE_B", value: a })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComp);
