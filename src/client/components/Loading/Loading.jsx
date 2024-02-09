import { Stack, Skeleton } from '@mui/material';

export function Loading() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <Stack
          key={i}
          direction="row"
          spacing={2}
          sx={{ marginTop: '40px', width: '100%' }}
        >
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ flexShrink: 0 }}
          />
          <Stack direction="column" justifyItems="center" sx={{ flex: 1 }}>
            <Skeleton animation="wave" sx={{ width: '40%' }} />
            <Skeleton animation="wave" sx={{ width: '30%' }} />
          </Stack>
        </Stack>
      ))}
    </>
  );
}
