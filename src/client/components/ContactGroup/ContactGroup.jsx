import { Box, Divider, Typography } from '@mui/material';
import { ContactList } from '../ContactList';
import { Loading } from '../Loading';

export function ContactGroup({ contacts, loading }) {
  if (loading) return <Loading />;

  return (
    <>
      {contacts.map(({ letter, entries }) => (
        <div key={letter}>
          <Box sx={{ marginTop: '40px' }}>
            <Typography variant="h5">{letter}</Typography>
          </Box>
          <Divider />
          <ContactList entries={entries} />
        </div>
      ))}
    </>
  );
}
