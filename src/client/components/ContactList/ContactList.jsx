import { Box, Divider } from '@mui/material';
import { ContactItem } from '../ContactItem';

export function ContactList({ contacts }) {
  return contacts.map((data, index) => (
    <>
      <Box key={index} disableGutters sx={{ marginY: '20px' }}>
        <ContactItem data={data} />
      </Box>
      <Divider />
    </>
  ));
}
