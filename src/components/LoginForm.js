import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Avatar,
  Typography,
  TextField,
  Button
} from '@material-ui/core'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(9),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    marginTop: theme.spacing(2)
  }
}))

const LoginForm = ({ username, password, handleSubmit }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="xs">
      <div className={classes.root}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h2" variant="h5">
          Sign In to Bloglist
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form} id="login-form">
          <TextField
            {...username}
            name="Username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            label="Username"
          />

          <TextField
            {...password}
            name="Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
          />

          <Button
            data-cy="submit"
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.submit}
            fullWidth
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default LoginForm
