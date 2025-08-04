import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Icon,
  Flex,
  Heading,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoCheckmark } from "react-icons/io5";

const copilotData = [
  {
    title: "Get credits for AI usage",
    subtitle:
      "Receive fresh AI credits at the start of each month to use Copilot in Microsoft 365 apps and AI features in Designer",
    pro: "Extensive usage",
    free: "Limited usage (includes Designer only)",
  },
  {
    title: "Get real-time results",
    subtitle:
      "Copilot uses advanced AI grounding to provide up-to-date information",
    pro: true,
    free: true,
  },
  {
    title: "Preferred access to AI models during peak times",
    subtitle: "",
    pro: "Preferred Access",
    free: "Non-peak times",
  },
  {
    title: "Get early access to experimental AI features",
    subtitle: "Be the first to experience new AI features",
    pro: true,
    free: false,
  },
  {
    title: "Multiple devices and platforms",
    subtitle:
      "Use Copilot on the web, in the mobile app, and in Windows and Microsoft Edge",
    pro: true,
    free: true,
  },
  {
    title: "Unlock Copilot in select Microsoft 365 apps",
    subtitle:
      "Use Copilot in Word, Excel, PowerPoint, OneNote, and Outlook",
    pro: true,
    free: false,
  },
  {
    title: "Deep research",
    subtitle:
      "Ask detailed questions and receive comprehensive reports in minutes",
    pro: true,
    free: false,
  },
  {
    title: "Actions",
    subtitle:
      "Let Copilot handle online tasks for you, like filling out forms or supporting your online shopping",
    pro: true,
    free: false,
  },
];

