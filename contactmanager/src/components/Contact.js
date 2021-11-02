import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  //   static propTypes = {
  //     name: PropTypes.bool.isRequired,
  //     email: PropTypes.string.isRequired,
  //     phone: PropTypes.string.isRequired,
  //   };

  state = {
    showStateInfo: false,
  };

  // onShowClick = () => {
  //   this.setState({
  //     showStateInfo: !this.state.showStateInfo,
  //   });
  // };
  onClickDelete = () => {
    this.props.deleteClickHandler();
  };
  render() {
    const { name, email, phone } = this.props.contact;
    const { showStateInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={() =>
              this.setState({
                showStateInfo: !this.state.showStateInfo,
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          ></i>
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onClickDelete}
          ></i>
        </h4>
        {showStateInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email:{email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired,
};

export default Contact;
