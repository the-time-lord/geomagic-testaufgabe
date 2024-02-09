import { FormControl, TextField, Button, Stack } from '@mui/material';
import Search from '@mui/icons-material/Search';

export function SearchBar() {
  return (
    <FormControl fullWidth>
      <Stack direction="row">
        <TextField
          sx={{
            '& .MuiInputBase-root': { borderRadius: '4px 0px 0px 4px' },
            '& .MuiOutlinedInput-notchedOutline': { borderRight: '0px' },
          }}
          fullWidth
        />
        <Button
          variant="contained"
          size="large"
          startIcon={<Search />}
          sx={{
            borderRadius: '0px 4px 4px 0px',
          }}
        >
          Suchen
        </Button>
      </Stack>
    </FormControl>
  );
}
