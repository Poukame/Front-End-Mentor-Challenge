import {
	Text,
	Box,
	Image,
	Button,
	HStack,
	VStack,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	useDisclosure,
} from '@chakra-ui/react';
import rules from '../assets/images/image-rules-bonus.svg';
import close from '../assets/images/icon-close.svg';

function Rules() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box flex='1 1 auto' textAlign={['center', 'right']} transform={['translate(0px)','translate(70px)']}>
			<Button
				onClick={onOpen}
				variant='outline'
				textTransform='uppercase'
				color='#fafbf8'
				px='8'
				mx='auto'
			>
				Rules
			</Button>

			<Modal isOpen={isOpen} onClose={onClose} size={'full'}>
				<ModalOverlay />
				<ModalContent justifyContent='center' p='2'>
					<VStack justifyContent='center' gap='12'>
						<ModalHeader
							color='darkText'
							fontWeight='700'
							fontSize='4xl'
							textTransform='uppercase'
							textAlign='center'
						>
							Rules
						</ModalHeader>
						<ModalBody>
							<Image src={rules} width={['100%', '500px']} />
						</ModalBody>

						<ModalFooter>
							<Button mt='4' bgColor='transparent' onClick={onClose}>
                                <Image width='40px' src={close} />
							</Button>
						</ModalFooter>
					</VStack>
				</ModalContent>
			</Modal>
		</Box>
	);
}

export default Rules;
