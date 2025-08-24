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
            maxW='15rem'
            rounded='0'
        >
            <Card.Header h='12rem' p={0} bg='gray.50'>
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
                <Card.Title truncate>{title}</Card.Title>
                <Text truncate>{grade}</Text>
                <Stack direction='row' alignItems='flex-end'>
                    <Text>{releaseType}</Text>
                </Stack>
            </Card.Body>
        </Card.Root>
    )
}

export default ItemCard