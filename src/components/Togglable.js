import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, Button } from '@material-ui/core/'
import { Clear as ClearIcon } from '@material-ui/icons'

const Togglable = ({ buttonLabel, children }) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <Box mb={2}>
      <div style={hideWhenVisible}>
        <Button
          onClick={toggleVisibility}
          variant="outlined"
          color="primary"
          size="large"
          fullWidth
        >
          {buttonLabel}
        </Button>
      </div>

      <div style={showWhenVisible}>
        {children}

        <Typography component="div" align="right">
          <Button
            onClick={toggleVisibility}
            endIcon={<ClearIcon />}
            data-cy="cancel"
          >
            Cancel
          </Button>
        </Typography>
      </div>
    </Box>
  )
}

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Togglable
