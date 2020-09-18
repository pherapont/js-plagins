function createCard(card) {
	const $card = document.createElement('div')
	$card.classList.add('card')
	$card.setAttribute('data-card', card.id)
	$card.innerHTML = `
		<div class="card__image">
			<img src=${card.img} alt=${card.title}>
		</div>
		<span class="card__title">${card.title}</span>
		<div class="card__footer">
			<button class="btn btn--blue" data-price>Цена</button>
			<button class="btn btn--red" data-destroy>Удалить</button>
		</div>
	`
	return $card
}

function createCardsRow(cards) {
	const $cardsRow = document.createElement('div')
	$cardsRow.classList.add('row')
	if (cards) {
		cards.forEach((card) => {
			const $col = document.createElement('div')
			$col.classList.add('col')
			$col.append(createCard(card))
			$cardsRow.append($col)
		})
	}
	const container = document.querySelector('.container')
	container.append($cardsRow)
}

$.card = function(options) {
	createCardsRow(options)
	return {
		destroy(target) {
			target.parentNode.removeChild(target)
		}
	}
}
let card = $.card()