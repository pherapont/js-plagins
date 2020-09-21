let cardData = [
	{id: 1, title: 'яблоки', price: 40, img: './img/apple.jpg'},
	{id: 2, title: 'апельсины', price: 50, img: './img/orange.jpg'},
	{id: 3, title: 'манго', price: 100, img: './img/mango.jpg'},
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
					<button class="btn btn--blue" data-btn="price" data-id="${card.id}">Цена</button>
					<button class="btn btn--red" data-btn="remove" data-id="${card.id}">Удалить</button>
				</div>
			</div>
		</div>
	`
}

const priceModal = $.modal({
	title: 'Товары',
	closable: true,
	width: '400px',
	animation: 'from-top',
	buttons: [
		{
			text: 'Ok',
			type: '',
			handler() {
				priceModal.close()
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
	let id = +event.target.dataset.id
	const card = cardData.find((item) => item.id === id)
	if (button === 'price') {
		priceModal.setContent(`<p>Цена на ${card.title} равна ${card.price}$</p>`)
		priceModal.open()
	} 
	else if (button === 'remove') {
		confirm({
			title: 'Вы уверены?',
			content: `<p>Вы удаляете фрукт <strong>${card.title}</strong></p>`,
			onClose() {
				confirmModal.destroy()
			}
		})
		.then (() => {
			console.log('Remove')
			cardData.filter((item) =>{ 
				return item.id !== id
			})
			console.log(cardData)
			render()
		}) 
		.catch(() => { console.log('Cancel')})
	}
})

render()





