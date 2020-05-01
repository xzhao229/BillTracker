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

export default function BudgetCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.expocart.com/media/cache/blog/2018-12-20/1920x/7dd9ee70fcfb3a1b111f9b822fac5983/CalculateBudget_5c1b92ecd109a.jpg"
          title="Budgets that work"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Budgets that work
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Create budge you can actually stick to, and see how you are spending your money
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
