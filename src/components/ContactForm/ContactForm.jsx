import { Component } from "react";
import { Form,Button,Label} from "./ContactForm.styled";

export class ContactForm extends Component{

  state = {
    name:'',
    number:''
  }
  dataHandler = e =>{
   this.setState({
    [e.target.name] : e.target.value
   })
  }
  submitHandler = (e) => {
    e.preventDefault();
    this.props.formHandler(this.state)
    e.currentTarget.reset();
  }
  render(){

  return (
    <Form onSubmit={this.submitHandler}>
    <Label htmlFor="">Name </Label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={this.dataHandler}
      />
    <Label htmlFor="">Number</Label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={this.dataHandler}
        />
      <Button type="submit">Save</Button>
    </Form>
  );
  }
};
