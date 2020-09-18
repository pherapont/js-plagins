const cardData = [
	{id: 1, title: 'Яблоко', price: 40, img: './img/apple.jpg'},
	{id: 2, title: 'Апельсин', price: 50, img: './img/orange.jpg'},
	{id: 3, title: 'Манго', price: 100, img: './img/mango.jpg'},
]

const createCardsAndModals = new Promise((res, rej) => {
	const a = $.card(cardData)
	res(a) 
})

createCardsAndModals.then(
	cardModals(cardData)
)
.then(
	response => cardDestroy(response)
)
// const modal = $.modal({
// 	title: 'Модальное окно №1',
// 	content: `<p class="modal__text">Lorem ipsum dolor sit.</p>
// 		<p class="modal__text">Lorem ipsum dolor sit.</p>
// 		<p class="modal__text">Lorem ipsum dolor sit.</p>`,
// 	closable: true,
// 	width: '400px',
// 	buttons: [
// 		{
// 			text: 'Ok',
// 			type: '',
// 			handler() {
// 				modal.close()
// 			}
// 		},
// 		{
// 			text: 'Cancel',
// 			type: 'red',
// 			handler() {
// 				modal.close()
// 			}
// 		}
// 	]
// })
function cardDestroy(handler) {
	const cards = document.querySelectorAll('[data-card]')
	if (cards) {
		cards.forEach((card) => {
			const destroyButton = card.querySelector('[data-destroy]')
			destroyButton.addEventListener('click', (e) => {
				handler.destroy(card)
			})
		})
	}
	
}

function cardModals(data) {
	const $cardsList = document.querySelectorAll('[data-card]')
	const cardsObj = {}
	if (data.length) {
		data.forEach((card) => {
			cardsObj[card.id] = card
		})
	}
	if ($cardsList.length) {
		$cardsList.forEach((card) => {
			const id = card.getAttribute('data-card')
			const cardObj = cardsObj[id]
			const $priceButton = card.querySelector('[data-price]')
			$priceButton.addEventListener('click', () => {
				const modal = $.modal({
					title: cardObj.title,
					content: `
						<img src="${cardObj.img}">
						<p>Цена: ${cardObj.price} руб.</p>
					`,
					width: '700px',
					closable: true,
					buttons: [
						{
							text: 'Ok',
							type: '',
							handler() {
								modal.close()
							}
						}
					]
				})
				setTimeout(() => modal.open(), 100)
				modal.onClose = () => setTimeout(() => modal.destroy(), 500) 
			})
		})
	}
}






