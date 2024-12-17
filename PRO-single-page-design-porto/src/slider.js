const imagesUrl = [
	{
		id: 1,
		url: './src/assets/image-slide-1.jpg',
		alt: ''
	},
	{
		id: 2,
		url: './src/assets/image-slide-2.jpg',
		alt: ''
	},
	{
		id: 3,
		url: './src/assets/image-slide-3.jpg',
		alt: ''
	},
	{
		id: 4,
		url: './src/assets/image-slide-4.jpg',
		alt: ''
	},
	{
		id: 5,
		url: './src/assets/image-slide-5.jpg',
		alt: ''
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

function createImgElement(url, className) {
	const div = document.createElement('div');
	div.className = className;
	div.style.backgroundImage = `url(${url})`;
	return div;
}

function renderSlider() {
	sliderEl.innerHTML = '';

	const prevImage = createImgElement(imagesUrl[getIndex('next')].url, 'bg-cover w-1/12 lg:w-3/12 h-44 md:h-96 rounded-r-xl');
	const currentImage = createImgElement(imagesUrl[sliderIndex].url, 'bg-cover w-10/12 lg:w-6/12 h-44 md:h-96 rounded-xl');
	const nextImage = createImgElement(imagesUrl[getIndex('prev')].url, 'bg-cover w-1/12 lg:w-3/12 h-44 md:h-96 rounded-l-xl');

	sliderEl.appendChild(prevImage);
	sliderEl.appendChild(currentImage);
	sliderEl.appendChild(nextImage);
}

renderSlider();


