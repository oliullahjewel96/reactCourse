import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Oli",
        email: "oli@gmail.com",
        phone: "18073847430",
      },
      {
        id: 2,
        name: "john",
        email: "john@gmail.com",
        phone: "9834798327983",
      },
      {
        id: 3,
        name: "jewel",
        email: "jewel@gmail.com",
        phone: "67834273487",
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
