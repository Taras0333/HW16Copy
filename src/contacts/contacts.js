import React, { Component } from "react";
import Cont from "./contact";
import maleLogo from "./images/male.svg";
import femaleLogo from "./images/female.svg";
import anonimus from "./images/anonimus.svg";

class Contacts extends Component {
  state = {
    contacts: [
      {
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male",
      },
      {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female",
      },
      {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666",
      },
      {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female",
      },
      {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male",
      },
      {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male",
      },
    ],

    person: "Default",
    isActive: false,
  };

  setImg = (gender) => {
    if (gender === "male") {
      return maleLogo;
    } else if (gender === "female") {
      return femaleLogo;
    } else {
      return anonimus;
    }
  };
  changeTitle = (event) => {
    const { value } = event.target;
    this.setState({
      person: value,
    });
  };

  find = (e) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => {
        return (
          el.firstName.toLowerCase().indexOf(this.state.person.toLowerCase()) >
            -1 ||
          el.lastName.toLowerCase().indexOf(this.state.person.toLowerCase()) >
            -1 ||
          el.phone.indexOf(this.state.person) > -1
        );
      }),
      isActive: true,
    }));
  };

  render() {
    return (
      <div className="wrapper">
        {!this.state.isActive && (
          <>
            <input
              className="input"
              placeholder="find person"
              onChange={this.changeTitle}
            ></input>
            <button className="btn" onClick={this.find}>
              submit
            </button>
          </>
        )}

        {this.state.contacts.map((contact) => (
          <Cont
            firstName={contact.firstName}
            lastName={contact.lastName}
            phone={contact.phone}
            gender={this.setImg(contact.gender)}
          />
        ))}
      </div>
    );
  }
}
export default Contacts;
