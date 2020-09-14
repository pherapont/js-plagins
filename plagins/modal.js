function _createModal(options) {
	const modal = document.createElement('div')
	modal.classList.add('modal')
	modal.insertAdjacentHTML('afterbegin', `
		<div class="modal__overlay">
			<div class="modal__window" style="width: ${options.width}">
				<div class="modal__header">
					<span class="modal__title">${options.title}</span>
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
	let isOpen = false
	const ANIMATION_SPEED = 300
	const $closeBtn = $modal.querySelector('.modal__close')
	const $overlay = $modal.querySelector('.modal__overlay')
	return {
		open() {
			!isOpen && $modal.classList.add('open')
			isOpen = true
			$closeBtn.addEventListener('click', modal.close)
			window.addEventListener('click', function(e) {
				if (e.target === $overlay)  {return modal.close()}
			})
		},
		close() {
			if (isOpen) {
				$modal.classList.add('close')
				$closeBtn.removeEventListener('click', modal.close)
				window.removeEventListener('click', function(e) {
					if (e.target === $overlay)  {return modal.close()}
				})
			}
			setTimeout(() => {
				$modal.classList.remove('open')
				$modal.classList.remove('close')
				isOpen = false
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