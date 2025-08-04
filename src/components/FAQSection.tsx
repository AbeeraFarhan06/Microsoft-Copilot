import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { TbBrandTwitter } from "react-icons/tb";
import { MdEdit } from "react-icons/md";

const faqs = [
  {
    question: "What is Copilot Pro?",
    answer:
    "Copilot Pro is a subscription that offers preferred access to the most advanced AI models during peak times, higher usage limits, early access to experimental features and access to Copilot in Word, Excel, PowerPoint, Outlook, and OneNote.Footnote"
  },
  {
    question: "What is preferred access?",
    answer:
    "During peak usage times, Copilot Pro subscribers will continue to have access to the latest AI models from Microsoft and OpenAI. Free users might experience temporary interruptions."
  },
  {
    question: "What are AI credits?",
    answer:
    "A credit is counted each time you specifically request a Copilot or equivalent AI services action, such as generating text, a table, or an image, within Designer or a Microsoft 365 app.  You will receive a fresh set of credits at the start of each month, and 1 credit will be deducted from your balance each time you interact with Copilot in a Microsoft 365 app (e.g., having Copilot in Word draft a document) or Designer's AI features (e.g., using image creator). If you run out of free credits, you can upgrade to Microsoft 365 Personal or Family to get more or to Copilot Pro to enjoy extensive access to AI features, far beyond the standard credit limits."
  },
  {
    question: "What is early access to new features?",
    answer:
    "Copilot Pro subscribers will get early access to experimental AI features in Copilot Labs while other features will be released to everyone."
  },
  {
    question: "Where is Copilot Pro available?",
    answer:
    "Copilot Pro is available in 222 markets. Some Designer features, like inline editing capabilities are available only in English including United States, United Kingdom, Australia, India, and New Zealand. Excel features are currently in preview and in English only."
    },
  {
    question: "Which language does Copilot Pro support?",
    answer:
    "Copilot Pro supports Arabic, Chinese Simplified, Czech, Danish, Dutch, English, Finnish, French, German, Hebrew, Hungarian, Italian, Japanese, Korean, Norwegian, Polish, Portuguese, Russian, Spanish, Swedish, Thai, and Turkish. Some Designer features, like inline editing capabilities are available only in English. Excel features are currently in preview and in English only. We plan to add more languages soon."
  },
  {
    question: "Where can I access Copilot Pro?",
    answer:
    "As a Copilot Pro subscriber, you can access your benefits via Copilot on the web, through the Copilot app on iOS, Android, and Windows, in select Microsoft 365 apps on the web, and in Edge and Start. Copilot Pro subscribers who have a separate Microsoft 365 Personal or Family subscription get the added benefit of using Copilot in the more fully featured desktop apps on Windows, and MacOS, plus iOS and iPadOS."
  },
  {
    question: "How does Copilot Pro work with Microsoft 365 apps?",
    answer:
    "Copilot Pro subscribers can use Copilot in the free web versions of Word, Excel, PowerPoint, and Outlook (Microsoft email address required).Those who have a separate Microsoft 365 Personal or Family subscription will receive the added benefit of using Copilot in the more fully featured desktop apps.Excel features are currently in preview and in English only.   "
  },
  {
    question: "How many people can use a Copilot Pro Subscription?",
    answer:
    "Copilot Pro is for one person. If you have a Microsoft 365 Family subscription and have shared your subscription with other people, each will need to buy their own Copilot Pro subscription to use Copilot in the Microsoft 365 apps."
  },
  {
    question: "Does Copilot Pro work with a Microsoft 365 Business App?",
    answer:
    "Copilot Pro will not unlock access to Copilot in Microsoft 365 apps if you have a Microsoft 365 Business subscription (i.e. Microsoft 365 Business Basic, Microsoft 365 Business Standard, Microsoft 365 Business Premium, Microsoft 365 Apps for Business)."
  },
  {
    question: "How do I manage my Copilot Pro subscription?",
    answer:
    "You can manage your Copilot Pro subscription within the Microsoft account portal."
  },
  {
    question: "What do I do if I have both Copilot Pro and Family or Personal Microsoft 365?",
    answer:
    "After you purchase Copilot Pro, you will need to refresh your apps in order to see the Copilot icon in Word, Excel (Preview), PowerPoint, OneNote, and Outlook. "
    },
  {
    question: "What is a Microsoft account and why do I need it for Copilot Pro?",
    answer:
    "Your Microsoft account connects all your Microsoft apps and services, including Copilot. If you already use Microsoft services like OneDrive, Outlook.com, Xbox Live, or Microsoft 365, you already have a Microsoft account.You will be prompted to sign in with a Microsoft account to purchase Copilot Pro. You must also be signed-in with this account to use or manage your Copilot Pro subscription."
  },
  {
    question: "Where can I learn more about Copilot and Copilot Pro?",
    answer:
    "Visit our Copilot help & learning site to start using Copilot today."
  },  
];

