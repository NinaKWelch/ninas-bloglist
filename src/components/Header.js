import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { logoutUser } from '../reducers/loginReducer'
import { setNotification } from '../reducers/notificationReducer'

import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Hidden, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark
  },
  grow: {
    flexGrow: 1
  },
  button: {
    marginLeft: theme.spacing(2)
  }
}))

const Header = props => {
  const classes = useStyles()
  const { user, logoutUser, setNotification } = props

  const logout = () => {
    logoutUser()
    setNotification(`${user.name} logged out`, 'success')
  }

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography variant="h5" component="h1" color="inherit">
          Blogs App
        </Typography>

        <div className={classes.grow} />

        <div>
          <Hidden xsDown>Logged in as {user.name}</Hidden>

          <Button
            onClick={logout}
            className={classes.button}
            variant="outlined"
            size="small"
          >
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutUser,
  setNotification
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
