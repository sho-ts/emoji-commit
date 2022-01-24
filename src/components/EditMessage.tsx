import { Box, Textarea, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

type Props = {
  value: string,
  onChange: (e: any) => void,
  onDelete: () => void,
}

const EditMessage: React.VFC<Props> = ({ value, onChange, onDelete }) => {
  return (
    <Box
      position="relative"
      width={{ base: "100%", md: "70%" }}
      height="100px"
    >
      <Textarea
        position="absolute"
        top={0}
        left={0}
        pr="40px"
        width="100%"
        height="100%"
        resize="none"
        fontSize="14px"
        value={value}
        onChange={e => onChange(e)}
      />
      <IconButton
        size="sm"
        position="absolute"
        top="4px"
        right="4px"
        zIndex={100}
        aria-label="delete"
        icon={<CloseIcon />}
        onClick={onDelete}
      />
    </Box>
  )
}

export default EditMessage;