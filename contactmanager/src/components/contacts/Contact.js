import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

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
  onClickDelete = async (id, dispatch) => {
    try {
      await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showStateInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
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
                  onClick={this.onClickDelete.bind(this, id, dispatch)}
                ></i>
              </h4>
              {showStateInfo ? (
                <ul className="list-group">
                  <li className="list-group-item"> Email: {email} </li>{" "}
                  <li className="list-group-item"> Phone: {phone} </li>{" "}
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
