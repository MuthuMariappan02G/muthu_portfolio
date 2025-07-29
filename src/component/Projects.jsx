// import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Projectdetails from './ProjectDetails';
import ReactHotel from "../assets/images/React-Hotel.png"

const Projects = () => {
  return (
    <Box id="projects" sx={{ width: "100%", backgroundColor: "#f3f6f9", py: 4}}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#00172D', mb: 4 }}>
          Projects
        </Typography>
        <Typography align="center" sx={{ mb: 6 }}>
          The front-end web development project utilized a powerful combination of HTML, CSS, 
          JavaScript, React.js, and MUI (Material-UI), Bootstrap to create a dynamic and visually appealing 
          user interface. By leveraging React.js, the project achieved an efficient component-based 
          architecture, while MUI (Material UI) enabled rapid styling and customization. The seamless 
          integration of these technologies resulted in a modern, responsive, and engaging web 
          application that effectively combines functionality with an intuitive user experience.
        </Typography>

        <Grid container spacing={4} 
          sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
        >
          <Grid item xs={12} sm={6}>
            {/* <Typography>Comming Soon......</Typography> */}
            <Projectdetails img={ReactHotel} title="React-Hotel" url="https://hotel-book-react.netlify.app/" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
