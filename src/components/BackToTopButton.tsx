import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      leftIcon={<ChevronUpIcon />}
      onClick={scrollToTop}
      position="fixed"
      bottom="40px"
      right="40px"
      size="md"
      bg="#c0bcbcc4"
      color="black"
      borderRadius="none"
      zIndex="999"
      shadow="lg"
      _hover={{ bg: "white" }}
      aria-label="Back to Top"
    >
      Back to Top
    </Button>
  );
};

export default BackToTopButton;



