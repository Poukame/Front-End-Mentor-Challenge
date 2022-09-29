import { Box, Image } from '@chakra-ui/react';
import bgPentagon from '../assets/images/bg-pentagon.svg';
import IconCircle from './IconCircle';
import icons from '../assets/iconsStyle';

function SelectIcon() {
	
	const iconsHTML = icons.map((icon) => {
		return (
			<IconCircle
				name={icon.name}
				size={icon.sizeSelect}
				outline={icon.outlineColor}
				Yaxis={icon.top}
				Xaxis={icon.left}
				imgPath={icon.imgPath}
			/>
		);
	});

	return (
		<Box flex='0 1 auto' position='relative'>
			<Image src={bgPentagon} width='85%' mx='auto' />
			{iconsHTML}
		</Box>
	);
}

export default SelectIcon;
