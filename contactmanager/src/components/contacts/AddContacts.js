import React, { Component } from "react";

class AddContacts extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };
  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contacts</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter name..."
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email..."
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter phone..."
                value={phone}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block mt-3"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContacts;
