import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link
} from '@material-ui/core'

const StyledTableCell = withStyles(() => ({
  head: {
    fontSize: 18,
    fontWeight: 400
  },
  body: {
    fontSize: 18
  }
}))(TableCell)

const Users = ({ users }) => {
  const userStats = appUsers =>
    appUsers.map(u => (
      <TableRow key={u.id}>
        <StyledTableCell>
          <Link to={`/users/${u.id}`} component={RouterLink} color="secondary">
            {u.name}
          </Link>
        </StyledTableCell>

        <StyledTableCell>{u.blogs.length}</StyledTableCell>
      </TableRow>
    ))

  return (
    <Container maxWidth="sm">
      <Box mt={4} mb={3}>
        <Typography variant="h3" align="center" color="secondary" gutterBottom>
          Users
        </Typography>
      </Box>

      <Table aria-label="user table">
        <TableHead color="primary">
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>

            <StyledTableCell>Blogs</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>{userStats(users)}</TableBody>
      </Table>
    </Container>
  )
}

export default Users
