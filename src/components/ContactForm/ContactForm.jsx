import { useState } from "react";
import { Form,Button,Label} from "./ContactForm.styled";

export const ContactForm = ({formHandler}) => {

  const [name, setName] = useState('');
  const [number, setNumber]= useState('');

 

  const submitHandler = (e) => {
    e.preventDefault();
    formHandler({name,number});
    e.currentTarget.reset();
  }


  return (
    <Form onSubmit={e=>submitHandler(e)}>
    <Label htmlFor="">Name </Label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e=>setName(e.target.value)}
      />
    <Label htmlFor="">Number</Label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={e=>setNumber(e.target.value)}
        />
      <Button type="submit">Save</Button>
    </Form>
  );
};
