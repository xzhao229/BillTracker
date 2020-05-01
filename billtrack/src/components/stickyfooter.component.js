import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <div class="d-flex justify-content-center">
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Bill Tracker
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '38vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <footer className={classes.footer}>
        <Container maxWidth="md">
        <div class="row">
           <div class="col  d-flex justify-content-start">
           <ul>
               <Typography variant="h6"> Contact </Typography>
               <Typography variant="body1"> <i class="fas fa-envelope" aria-hidden="true"></i> <a href="mailto:xzhao229@wisc.edu"> xzhao229@wisc.edu </a> </Typography>
               <Typography variant="body1"> <i class="fas fa-phone" aria-hidden="true"></i> 123-456-7890 </Typography>
               <Typography variant="body1"> <i class="fas fa-map-marker-alt" aria-hidden="true"></i> 5000 Forbes Ave, Pittsburgh</Typography>
           </ul>
           </div>
           <div class="col  d-flex justify-content-center">
               <ul>
                    <Typography variant="h6"> Menu </Typography>
                    <Typography variant="body1"> <a href="/sign-in"> Sign In </a> </Typography>
                    <Typography variant="body1"> <a href="/sign-up"> Sign Up </a> </Typography>
                    <Typography variant="body1">  <a href="/"> Home </a></Typography>
               </ul>
           </div>
           <div class="col  d-flex justify-content-end">
               <ul>
                    <Typography variant="h6"> Follow Us </Typography>
                    <Typography variant="body1"> <i class="fab fa-github" aria-hidden="true"></i> <a href="https://github.com/xzhao229"> Mason Zhao</a> </Typography>
                    <Typography variant="body1"> <i class="fab fa-instagram" aria-hidden="true"></i> <a href="https://www.instagram.com/xzhao229"> xzhao229 </a></Typography>
                    <Typography variant="body1"> <i class="fab fa-linkedin" aria-hidden="true"></i> <a href="https://www.linkedin.com/in/xucheng-zhao-435237158"> Xucheng Zhao </a></Typography>
               </ul>
           </div>
        </div>
        <Copyright />
        </Container>
      </footer>
    </div>
  );
}