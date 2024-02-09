import {
  FormControl,
  TextField,
  InputAdornment,
  IconButton,
  Stack,
} from '@mui/material';
import Search from '@mui/icons-material/Search';
import Clear from '@mui/icons-material/Clear';

export function SearchBar({ searchQuery, onChange, clearSearch }) {
  return (
    <FormControl fullWidth>
      <Stack direction="row">
        <TextField
          sx={{
            '& .MuiInputBase-root': { borderRadius: '100px' },
          }}
          value={searchQuery}
          placeholder="Einen Namen eingeben, z.B. Raphael Costeau"
          onChange={onChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {searchQuery !== '' && (
                  <IconButton onClick={clearSearch}>
                    <Clear />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </FormControl>
  );
}
