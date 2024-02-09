import { FormControl, TextField, Button, Stack } from '@mui/material';
import Search from '@mui/icons-material/Search';

export function SearchBar({ searchQuery, onChange }) {
  return (
    <FormControl fullWidth>
      <Stack direction="row">
        <TextField
          sx={{
            '& .MuiInputBase-root': { borderRadius: '4px 0px 0px 4px' },
            '& .MuiOutlinedInput-notchedOutline': { borderRight: '0px' },
          }}
          value={searchQuery}
          placeholder="Einen Namen eingeben, z.B. George Costanza"
          onChange={onChange}
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
