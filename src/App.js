import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Created by '}
      <Link color='inherit' href='https://github.com/mdmundo'>
        Edmundo Paulino
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  },
  toggle: {
    paddingTop: theme.spacing(3)
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='static'
        color='default'
        elevation={0}
        className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            className={classes.toolbarTitle}>
            The Dark Mode
          </Typography>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth='xs' component='main' className={classes.heroContent}>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          color='textPrimary'
          gutterBottom>
          Pricing
        </Typography>
        <Typography
          variant='h5'
          align='center'
          color='textSecondary'
          component='p'>
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default Material-UI components
          with little customization.
        </Typography>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          className={classes.toggle}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            className={classes.button}
            startIcon={<Brightness2Icon />}>
            Dark Mode
          </Button>
        </Grid>
      </Container>
      {/* End hero unit */}
      {/* Footer */}
	<footer className={classes.footer}>
          <Container maxWidth='xs'>
            <Copyright />
          </Container>
        </footer>
      {/* End footer */}
    </div>
  );
};

export default App;
