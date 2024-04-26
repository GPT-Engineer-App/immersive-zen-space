// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, Button, Center, Flex, Heading, Text, VStack, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { FaPlayCircle, FaQuestionCircle, FaUsers } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" minH="100vh" p={4}>
      <Center minH="100vh">
        <VStack spacing={8}>
          <Image borderRadius="full" boxSize="150px" src="https://placehold.co/600x400" alt="Calm Landscape" />
          <Heading>Welcome to the Experience</Heading>
          <Text fontSize="xl" textAlign="center">
            Step into a world where each moment is crafted for presence and reflection. No scrolling, just being.
          </Text>
          <Button rightIcon={<FaPlayCircle />} colorScheme="teal" size="lg" onClick={onOpen}>
            Start Experience
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Welcome to Today's Experience</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text mb={4}>Prepare to engage in a unique, immersive experience. Please ensure you are in a comfortable setting and ready to be present.</Text>
                <Center>
                  <FaPlayCircle size="3em" color="#319795" />
                </Center>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Flex w="full" justify="space-around">
            <Button leftIcon={<FaQuestionCircle />} colorScheme="purple" variant="outline">
              Learn More
            </Button>
            <Button leftIcon={<FaUsers />} colorScheme="green" variant="outline">
              Join Community
            </Button>
          </Flex>
        </VStack>
      </Center>
    </Box>
  );
};

export default Index;
