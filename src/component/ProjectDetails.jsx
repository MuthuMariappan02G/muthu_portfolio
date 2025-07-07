// import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, Link } from '@mui/material';

const Projectdetails = ({ img, title, url }) => {
  return (
    <Card
      sx={{
        position: 'relative', width: '100%', height: 'auto',
        borderRadius: 3, boxShadow: 6, overflow: 'hidden',
        '&:hover .overlay': { opacity: 1 },
        '&:hover img': { opacity: 0.1 },
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <CardMedia component="img" image={img} alt={title}
        sx={{ borderRadius: 3, transition: 'opacity 0.3s ease-in-out' }}
      />
      <Box
        className="overlay"
        sx={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          bgcolor: 'linear-gradient(to right, #e5e7eb, #00172D)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          alignItems: 'center', opacity: 0, transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h5" component="h3" sx={{ color: 'white', fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography sx={{ color: 'white', mt: 1 }}>React Js</Typography>
          <Link href={url} target="_blank" underline="none">
            <Button
              variant="contained"
              sx={{ mt: 2, backgroundColor: 'white', color: 'gray.800', fontWeight: 'bold',
                '&:hover': { backgroundColor: 'gray.200' },
              }}
            >
              More Details
            </Button>
          </Link>
        </CardContent>
      </Box>
    </Card>
  );
};

export default Projectdetails;
