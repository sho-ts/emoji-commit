import { useState, useCallback, useEffect } from 'react';
import Provider from '@/providers';
import { Box, Container, Flex, Select, Button, Text } from '@chakra-ui/react';
import { Header, Label, EditMessage } from '@/components';
import { CopyIcon } from '@chakra-ui/icons';
import emojis from '@/assets/emojis.json';

function App() {
  const [value, setValue] = useState<string>('');
  const [withEmojiValue, setWithEmojiValue] = useState<string>('');
  const [emoji, setEmoji] = useState<string>('bug');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const hanldeInput = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setIsCopied(false);
  }, []);

  const handleDelete = () => setValue('');

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(withEmojiValue).then(() => {
      setIsCopied(true);
    })
  }

  useEffect(() => {
    setWithEmojiValue(`:${emoji}: ${value}`);
  }, [value, emoji])

  return (
    <Box minH="100vh">
      <Provider>
        <Header />
        <Container py={5} maxW="container.lg">
          <Box mb={5} pb={5} borderBottom='1px' borderColor='gray.200'>
            <Flex mb={5} display={{ base: "display", md: "flex" }}>
              <Label>Prefix</Label>
              <Select
                width={{ base: "100%", md: "70%" }}
                fontSize="14px"
                onChange={e => setEmoji(e.target.value)}
                value={emoji}
              >
                {emojis.map(option => (
                  <option key={option.emoji} value={option.emoji}>{option.prefix}</option>
                ))}
              </Select>
            </Flex>
            <Flex display={{ base: "display", md: "flex" }}>
              <Label>コミットメッセージ</Label>
              <EditMessage
                value={value}
                onChange={e => hanldeInput(e)}
                onDelete={handleDelete}
              />
            </Flex>
          </Box>
          <Box textAlign="center">
            <Button
              colorScheme="blue"
              borderRadius="5em"
              width="200px"
              height="50px"
              onClick={copyTextToClipboard}
            >
              <CopyIcon mr={2} />
            コピー
          </Button>
          </Box>
          {isCopied && (
            <Box mt={5}>
              <Text align="right">コピーしました</Text>
            </Box>
          )}
        </Container>
      </Provider>
    </Box>
  );
}

export default App;
