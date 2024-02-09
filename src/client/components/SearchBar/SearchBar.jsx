import { FormControl, TextField, InputAdornment, Stack } from '@mui/material';
import Search from '@mui/icons-material/Search';

export function SearchBar({ searchQuery, onChange }) {
  return (
    <FormControl fullWidth>
      <Stack direction="row">
        <TextField
          sx={{
            '& .MuiInputBase-root': { borderRadius: '100px' },
          }}
          value={searchQuery}
          placeholder="Einen Namen eingeben, z.B. George Costanza"
          onChange={onChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </FormControl>
  );
}
