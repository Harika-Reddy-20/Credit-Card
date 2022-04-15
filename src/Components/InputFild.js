import React from "react";

class InputFild extends React.Component {
    render() {
        return (
        <input
            type="tel"
            name={this.props.name}
            maxLength={this.props.length}
            onChange={this.props.handleChange}
            size={5}
            // value={this.props.fieldName}
        ></input>
        );
    }
    }

export default InputFild;