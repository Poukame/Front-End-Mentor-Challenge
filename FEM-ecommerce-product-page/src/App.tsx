import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import ProductDetails from './components/ProductDetails';
import Counter from './components/Counter';
import { useState } from 'react';
import { productData } from './assets/productData';

function App() {
	const [isMenu, setIsMenu] = useState(true);
	console.log(productData);
  
	return (
		<div className='w-full h-screen'>
			<div className='md:max-w-screen-lg mx-auto'>
				<Header isMenu={isMenu} setToggleMenu={() => setIsMenu(!isMenu)} />
				<ProductDisplay />
				<ProductDetails>
					<Counter />
				</ProductDetails>
			</div>
		</div>
	);
}

export default App;
