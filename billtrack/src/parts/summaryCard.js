import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 240,
  },

});

export default function SummaryCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.etsystatic.com/11315377/c/2459/1954/210/210/il/a1648b/2100684234/il_340x270.2100684234_c8xt.jpg"
          title="Summary all bills"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Summary all bills
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Generate a summary table that can show your upcoming bills and amount, edit at anytime.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="/sign-up">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
