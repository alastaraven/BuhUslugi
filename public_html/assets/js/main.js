
// AOS - Animate On Scroll library using CSS3

AOS.init(
	{
		// Global settings:
		disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
		initClassName: 'aos-init', // class applied after initialization
		animatedClassName: 'aos-animate', // class applied on animation
		useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
		disableMutationObserver: true, // disables automatic mutations' detections (advanced)
		debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
		throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	}
);


// Flickity slider (reviews)

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
	// options
	cellAlign: 'center',
	contain: true,
	prevNextButtons: true,
	arrowShape: {
		x0: 35,
		x1: 55, y1: 20,
		x2: 60, y2: 20,
		x3: 40
	},
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
	// option
});

// popup
let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.popup-open'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup-close'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
	button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
		e.preventDefault(); // Предотвращаем дефолтное поведение браузера
		popupBg.classList.add('active'); // Добавляем класс 'active' для фона
		popup.classList.add('active'); // И для самого окна
	})
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
	popupBg.classList.remove('active'); // Убираем активный класс с фона
	popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
	if (e.target === popupBg) { // Если цель клика - фот, то:
		popupBg.classList.remove('active'); // Убираем активный класс с фона
		popup.classList.remove('active'); // И с окна
	}
});

// Cancelling scroll 

function preventScroll(e) {
	e.preventDefault();
	e.stopPropagation();
	return false;
}

function disable() {
	document.querySelector('.popup__bg').addEventListener('wheel', preventScroll);
}

function enable() {
	document.querySelector('.popup').removeEventListener('wheel', preventScroll);
}

document.querySelector('.popup-open').addEventListener('click', disable);
document.querySelector('.popup').addEventListener('click', enable);

document.addEventListener('keydown', preventKeyBoardScroll, false);

// Preventing keyboard scroll 

function preventKeyBoardScroll(e) {
	var keys = [32, 33, 34, 35, 37, 38, 39, 40];
	if (keys.includes(e.keyCode)) {
		e.preventDefault();
		return false;
	}
}

// Preventing touch scroll

var scrollable = document.querySelector('.popup__bg');
scrollable.addEventListener('touchmove', disable, { passive: false });