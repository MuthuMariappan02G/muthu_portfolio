// import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Projectdetails from './ProjectDetails';

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#00172D', mb: 4 }}>
          Projects
        </Typography>
        <Typography align="center" sx={{ mb: 6 }}>
          The front-end web development project utilized a powerful combination of HTML, CSS, 
          JavaScript, React.js, and MUI (Material UI) to create a dynamic and visually appealing 
          user interface. By leveraging React.js, the project achieved an efficient component-based 
          architecture, while MUI (Material UI) enabled rapid styling and customization. The seamless 
          integration of these technologies resulted in a modern, responsive, and engaging web 
          application that effectively combines functionality with an intuitive user experience.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {/* <Typography>Comming Soon......</Typography> */}
            <Projectdetails img={""} title="" url="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
