import { useState, useCallback, useRef } from 'react';
import Provider from '@/providers';
import { Box, Textarea, Container, HStack, Select, Button, Text, IconButton } from '@chakra-ui/react';
import { Header } from '@/components';
import { CopyIcon, CloseIcon } from '@chakra-ui/icons';

function App() {
  const [value, setValue] = useState<string>('');
  const [withEmojiValue, setWithEmojiValue] = useState<string>('');
  const [emoji, setEmoji] = useState<string>('bug');
  const emojiRef = useRef<string>(emoji);
  emojiRef.current = emoji;
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const options = [
    {
      prefix: 'バグ修正',
      emoji: 'bug'
    },
    {
      prefix: '機能改善',
      emoji: '+1',
    },
    {
      prefix: '部分的な機能改善',
      emoji: 'sparkles'
    },
    {
      prefix: '大きな機能追加',
      emoji: 'tada'
    },
    {
      prefix: 'パフォーマンス改善',
      emoji: 'rocket'
    },
    {
      prefix: 'セキュリティ関連の改善',
      emoji: 'cop'
    },
    {
      prefix: 'Lintエラーの修正やコードスタイルの修正',
      emoji: 'shirt'
    },
    {
      prefix: 'リファクタリング',
      emoji: 'recycle'
    },
    {
      prefix: 'ファイル、コード一部を削除',
      emoji: 'shower'
    },
    {
      prefix: 'ドキュメントの修正',
      emoji: 'notebook'
    },
    {
      prefix: 'テストやCIの修正・改善',
      emoji: 'green_heart'
    },
    {
      prefix: '依存パッケージなどのアップデート',
      emoji: 'up',
    }
  ];

  const onChangeInputValue = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setWithEmojiValue(`:${emojiRef.current}: ${e.target.value}`);
    setIsCopied(false);
  }, []);

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(withEmojiValue).then(() => {
      setIsCopied(true);
    })
  }

  const deleteValue = () => setValue('');

  return (
    <Box minH="100vh">
      <Provider>
        <Header />
        <Container py={5} maxW="container.lg">
          <Box mb={5} pb={5} borderBottom='1px' borderColor='gray.200'>
            <HStack spacing="24px" mb={5}>
              <Text width="20%" flexShrink={0}>Prefix</Text>
              <Select
                width="70%"
                fontSize="14px"
                onChange={e => setEmoji(e.target.value)}
                value={emoji}
              >
                {options.map(option => (
                  <option key={option.emoji} value={option.emoji}>{option.prefix}</option>
                ))}
              </Select>
            </HStack>
            <HStack spacing="24px">
              <Text width="20%" flexShrink={0}>コミットメッセージ</Text>
              <Textarea
                resize="none"
                width="70%"
                fontSize="14px"
                value={value}
                onChange={e => onChangeInputValue(e)}
              />
              <IconButton
                aria-label="delete"
                icon={<CloseIcon />}
                onClick={deleteValue}
              />
            </HStack>
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
