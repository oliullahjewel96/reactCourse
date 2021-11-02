import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
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
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
