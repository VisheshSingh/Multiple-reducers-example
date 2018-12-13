import React, { Component } from "react";
import { connect } from "react-redux";

class MyComp extends Component {
  render() {
    return (
      <div>
        <div className="button-1">
          <span>A:</span>
          <span>{this.props.a}</span>
          <button onClick={this.props.updateA}>Update A</button>
        </div>
        <div className="button-2">
          <span>B:</span>
          <span>{this.props.b}</span>
          <button onClick={this.props.updateB}>Update B</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    a: state.a,
    b: state.b
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateA: () => dispatch({ type: "UPDATE_A" }),
    updateB: () => dispatch({ type: "UPDATE_B" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComp);
