import { nanoid } from "nanoid";
import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Section } from "./Section/Section";


export class App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:""
  }

  componentDidUpdate(prevState){
    const {contacts} = this.state;
    if(contacts !== prevState.contacts){
      localStorage.setItem('contacts',JSON.stringify(contacts));
    }
  }

  componentDidMount(){
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  unique = (item) =>{
    const {contacts} = this.state;
    return Boolean(contacts.find((elem) => elem.name === item.name)) 
  }

  formHandler = (newItem) =>{
    if(this.unique(newItem)){
      alert(`${newItem.name} is repeatable contact`)
      return
    }
    const newContact={
      id:nanoid(3),
      ...newItem
    }
    this.setState((prev)=>({
      contacts:[...prev.contacts,newContact]
    }))
  }

  filterHandler = (e) => {
    this.setState({
      filter:e.target.value
    })
  }

  getFilteredList = () =>{
    if(this.state.filter ===""){
      return this.state.contacts;
    }
    return this.state.contacts.filter(item=>item.name.toLowerCase().includes(this.state.filter.toLowerCase().trim()));

  }

  removeContactHandler = (contactID) =>{
    this.setState((prev) => ({
      contacts:prev.contacts.filter(({ id }) => id !== contactID),
    }))
  }
  render(){
    return (
      <div
        style={{
          width: '100vh',
          display: 'block',
          color: '#010101',
          margin:'0 auto'
        }}
      >
     <Section title={"Phonebook"}>
      <ContactForm formHandler={this.formHandler} />
      </Section>
      <Section title={"Contacts"}>
        <ContactList contacts={this.getFilteredList()} filterHandler={this.filterHandler} removeHandler={this.removeContactHandler}/>
      </Section>
      </div>
    );
  }
};
