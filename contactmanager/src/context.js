import React, { Component } from "react";

const Context = React.createContext();
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
