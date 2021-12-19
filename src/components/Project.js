import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import project1 from "../images/html-css-javascrit.jpg";
import project3 from "../images/best-php-development-company.png";
import project4 from "../images/react-native.jpg";
import project6 from "../images/reactjs-2.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Project 1",
    description: `To design and develop various web pages & user interfaces by reffering the 
    given template making buttons, adding the links, adding images, working with layout 
    and a lot of cool stuff in web designing  using only HTML and CSS! `,
    image: project1,
  },

  {
    name: "Project 2",
    description: `To develop UI as per requirement and mockup using react and redux,
    Create pages for different screen resolutions using CSS and Material UI. 
    Worked on developing various functionalities Develop components as per the requirement !`,
    image: project6,
  },
  {
    name: "Project 3",
    description: `React Native is great for mobile apps. It provides a slick, 
    smooth and responsive user interface, we can  use the React framework 
    along with native platform having experience of developing 
    various components for mobile apps!`,
    image: project4,
  },
  {
    name: "Project 4",
    description: `PHP is a scripting language that can be used to develop dynamic and interactive websites. 
    It was among the first server-side languages that could be embedded into HTML, 
    making it easier to build web pages.!`,
    image: project3,
  },

];

function Project() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="left">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"

                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
                  Share
                </Button> */}
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Project;
