import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react"
import ItemCard from "./parts/ItemCard"
import useCollections from "@/hooks/collections/useCollections"
import { useEffect } from "react"

const CollectionList = () => {
    const { getCollections, collections } = useCollections()
    const isLoadingCollections = false

    const handleFetchCollections = async () => {
        await getCollections()
    }

    useEffect(() => {
        handleFetchCollections()
    }, [])


    return (
        <Flex w='full' mt='5' minH='90vh' alignItems='flex-start' gap='4' mx='auto' maxW='78rem' px='2'>
            <Box flexGrow='1' maxW='100%'>
                <Text>Filter Section</Text>
                {
                    isLoadingCollections ? (
                        // Show Skeleton
                        <Grid></Grid>
                    )
                        :
                        (
                            // Loading Complete
                            <Grid
                                templateColumns={
                                    [
                                        'repeat(2, 1fr)',
                                        'repeat(3, 1fr)',
                                        'repeat(4, 1fr)',
                                        'repeat(4, 1fr)',
                                        'repeat(5, 1fr)',
                                    ]
                                } gap='2'>
                                {collections?.map((collection) => (
                                    <Center>
                                        <ItemCard
                                            key={collection.id}
                                            title={collection.title}
                                            grade={collection.type.grade.name}
                                            cover={collection.cover}
                                            releaseType={collection.release_type.name}
                                        ></ItemCard>
                                    </Center>
                                ))}
                            </Grid>
                        )
                }
            </Box>
        </Flex>
    )
}

export default CollectionList