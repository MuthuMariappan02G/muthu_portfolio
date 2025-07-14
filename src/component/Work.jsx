// import React from "react";
import { Typography, Stack, Container, Box } from "@mui/material";
import Workitems from "./WorkItems";

const cmpyDetails = [
  {
    year: "Present",
    role: "Software Engineer",
    name: "Gove Enterprises",
    description: (
      <ul className="list-disc pl-5">
        <li>Analyzed user requirements to design and develop NextJS based software solutions and technical specifications.</li>
        <li>Developed, tested and debugged React components while ensuring comprehensive unit tests and documentation for code accuracy.</li>
        <li>Collaborated with cross functional teams to ensure quality assurance during development, applying deep knowledge of responsive design and CSS frameworks like MUI.</li>
        <li>Contributed to optimizing development processes, mentoring junior developers, and ensuring adherence to best practices in code quality and deployment.</li>
        <li>Gained familiarity with BackEnd technologies such as NodeJS and ExpressJS deployment processed on the cloud platforms like AWS.</li>
      </ul>
    )
  }
];

const workingProjectDetails = [
  {
    year: "2024 - Present",
    role: "Back-End Development",
    name: "Vektorr BillPay",
    description: "I contributed to creating the Rest API's. Subsequently, I worked on the Rest Business Layer for Business validation within the API. The technologies utilized encompassed NodeJS, ExpressJS, SQL."
  },
  {
    year: "2023 - 2024",
    role: "Front-End Development",
    name: "BaaS Accounts",
    description: (
      <ul className="list-disc pl-5">
        <li>Developed a scalable Business as a Service(Baas) application designed to streamline office operation through a suite of integrated tools.</li>
        <li>Spearheaded front-end development using NextJS implementing dynamic and user friendlyinterfaces to enhance productivity and user experience.</li>
        <li>Built and optimized back-end functionalities with NodeJS and ensured efficient data management using PostgresSQL.</li>
        <li>Played a critical role as a key front-end developer contributing to the overall design and functionality of the application.</li>
        <li></li>
      </ul>
    )
  },
  {
    year: "2023",
    role: "Front-End Development",
    name: "DMS - Document Management System",
    description: (
      <ul className="list-disc pl-5">
        <li>DMS is an application designed to reduce manual work for the team by recoring data recevied from client.</li>
        <li>It streamlines data entry and management, improving effciency and accuracy in handling client informations.</li>
        <li>Utilized ReactJS, NextJS, NodeJD and ExpressJS with JavaScript and TypeScript for a seamless Front-End to Back-End Experience.</li>
      </ul>
    )
  },
  
];

const educationDetails = [
  {
    year: "2019 - 2023",
    role: "B.E-ECE 8CGPA",
    name: "Francis Xavier Engineering College, Vannarpettai",
    description: "Tirunelveli"
  },
  {
    year: "2018 - 2019",
    role: "HSC-Computer Science 74.1%",
    name: "St.John's Higher Secondory School, Veeravanallur",
    description: "Tirunelveli"
  },
  {
    year: "2016 - 2017",
    role: "SSLC 91.2%",
    name: "St.John's Higher Secondory School, Veeravanallur",
    description: "Tirunelveli"
  },
  
];

const Work = () => {
  return (
    <>
      <Box id="work" sx={{ width: "100%", backgroundColor: "#f3f6f9", py: 4}}>
        <Container id="work" maxWidth="md" sx={{ py: 8 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" color="#00172D" py={2}> Work </Typography>
            <Stack spacing={0}>
              {cmpyDetails.map((item, index) => (
                <Workitems key={index} year={item.year} role={item.role} name={item.name} description={item.description} />
              ))}
            </Stack>
        </Container>
      </Box>
      <Box id="work" sx={{ width: "100%", backgroundColor: "#f3f6f9", py: 4}}>
        <Container id="projectwork" maxWidth="md">
          <Typography variant="h4" fontWeight="bold" textAlign="center" color="#00172D" py={4}> Work Project </Typography>
          <Stack spacing={0}>
            {workingProjectDetails.map((item, index) => (
              <Workitems key={index} year={item.year} role={item.role} name={item.name} description={item.description} />
            ))}
          </Stack>
        </Container>
      </Box>
      <Box id="work" sx={{ width: "100%", backgroundColor: "#f3f6f9", py: 4}}>
        <Container id="education" maxWidth="md" sx={{ py: 3 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" color="#00172D" py={2}> Education </Typography>
            <Stack spacing={0}>
              {educationDetails.map((item, index) => (
                <Workitems key={index} year={item.year} role={item.role} name={item.name} description={item.description} />
              ))}
            </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Work;
