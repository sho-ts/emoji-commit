import { Text, Box, Container } from '@chakra-ui/react';

const Header: React.VFC = () => {
  return (
    <Box
      as="header"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      py={3}
    >
      <Container maxW="container.lg">
        <Text
          as="h1"
          color="#fff"
          fontSize="md"
          fontWeight="bold"
        >
          EmojiCommit
        </Text>
      </Container>
    </Box>
  )
}

export default Header;