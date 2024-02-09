import { SearchBar } from '../SearchBar';
import { ContactList } from '../ContactList';
import { Box, Container, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_CONTACTS } from '../../graphql/queries';

export function PhoneBook() {
  const { loading, error, data } = useQuery(GET_CONTACTS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;
  return (
    <Container maxWidth="sm" sx={{ marginY: '60px' }}>
      <Typography variant="h3" sx={{ marginBottom: '40px' }}>
        Telefonbuch
      </Typography>
      <SearchBar />
      <Box sx={{ paddingY: '20px' }}>
        <ContactList contacts={data.contacts} />
      </Box>
    </Container>
  );
}
