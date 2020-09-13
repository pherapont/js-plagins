function _createModal() {
	const modal = document.createElement('div')
	modal.classList.add('modal')
	modal.insertAdjacentHTML('afterbegin', `
		<div class="modal__overlay">
			<div class="modal__window">
				<div class="modal__header">
					<span class="modal__title">Модальное окно</span>
					<span class="modal__close">&#10008;</span>
				</div>
				<div class="modal__content">
					<p class="modal__text">Lorem ipsum dolor sit.</p>
					<p class="modal__text">Lorem ipsum dolor sit.</p>
				</div>
				<div class="modal__footer">
					<button class="modal__btn">Ok</button>
					<button class="modal__btn">Cancel</button>
				</div>
			</div>
		</div>
	`)
	document.body.appendChild(modal)
	return modal
}

$.modal = function(options) {
	const $modal = _createModal(options)
	return {
		open() {
			$modal.classList.add('open')
		},
		close() {
			$modal.classList.remove('open')
		},
		destroy() {}
	}
}