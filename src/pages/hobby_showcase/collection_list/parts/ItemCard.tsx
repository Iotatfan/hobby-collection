import { Card, Image, Stack, Text } from "@chakra-ui/react";

interface IItemCard {
    grade: string;
    cover: string;
    title: string;
    releaseType: string;
    index?: number;
}

const ItemCard: React.FC<IItemCard> = ({
    grade,
    cover,
    title,
    releaseType
}) => {
    return (
        <Card.Root
            w='full'
            maxH='23rem'
            minH='23rem'
            maxW='15rem'
            minW='15rem'
            rounded='4'
            borderStyle='solid'
            shadow='xl'
            role="group"
            _hover={{ borderColor: 'gray.400', cursor: 'pointer' }}
        >
            <Card.Header h='12rem' p={0}>
                <Image
                    boxSize='full'
                    maxBlockSize='12rem'
                    alt="cover image"
                    objectFit='contain'
                    css={{
                        aspectRatio: '1',
                    }}
                    src={cover}
                />
            </Card.Header>
            <Card.Body p={2} gap={1}>
                <Card.Title truncate lineClamp={2} fontSize={16} fontWeight='bold'>{title}</Card.Title>
                <Text truncate fontSize={12} color='gray.500' fontWeight='medium'>{grade}</Text>
                <Stack direction='row' alignItems='flex-end'>
                    <Text fontSize={12} color='gray.500' fontWeight='medium'>{releaseType}</Text>
                </Stack>
            </Card.Body>
        </Card.Root>
    )
}

export default ItemCard