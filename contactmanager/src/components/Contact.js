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
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;
