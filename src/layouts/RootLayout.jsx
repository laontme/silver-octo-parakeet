import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Grid, GridItem } from '@chakra-ui/react'

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem as="aside" colSpan="1" bg="purple.400" min="100vh" p="30px">
        <span>sidebar</span>
      </GridItem>
      
      <GridItem as="main" colSpan="5" p="40px" >
        <NavBar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
