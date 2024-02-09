import { ContactItem } from '../ContactItem';

export function ContactList({ contacts }) {
  return contacts.map((data, index) => <ContactItem key={index} data={data} />);
}
