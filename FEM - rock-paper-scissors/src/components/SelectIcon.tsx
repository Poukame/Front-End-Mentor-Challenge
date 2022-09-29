import { Text, Box, Image, HStack, VStack, Circle } from '@chakra-ui/react';
import bgPentagon from '../assets/images/bg-pentagon.svg';
import lizard from '../assets/images/icon-lizard.svg';
import scissors from '../assets/images/icon-scissors.svg';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import spock from '../assets/images/icon-spock.svg';

function SelectIcon() {
	return (
		<Box flex='2 1 auto'  position='relative'>
			<Image src={bgPentagon} maxWidth='900px' />
			<Circle
				size='100px'
				bg='#fafbf8'
				outline='15px solid'
				outlineColor={'lizard.100'}
				p='2'
				bottom='-25%'
				left='-10%'
				transform='translate(50%, -50%)'
				position='absolute'
			>
				<Image src={lizard} />
			</Circle>

			<Circle
				size='100px'
				bg='#fafbf8'
				outline='15px solid'
				outlineColor={'scissors.100'}
				p='2'
				top='0'
				right='50%'
				transform='translate(50%, -50%)'
				position='absolute'
			>
				<Image src={scissors} />
			</Circle>

			<Circle
				size='100px'
				bg='#fafbf8'
				outline='15px solid'
				outlineColor={'rock.100'}
				p='2'
				bottom='-25%'
				right='20%'
				transform='translate(50%, -50%)'
				position='absolute'
			>
				<Image src={rock} />
			</Circle>

			<Circle
				size='100px'
				bg='#fafbf8'
				outline='15px solid'
				outlineColor={'paper.100'}
				p='2'
				top='35%'
				right='7%'
				transform='translate(50%, -50%)'
				position='absolute'
			>
				<Image src={paper} />
			</Circle>

			<Circle
				size='100px'
				bg='#fafbf8'
				outline='15px solid'
				outlineColor={'spock.100'}
				p='2'
				top='35%'
				left='-25%'
				transform='translate(50%, -50%)'
				position='absolute'
			>
				<Image src={spock} />
			</Circle>
		</Box>
	);
}

export default SelectIcon;
