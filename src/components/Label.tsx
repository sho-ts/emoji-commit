import { Text } from '@chakra-ui/react';

const Label: React.FC = ({ children }) => {
  return (
    <Text
      width={{ base: "100%", md: "30%" }}
      flexShrink={0}
      mr={{ md: 5 }}
      mb={{ base: 2, md: 0 }}
    >
      {children}
    </Text>
  )
}

export default Label;