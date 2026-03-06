import { Box, IconButton, Image, VStack, Text, HStack, Badge, Spinner } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";


const MotionImage = motion(Image);
const MotionBox = motion(Box);

interface IImageModal {
    title?: string;
    images?: string[];
    grade?: string;
    description?: string;
    isOpen: boolean;
    isLoading?: boolean;
    onClose: () => void;
}

const ImageModal: React.FC<IImageModal> = ({
    title,
    images,
    grade,
    description,
    isLoading,
    isOpen,
    onClose
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }

    }, [isOpen, onClose])

    const handleCarouselClick = (index: number) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handlePrev = useCallback(() => {
        setDirection(-1)
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? (images?.length ?? 1) - 1 : prevIndex - 1))
    }, [images])

    const handleNext = useCallback(() => {
        setDirection(1)
        setCurrentIndex((nextIndex) => (nextIndex === (images?.length ?? 1) - 1 ? 0 : nextIndex + 1))
    }, [images])

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            zIndex: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            zIndex: 10,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            zIndex: 0,
        }),
    }

    return (
        <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            position="fixed"
            inset={0}
            zIndex={100}
            bg="blackAlpha.900"
            onClick={onClose}
        >
            {isLoading ? (
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    h='full'
                    paddingTop={{ base: 4, lg: 80 }}
                >
                    <Spinner
                        borderWidth="4px"
                        animationDuration="0.65s"
                        color="white"
                        size="xl"
                    />
                </Box>) : (
                <Box
                    display='flex'
                    flexDirection={{ base: 'column', lg: 'row' }}
                    alignItems='center'
                    justifyContent='center'
                    h='full'
                >
                    <Box
                        display="flex"
                        flexDirection={{ base: 'column', lg: 'row' }}
                        maxW="1400px"
                        w="full"
                        h={{ base: 'full', lg: '80vh' }}
                        overflow={{ base: 'auto', lg: 'hidden' }}
                        bg="gray.900"
                        borderRadius={{ base: 0, lg: 'md' }}
                        boxShadow="2xl"
                        position='relative'
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image Section */}
                        <VStack
                            position='relative'
                            flex="1"
                            alignItems='center'
                            justifyContent='center'
                            display='flex'
                            bg='black'
                            paddingBottom={4}
                            zIndex={1}
                        >
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <MotionImage
                                    key={currentIndex}
                                    src={images && images.length > 0 ? images[currentIndex] : ''}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial='enter'
                                    animate='center'
                                    exit='exit'
                                    transition={{
                                        x: { type: 'spring', stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 },
                                    }}
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='center'
                                    w='full'
                                    h={{ base: '40vh', lg: 'full' }}
                                    objectFit='contain'
                                />
                            </AnimatePresence>

                            <IconButton
                                position="absolute"
                                right={4}
                                zIndex={10}
                                aria-label="Next image"
                                onClick={handleNext}
                                variant="ghost"
                                color="white"
                                bg="blackAlpha.500"
                                _hover={{ bg: 'blackAlpha.700' }}
                                borderRadius="full"
                                size="lg"
                            >
                                <ChevronRight size={32} />
                            </IconButton>

                            <IconButton
                                position="absolute"
                                left={4}
                                zIndex={10}
                                aria-label="Previous image"
                                onClick={handlePrev}
                                variant="ghost"
                                color="white"
                                bg="blackAlpha.500"
                                _hover={{ bg: 'blackAlpha.700' }}
                                borderRadius="full"
                                size="lg"
                            >
                                <ChevronLeft size={32} />
                            </IconButton>

                            {/* Carousel Thumbnails */}
                            <HStack gap={2} mt={4} flexWrap="wrap">
                                {images?.map((image, index) => (
                                    <Box
                                        key={index}
                                        as="button"
                                        onClick={() => {
                                            handleCarouselClick(index);
                                            setDirection(index > currentIndex ? 1 : -1);
                                        }}
                                        w={12}
                                        h={12}
                                        borderRadius="md"
                                        overflow="hidden"
                                        border={index === currentIndex ? '1px solid' : '1px solid transparent'}
                                        borderColor={index === currentIndex ? 'red.500' : 'transparent'}
                                        opacity={index == currentIndex ? 1 : 0.5}
                                        _hover={{
                                            opacity: 1
                                        }}
                                        transition='opacity 0.2s, border-color 0.2s'
                                    >
                                        <Image
                                            src={image}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </Box>
                                ))}
                            </HStack>
                        </VStack>

                        <VStack
                            flex="1"
                            p={{ base: 6, lg: 10 }}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            bg="gray.800"
                            align='start' gap={6}
                            zIndex={100}
                            >
                            {/* Label */}
                            <Badge
                                variant='solid'
                                colorPalette={grade === 'High Grade' ? 'red' : 'yellow'}
                                bottom={2} left={2}
                                fontSize='sm'
                                fontWeight='bold'
                                px={1.5}
                                py={1}
                            >
                                {grade}
                            </Badge>

                            {/* Title */}
                            <Text
                                fontSize={{ base: '2xl', lg: '3xl' }}
                                fontWeight="bold"
                                color="white"
                                lineHeight="shorter"
                            >
                                {title}
                            </Text>

                            {/* Description */}
                            <Text
                                fontSize={{ base: 'md', lg: 'lg' }}
                                color="gray.300"
                                lineHeight="relaxed"
                            >
                                {description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                            </Text>
                        </VStack>

                        {/* Close Button */}
                        <IconButton
                            position={{ base:'fixed', lg:'absolute'}}
                            right={{ base: 0, lg: 0 }}
                            top={{ base: 0, lg: 0 }}
                            zIndex={101}
                            color='white'
                            variant='ghost'
                            aria-label='Close modal'
                            size='lg'
                            onClick={onClose}
                            _hover={{ bg: 'whiteAlpha.200' }}
                        >
                            <X size={24} />
                        </IconButton>
                    </Box>
                </Box>
            )
            }

        </MotionBox>
    )
}

export default ImageModal