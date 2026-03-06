import { Box, Container, Flex, Text } from "@chakra-ui/react"

const Header = () => {
    return (
        <Box position='sticky' top={0} zIndex={99} shadow='xl' bg='blue.800' py={5}>
            <Container>
                <Flex alignItems='center' padding={4}>
                    <Text fontWeight='bold' fontSize={24} color='white'>Hobby Showcase</Text>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header