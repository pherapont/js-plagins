function _createModal(options) {
	const modal = document.createElement('div')
	const MODAL_WIDTH = '600px'
	modal.classList.add('modal')
	modal.insertAdjacentHTML('afterbegin', `
		<div class="modal__overlay">
			<div class="modal__window" style="width: ${options.width || MODAL_WIDTH}">
				<div class="modal__header">
					<span class="modal__title">${options.title || 'Modal window'}</span>
					${options.closable ? '<span class="modal__close">&#10008;</span>' : ''}
				</div>
				<div class="modal__content">${options.content}</div>
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
	let closing = false
	const ANIMATION_SPEED = 300
	return {
		open() {
			!closing && $modal.classList.add('open')
		},
		close() {
			$modal.classList.remove('open')
			$modal.classList.add('hide')
			setTimeout(() => {
				closing = true
				$modal.classList.remove('hide')
			}, ANIMATION_SPEED)
			
		},
		destroy() {
			if ($modal) {
				modal.close()
				document.body.removeChild($modal)
			}
		}
	}
}