const PricingSection = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const columnWidth = "270px";

  return (
    <Box px={{ base: 4, md: 12 }} py={{ base: 6, md: 10 }} mt="55px">
      <Text fontSize="2xl" fontWeight="semibold" mb={6}>
        Choose the Copilot that suits you best
      </Text>

      {isMobile ? (
      <Stack spacing={0} borderTop="1px solid #e2e8f0">
        {/* 🔵 Fixed 2-column header */}
        <Flex borderBottom="1px solid #c1c3cb">
          {/* Copilot Pro */}
          <Box flex="1" bg="#d9e9f5" p={4} textAlign="center">
            <Heading fontSize="md" fontWeight="600" mb={1}>
              Microsoft Copilot Pro
            </Heading>
            <Text fontSize="sm" fontWeight="medium">Subscription</Text>
            <Text fontSize="sm" fontWeight="bold" mt={1}>
              $20.00 user/month
            </Text>
            <Button
              mt={2}
              fontSize="sm"
              bg="#0067b8"
              color="white"
              fontWeight="bold"
              _hover={{ bg: "#255EB7" }}
              borderRadius="2px"
              height="30px"
            >
              Buy now
            </Button>
          </Box>

          {/* Copilot Free */}
          <Box
            flex="1"
            bg="white"
            borderLeft="1px solid #e2e8f0"
            p={4}
            textAlign="center"
          >
            <Heading fontSize="md" fontWeight="600" mb={1}>
              Microsoft Copilot
            </Heading>
            <Text fontSize="sm" fontWeight="medium">Free version</Text>
          </Box>
        </Flex>

        {/* 🧩 Feature Rows */}
        {copilotData.map((item, idx) => (
          <Box
            key={idx}
            borderBottom="1px solid #b4b5b9ff"
            bg="white"
          >
            {/* Feature title and subtitle */}
            <Box px={4} py={4} bg="#f2f2f2" borderBottom="1px solid #e2e8f0">
              <Text fontWeight="semibold" fontSize="md">{item.title}</Text>
              {item.subtitle && (
                <Text fontSize="sm" color="black" mt={1}>
                  {item.subtitle}
                </Text>
              )}
            </Box>

            <Flex>
              {/* Copilot Pro */}
              <Box
                flex="1"
                bg="#d9e9f5"
                px={4}
                py={5}
                textAlign="left"
              >
                {item.pro === true ? (
                  <Icon as={IoCheckmark} color="black" boxSize="24px" />
                ) : typeof item.pro === "string" ? (
                  <Text fontSize="sm" fontWeight="medium">{item.pro}</Text>
                ) : null}
              </Box>

              {/* Copilot Free */}
              <Box
                flex="1"
                bg="white"
                px={4}
                py={5}
                textAlign="left"
                borderLeft="1px solid #e2e8f0"
              >
                {item.free === true ? (
                  <Icon as={IoCheckmark} color="black" boxSize="24px" />
                ) : typeof item.free === "string" ? (
                  <Text fontSize="sm" fontWeight="medium">{item.free}</Text>
                ) : null}
              </Box>
            </Flex>
          </Box>
        ))}

        {/* ✅ Final Row: Use Free Version */}
        <Box borderTop="1px solid #e2e8f0" borderBottom="1px solid #6e7073">
          {/* Gray subtitle block for consistency */}
          <Box px={8} py={8} bg="#f2f2f2" borderBottom="1px solid #6e7073" />

          <Flex>
            {/* Left: Blue background cell (empty) */}
            <Box flex="1" bg="#d9e9f5" py={5}></Box>

            {/* Right: Link button */}
            <Box
              flex="1"
              bg="white"
              py={5}
              px={4}
              textAlign="left"
              borderLeft="1px solid #e2e8f0"
            >
              <Button variant="link" color="#0067b8" fontWeight="medium">
                Use free version →
              </Button>
            </Box>
          </Flex>
        </Box>
      </Stack>
    ) : (

        // Desktop view: original table
        <Box overflowX="auto">
          <Table variant="unstyled" minWidth="750px" borderTop="1px solid #e2e8f0">
            <Thead position="sticky" top="0" bg="white" zIndex={10}>
              <Tr>
                <Th
                  w={columnWidth}
                  borderBottom="1px solid #6e7073ff"
                  bg="white"
                  textAlign="left"
                  py={8}
                  px={8}
                ></Th>

                <Th
                  w={columnWidth}
                  bg="#d9e9f5"
                  borderBottom="1px solid #6e7073ff"
                  textAlign="center"
                  py={6}
                  px={8}
                >
                  <Flex direction="column" align="center" paddingBlock={10}>
                    <Heading mb={1} fontSize="1.125rem" fontWeight="600">
                      Microsoft Copilot Pro
                    </Heading>
                    <Text fontSize="sm" fontWeight="medium" mt={2}>
                      Subscription
                    </Text>
                    <Text fontSize="md" fontWeight="bold" mb={3} mt={2}>
                      $20.00 user/month
                    </Text>
                    <Button
                      mt={4}
                      fontSize="md"
                      bg="#0067b8"
                      color="white"
                      fontWeight="bold"
                      _hover={{ bg: "#255EB7" }}
                      width="93px"
                      height="30px"
                      borderRadius="2px"
                    >
                      Buy now
                    </Button>
                  </Flex>
                </Th>

                <Th
                  w={columnWidth}
                  borderBottom="1px solid #6e7073ff"
                  textAlign="center"
                  bg="white"
                  py={6}
                >
                  <Flex direction="column" align="center">
                    <Heading mb={1} fontSize="1.125rem" fontWeight="600">
                      Microsoft Copilot
                    </Heading>
                    <Text fontSize="sm" fontWeight="medium" mt={2}>
                      Free version
                    </Text>
                  </Flex>
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              {copilotData.map((item, idx) => (
                <Tr
                  key={idx}
                  borderTop="1px solid #e2e8f0"
                  borderBottom="1px solid #c1c3cbff"
                >
                  <Td w={columnWidth} px={6} py={8}>
                    <Text fontWeight="semibold">{item.title}</Text>
                    {item.subtitle && (
                      <Text fontSize="s" color="black" mt={1}>
                        {item.subtitle}
                      </Text>
                    )}
                  </Td>

                  <Td bg="#d9e9f5" textAlign="left" py={6} px={14}>
                    {item.pro === true ? (
                      <Icon as={IoCheckmark} color="black" boxSize="30px" />
                    ) : typeof item.pro === "string" ? (
                      <Text>{item.pro}</Text>
                    ) : (
                      ""
                    )}
                  </Td>

                  <Td textAlign="left" py={6} px={14}>
                    {item.free === true ? (
                      <Icon as={IoCheckmark} color="black" boxSize="30px" />
                    ) : typeof item.free === "string" ? (
                      <Text>{item.free}</Text>
                    ) : (
                      ""
                    )}
                  </Td>
                </Tr>
              ))}

              <Tr borderTop="1px solid #e2e8f0" borderBottom="1px solid #6e7073ff">
                <Td w={columnWidth} py={6}></Td>
                <Td bg="#d9e9f5" w={columnWidth} py={6}></Td>
                <Td textAlign="center" w={columnWidth} py={6}>
                  <Button variant="link" color="#0067b8">
                    Use free version →
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default PricingSection;
