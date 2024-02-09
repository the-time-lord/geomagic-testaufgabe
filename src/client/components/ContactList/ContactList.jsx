import { Box, Divider } from '@mui/material';
import { ContactItem } from '../ContactItem';
import { Fragment } from 'react';

export function ContactList({ entries }) {
  return (
    <>
      {entries.map((data) => (
        <Fragment key={`${data.name}-${data.phone}`}>
          <Box sx={{ marginY: '20px' }}>
            <ContactItem data={data} />
          </Box>
          <Divider />
        </Fragment>
      ))}
    </>
  );
}
