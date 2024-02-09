import { SearchBar } from '../SearchBar';
import { Box, Container, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_CONTACTS } from '../../graphql/queries';
import { useState } from 'react';
import { useDebounce } from './PhoneBook.hooks';
import { ContactGroup } from '../ContactGroup';

export function PhoneBook() {
  const [searchQuery, setSearchQuery] = useState('');
  const debounceSearchedValue = useDebounce(searchQuery, 200);

  const { loading, error, data } = useQuery(GET_CONTACTS, {
    variables: { name: debounceSearchedValue },
  });

  if (error) return <p>Error : {error.message}</p>;

  const onSearchQueryChange = (e) => setSearchQuery(e.target.value);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" sx={{ marginTop: '60px', marginBottom: '40px' }}>
        Telefonbuch
      </Typography>
      <SearchBar searchQuery={searchQuery} onChange={onSearchQueryChange} />
      <Box sx={{ paddingY: '20px' }}>
        <ContactGroup contacts={data?.contacts} loading={loading} />
      </Box>
    </Container>
  );
}
