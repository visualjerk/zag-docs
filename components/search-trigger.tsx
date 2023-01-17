import Icon from "@chakra-ui/icon"
import { chakra, forwardRef, HTMLChakraProps } from "@chakra-ui/system"
import { HiOutlineSearch } from "react-icons/hi"

export const SearchTrigger = forwardRef(
  (props: HTMLChakraProps<"button">, ref) => {
    return (
      <chakra.button
        {...props}
        ref={ref}
        type="button"
        width="full"
        display="flex"
        alignItems="center"
        gap="2"
        bg="white"
        fontSize="sm"
        py="2"
        pl="2"
        pr="3"
        ring="1px"
        ringColor="gray.200"
        color="gray.500"
        _dark={{
          bg: "gray.800",
          ringColor: "gray.600",
        }}
      >
        <Icon as={HiOutlineSearch} fontSize="md" />
        Quick search...
        <chakra.span ml="auto" flex="none" fontWeight="semibold" fontSize="xs">
          ⌘K
        </chakra.span>
      </chakra.button>
    )
  },
)
