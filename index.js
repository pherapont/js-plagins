const cardData = [
	{id: 1, title: 'Яблоко', price: 40, img: './img/apple.jpg'},
	{id: 2, title: 'Апельсин', price: 50, img: './img/orange.jpg'},
	{id: 3, title: 'Манго', price: 100, img: './img/mango.jpg'},
]

const toHtml = (card) => {
	return `
		<div class="col">
			<div class="card">
				<div class="card__image">
					<img src="${card.img}" alt="${card.title}">
				</div>
				<span class="card__title">${card.title}</span>
				<div class="card__footer">
					<button class="btn btn--blue" data-btn="price">Цена</button>
					<button class="btn btn--red">Удалить</button>
				</div>
			</div>
		</div>
	`
}

const modal = $.modal({
	title: 'Модальное окно №1',
	content: `<p class="modal__text">Lorem ipsum dolor sit.</p>
		<p class="modal__text">Lorem ipsum dolor sit.</p>
		<p class="modal__text">Lorem ipsum dolor sit.</p>`,
	closable: true,
	width: '400px',
	animation: 'from-top',
	buttons: [
		{
			text: 'Ok',
			type: '',
			handler() {
				modal.close()
			}
		},
		{
			text: 'Cancel',
			type: 'red',
			handler() {
				modal.close()
			}
		}
	]
})

const render = () => {
	const cardsWrapper = document.querySelector('.row')
	cardsWrapper.innerHTML = cardData.map((card) => toHtml(card)).join('')
}

document.addEventListener('click', (event) => {
	let button = event.target.dataset.btn
	if (button === 'price') {
		modal.open()
	}
})

render()






