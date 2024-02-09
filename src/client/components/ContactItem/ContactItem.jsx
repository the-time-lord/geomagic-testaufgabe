import { Avatar, Stack, Typography } from '@mui/material';

export function ContactItem({ data }) {
  const { name, phone } = data;
  const initials = name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('');

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar>{initials}</Avatar>
      <Stack direction="column" justifyItems="center">
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{phone}</Typography>
      </Stack>
    </Stack>
  );
}
