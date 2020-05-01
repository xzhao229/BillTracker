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

export default function ReminderCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://wheninmanila.blob.core.windows.net/wheninmanilabucket/2020/03/paying-bills.jpg"
          title="Remind the due date"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Remind before the due
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Send you a reminder for each bill that is close to due date.
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
