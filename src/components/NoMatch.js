import React from 'react'
import { Box, Typography } from '@material-ui/core'

const NoMatch = () => (
  <Box mt={6} pt={4}>
    <Typography variant="h5" component="p" align="center">
      This page does not exist!
    </Typography>
  </Box>
)

export default NoMatch
