import { SearchBar } from '../SearchBar';
import { Box, Container, Paper, Stack, Typography } from '@mui/material';
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

  const searchResults = data?.contacts?.results ?? [];
  const total = data?.contacts?.total ?? 0;

  const onSearchQueryChange = (e) => setSearchQuery(e.target.value);
  const clearSearch = () => setSearchQuery('');

  return (
    <Container maxWidth="sm" sx={{ paddingY: '24px' }}>
      <Paper elevation={4} sx={{ paddingX: '40px', overflow: 'hidden' }}>
        <Stack
          alignItems="center"
          sx={{ marginTop: '60px', marginBottom: '40px' }}
        >
          <Typography variant="h3">Telefonbuch</Typography>
        </Stack>
        <SearchBar
          searchQuery={searchQuery}
          onChange={onSearchQueryChange}
          clearSearch={clearSearch}
        />
        {!loading && (
          <Stack direction="row-reverse" sx={{ marginTop: '8px' }}>
            <Typography variant="caption">
              Kontakte gefunden: {total}
            </Typography>
          </Stack>
        )}
        <Box sx={{ paddingTop: '16px', paddingBottom: '60px' }}>
          <ContactGroup contacts={searchResults} loading={loading} />
        </Box>
      </Paper>
    </Container>
  );
}
