import { Label } from 'components/ContactForm/ContactForm.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';

export const ContactList = ({ contacts, filterHandler, removeHandler }) => {
  return (
    <>
      <Label>Find contacts by name</Label>
      <Filter handleFilterContact={e=>filterHandler(e)}/>
      <ul>
        {contacts.map(item => (
          <ContactItem
            key={item.id}
            name={item.name}
            number={item.number}
            removeHandler={() => removeHandler(item.id)}
          />
        ))}
      </ul>
    </>
  );
};
