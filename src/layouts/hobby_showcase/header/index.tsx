import { Box, Container, Flex, Text } from "@chakra-ui/react"

const Header = () => {
    return (
        <Box position='sticky' top={0} zIndex={999} shadow='xl' bg='blue.400'>
            <Container>
                <Flex alignItems='center' padding={4}>
                    <Text fontWeight='bold' fontSize={24} color='white'>Hobby Showcase</Text>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header