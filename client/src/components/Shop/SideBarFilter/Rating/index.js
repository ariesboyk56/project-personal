import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

export default function BasicRating({start}) {
  const [value, setValue] = React.useState(2);
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      {/* <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      <Rating name="read-only" value={start? Number(start) : value} readOnly />
    </Box>
  );
}