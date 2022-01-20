import { useSelector } from 'react-redux';

import { useFetchContactsQuery } from '../../redux/contacts/contacts-reducer';
import { getFilterWord } from '../../redux/contacts/contacts-selectors';

import ContactItem from '../ContactItem';
import s from './ContactList.module.css';


export default function ContactList() {
  const filterWord = useSelector(getFilterWord); 
  const { data } = useFetchContactsQuery();

  const getfilteredContacts = contacts =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterWord.toLowerCase()),
    );

  const filteredContacts = data ? getfilteredContacts(data) : null;

  return (
    <>
      <ul className={s.contactList}>
        {data &&
          filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} phoneNumber={number} />
          ))}
      </ul>
    </>
  );
}
