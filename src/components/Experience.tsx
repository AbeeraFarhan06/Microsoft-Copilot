import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ExperienceAI from '../assets/ExperienceAI.avif';

const Experience = () => (
  <>  
  <Flex
    direction={{ base: "column", md: "row" }}
    align="center"
    gap={{ base: 10, md: 20 }}
    px={{ base: 4, md: 16 }}
    py={{ base: 8, md: 16 }}
    pl={{ base: 0, md: 24 }}
  >

    <Flex flex="1">
      <Box boxSize={350}>
        <Heading mt="55px" fontSize={29} fontWeight="semibold">
          Experience AI in Word, Excel, PowerPoint, and Outlook like never before
        </Heading>
        <Text fontSize="md" mt={4} width="370px">
          Effortlessly create drafts, swiftly summarize long emails, and easily design beautiful 
          slides on any topic. Copilot Pro saves you valuable time every day
          with cutting edge AI in the web versions of your favorite Microsoft 365 apps.
          <sup>1</sup>
        </Text>
      </Box>
    </Flex>

    <Flex>
      <Image src={ExperienceAI} width="700px" height="370px"/>
    </Flex>

  </Flex>
  </>
);

export default Experience;