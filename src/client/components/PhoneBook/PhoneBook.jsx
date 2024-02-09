import { SearchBar } from '../SearchBar';
import { ContactList } from '../ContactList';
import { Container } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_CONTACTS } from '../../graphql/queries';

export function PhoneBook() {
  const { loading, error, data } = useQuery(GET_CONTACTS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;
  return (
    <Container maxWidth="sm">
      <SearchBar />
      <ContactList contacts={data.contacts} />
    </Container>
  );
}
