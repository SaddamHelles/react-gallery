import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CustomCard(props) {
  console.log("Props: ", props);
  return (
    <Card sx={{ maxWidth: 345, margin: "20px 10px" }}>
      <CardMedia
        component="img"
        height="180"
        image={props.urls.small}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.user.first_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.alt_description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => window.open(props.urls.full)} size="small">
          Heigh Resolution
        </Button>
        <Button
          onClick={() =>
            window.open(`https://unsplash.com/@${props.user.username}`)
          }
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
