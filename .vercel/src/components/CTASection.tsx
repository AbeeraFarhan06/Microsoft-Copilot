import { Box, Heading, Link, Text, Flex } from '@chakra-ui/react';
import { IoIosArrowForward } from "react-icons/io";

const CTASection = () => (
  <Box py={16} mt={4} bg="#f2f2f2" textAlign="center" maxW="1090px" w="100%" mx="auto" >
    <Heading
      mb={4}
      fontSize={{ base: "2xl", md: "3xl" }}
      fontWeight="semibold"
      lineHeight="1.4"
    >
      Get Copilot for Microsoft 365 for<br /> your business
    </Heading>

    <Text fontSize="md" color="gray.700" mb={8}>
      Energize your business with an AI assistant to ease digital<br />
      overload and take on any task.
    </Text>

    <Flex justify="center">
      <Link
        href="#"
        color="blue.600"
        fontWeight="semibold"
        fontSize="md"
        display="inline-flex"
        alignItems="center"
        gap={2}
      >
        Get Copilot for Microsoft 365
        <IoIosArrowForward />
      </Link>
    </Flex>
  </Box>
);

export default CTASection;
