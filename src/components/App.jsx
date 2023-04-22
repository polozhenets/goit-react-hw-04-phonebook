import { nanoid } from 'nanoid';
import {  useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const  formHandler = ({name,number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.some(i => i.name === name)
      ? alert(`${name} is already in contacts`)
      : setContacts(prevState=>[...prevState, ...contacts]);
  };

  const  filterHandler = e => {
    setFilter(e.target.value);
  };

 const getFilteredList = () => {
    if(filter===""){
      return contacts;
    }
    return contacts.filter(({name})=>name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  };

  const removeContactHandler = contactID => {
    setContacts(prevState=>prevState.filter(i => i.id !== contactID));
  };
  return (
    <div
      style={{
        width: '100vh',
        display: 'block',
        color: '#010101',
        margin: '0 auto',
      }}
    >
      <Section title={'Phonebook'}>
        <ContactForm formHandler={formHandler} />
      </Section>
      <Section title={'Contacts'}>
        <ContactList
          contacts={getFilteredList()}
          filterHandler={filterHandler}
          removeHandler={removeContactHandler}
        />
      </Section>
    </div>
  );
};
