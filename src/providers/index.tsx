import { ChakraProvider } from "@chakra-ui/react";

const Provider: React.FC = ({ children }) => {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

export default Provider;