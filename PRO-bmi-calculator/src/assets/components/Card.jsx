import clsx from 'clsx';
import { Heading } from './Headings';

export default function Card({ className, img, alt, imgWidth, children, ...props }) {
	console.log(children)
  console.log(img)

  let head = children.filter(el => el.type.includes('Heading'))
  console.log('head:', head);
  
  return (
		<div>
      <div>
        
      </div>
			<img src={img} alt={alt} style={{ imgWidth }} />
			{children}
		</div>
	);
}
