import { Box, Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react'

export default function  NavBar() {
  return (
    <Flex as="nav" p="10px" align="center" >
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">M</Box>
        <Text>mario@netninja.net</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  )
}