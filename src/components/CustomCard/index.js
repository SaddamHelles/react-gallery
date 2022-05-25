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
    <Card sx={{ width: 320, height: 280, margin: "20px 10px" }}>
      <CardMedia
        component="img"
        height="180"
        image={props.urls.small}
        alt="green iguana"
      />
      <CardContent
        sx={{
          fontSize: "20px",
          marginBottom: "0px",
          paddingBottom: 0,
          height: 40,
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {props.user.first_name}
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
