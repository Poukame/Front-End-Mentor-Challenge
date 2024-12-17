const imagesUrl = [
	{
		id: 1,
		url: './image-slide-1.jpg',
		alt: 'design of a X looking like a snowflake'
	},
	{
		id: 2,
		url: './image-slide-2.jpg',
		alt: 'random design with geometrical shapes and blue shades'
	},
	{
		id: 3,
		url: './image-slide-3.jpg',
		alt: 'a hand holding a newspaper with the title GOOD NEWSPAPER'
	},
	{
		id: 4,
		url: './image-slide-4.jpg',
		alt: 'a book with a black cover with the title graphic design solutions'
	},
	{
		id: 5,
		url: './image-slide-5.jpg',
		alt: 'view of a smartphone screen with the text I design and develop experiiences that make peoples lives simple'
	}
];

const sliderEl = document.getElementById('slider');
let sliderIndex = 0;

const prevBtn = document.getElementById('btn-prev');
prevBtn.addEventListener('click', () => {
	changeSliderIndex('minus');
	renderSlider();
});

const nextBtn = document.getElementById('btn-next');
nextBtn.addEventListener('click', () => {
	changeSliderIndex('plus');
	renderSlider();
});

function changeSliderIndex(param) {
	const maxIndex = imagesUrl.length;
	const step = param === 'plus' ? 1 : -1;
	sliderIndex = (sliderIndex + step + maxIndex) % maxIndex;
	return sliderIndex;
}

function getIndex(param) {
	const maxIndex = imagesUrl.length;
	const step = param === 'prev' ? 1 : -1;
	let index = (sliderIndex + step + maxIndex) % maxIndex;
	return index;
}

function createImgElement(url, alt, className) {
	const div = document.createElement('div');
	div.className = className;
	div.style.backgroundImage = `url(${url})`;
	div.setAttribute('alt', alt);
	return div;
}

function renderSlider() {
	sliderEl.innerHTML = '';
	
	const prevImage = createImgElement(imagesUrl[getIndex('next')].url, imagesUrl[getIndex('next')].alt, 'bg-cover w-1/12 lg:w-3/12 h-44 md:h-96 rounded-r-xl');
	const currentImage = createImgElement(imagesUrl[sliderIndex].url, imagesUrl[sliderIndex].alt,'bg-cover w-10/12 lg:w-6/12 h-44 md:h-96 rounded-xl');
	const nextImage = createImgElement(imagesUrl[getIndex('prev')].url,imagesUrl[getIndex('prev')].alt, 'bg-cover w-1/12 lg:w-3/12 h-44 md:h-96 rounded-l-xl');

	sliderEl.appendChild(prevImage);
	sliderEl.appendChild(currentImage);
	sliderEl.appendChild(nextImage);
}

renderSlider();


