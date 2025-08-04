import { Box, Heading, Text, Button, Link } from '@chakra-ui/react';

const HeroBanner = () => (

  <Box textAlign="center" py={20} >

    <Heading size="lg" fontWeight="medium">Microsoft Copilot Pro</Heading>

    <Text mt={2} fontSize="md">
      Preferred access to the latest AI models & more usage
    </Text>

    <Heading mt={7} size="xl" fontWeight="medium">$20.00 user/month</Heading>

    <Button mt={5} fontSize="md" bg="#0067b8" color="white" fontWeight="bold" 
      _hover={{ bg: "#255EB7" }}
      width="93px"
      height="15px"
      px={6}
      py={5}
      borderRadius="2px"
    >
      Buy now
    </Button>

    <Text mt={12} fontSize="md">
      Subscription continues to be charged unless cancelled in Microsoft account. See 
      <Link color="blue.400" textDecoration="underline">
         Microsoft Store Terms of Sale.
      </Link>
    </Text>

  </Box>
);

export default HeroBanner;