const FAQSection = () => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const expandAll = () => setExpandedIndexes(faqs.map((_, index) => index));
  const collapseAll = () => setExpandedIndexes([]);

  const allExpanded = expandedIndexes.length === faqs.length;
  const allCollapsed = expandedIndexes.length === 0;

  return (
    <Box
      maxW="6xl"
      mx="auto"
      px={{ base: 4, md: 6 }}
      py={{ base: 12, md: 20 }}
      bg="white"
      mb="58px"
    >
      <Heading
        textAlign="center"
        mb={6}
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="semibold"
      >
        Top questions
      </Heading>

      <Flex justify="flex-start" gap={4} mb={4} px={2}>
        <Button
          variant="link"
          fontWeight="medium"
          color={allExpanded ? "gray" : "blue.600"}
          onClick={expandAll}
        >
          Expand All
        </Button>
        <Box>|</Box>
        <Button
          variant="link"
          fontWeight="medium"
          color={allCollapsed ? "gray" : "blue.600"}
          onClick={collapseAll}
        >
          Collapse All
        </Button>
      </Flex>
      

      <Accordion
        allowMultiple
        index={expandedIndexes}
        onChange={(indexes) => setExpandedIndexes(indexes as number[])}
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            borderTop="1px solid"
            borderColor="gray.200"
            _last={{ borderBottom: "1px solid", borderColor: "gray.200" }}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton py={7} px={2}>
                    <AccordionIcon
                      mr={4}
                      transform={isExpanded ? "rotate(0deg)" : "rotate(-90deg)"}
                      transition="transform 0.2s ease"
                    />
                    <Box
                      flex="1"
                      textAlign="left"
                      fontSize="md"
                      fontWeight="medium"
                      color="black"
                    >
                      {faq.question}
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  px={2}
                  pl="2.25rem"
                  fontSize="sm"
                  color="gray.700"
                >
                  {faq.answer}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      <Text mt="105px" fontSize="1rem">
        [1] Copilot Pro subscribers can use Copilot in the web versions of Word, Excel, PowerPoint, and Outlook in <span>
        <Link color="blue.600" textDecoration="underline">more than 20 languages.</Link></span>
        Those who have a separate Microsoft 365 Personal or Family subscription get the added benefit of using Copilot in the more fully 
        featured desktop apps. Copilot in Excel requires AutoSave to be enabled, meaning the file must be saved to OneDrive; it doesn't 
        function with unsaved files. Copilot features in Outlook apply to accounts with @outlook.com, @hotmail.com, @live.com, or @msn.com
        email addresses and are available in Outlook.com, Outlook built into Windows, and Outlook on Mac.
      </Text>
      
      <Flex align="center" gap={1}>
      <Text mt="40px" pl="1rem">
        Follow Microsoft 365 
      </Text>

      <Link href="https://www.linkedin.com/company/microsoft" isExternal mt="40px" pl="1rem">
        <Icon as={GrLinkedinOption} boxSize={7} />
      </Link>

      <Link href="https://twitter.com/Microsoft365" isExternal mt="40px" pl="1rem">
        <Icon as={TbBrandTwitter} boxSize={7} />
      </Link>

      <Link href="https://techcommunity.microsoft.com/t5/microsoft-365-blog/bg-p/Microsoft365Blog" isExternal mt="40px" pl="1rem">
        <Icon as={MdEdit} boxSize={7} />
      </Link>
    </Flex>

  </Box>
  
  );
};

export default FAQSection;
