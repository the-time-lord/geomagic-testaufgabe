import { FormControl, TextField, InputAdornment, Button } from '@mui/material';
import Search from '@mui/icons-material/Search';

export function SearchBar() {
  return (
    <FormControl fullWidth>
      <TextField
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          endAdornment: (
            <Button variant="contained" size="large">
              Suchen
            </Button>
          ),
        }}
      />
    </FormControl>
  );
}
