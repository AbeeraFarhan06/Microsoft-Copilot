import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { IoKeyOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";

const FeaturesSection = () => (
  <Flex
    direction={{ base: "column", md: "row" }}
    justify="space-between"
    align="center"
    gap={8}
    px={{ base: 3, md: 14 }}
    py={6}
  >
    {/* Feature 1 */}
    <Flex flex="1" align="flex-start" gap={10}>
      <Box mt={4}>
        <IoKeyOutline size="45px" />
      </Box>
      <Box>
        <Heading fontSize={25} fontWeight="semibold">
          Get preferred access
        </Heading>
        <Text fontSize="md" mt={4} maxW="410px">
          Maintain preferred access to the most advanced models during peak times.
        </Text>
      </Box>
    </Flex>

    {/* Feature 2 */}
    <Flex flex="1" align="flex-start" gap={10}>
      <Box mt={2}>
        <MdOutlineManageAccounts size="50px" />
      </Box>
      <Box>
        <Heading fontSize={25} fontWeight="semibold">
          Unlock Copilot in your favorite app
        </Heading>
        <Text fontSize="md" mt={4} maxW="410px">
          Experience Word, Excel, PowerPoint, and Outlook in a whole new way with built-in Copilot features.
          <sup>1</sup>
        </Text>
      </Box>
    </Flex>
  </Flex>
);

export default FeaturesSection;



