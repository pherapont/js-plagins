function _createModalButton(options) {
	const button = document.createElement('button')
	button.classList.add('modal__btn')
	if (options.type) button.classList.add(options.type)
	button.innerHTML = options.text
	button.addEventListener('click', options.handler)
	return button
}

function __createModalFooter(options) {
	if (!options) { return '' }
	const modalFooter = document.createElement('div')
	modalFooter.classList.add('modal__footer')
	options.forEach((btn) => {
		modalFooter.append(_createModalButton(btn))
	})
	return modalFooter
}

function _createModal(options) {
	const modal = document.createElement('div')
	const MODAL_WIDTH = '600px'
	modal.classList.add('modal')
	modal.insertAdjacentHTML('afterbegin', `
		<div class="modal__overlay" data-close="true">
			<div class="modal__window" style="width: ${options.width || MODAL_WIDTH}">
				<div class="modal__header">
					<span class="modal__title">${options.title || 'Modal window'}</span>
					${options.closable ? '<span class="modal__close" data-close="true">&#10008;</span>' : ''}
				</div>
				<div class="modal__content" data-content>${options.content}</div>
			</div>
		</div>
	`)
	const dataContent = modal.querySelector('[data-content]')
	dataContent.parentNode.append(__createModalFooter(options.buttons))
	document.body.appendChild(modal)
	return modal
}

$.modal = function(options) {
	const $modal = _createModal(options)
	let closing = false
	let destroyed = false
	const ANIMATION_SPEED = 300
	const modal = {
		open() {
			if (destroyed) {
				return console.log('Modal is destroyed')
			}
			!closing && $modal.classList.add('open')
		},
		close() {
			$modal.classList.remove('open')
			$modal.classList.add('hide')
			closing = true
			setTimeout(() => {
				closing = false
				$modal.classList.remove('hide')
			}, ANIMATION_SPEED)
		}
	}

	const listener = event => {
		if (event.target.getAttribute('data-close')) modal.close()
	}

	$modal.addEventListener('click', listener)
	
	return Object.assign(modal, {
		destroy() {
			$modal.parentNode.removeChild($modal)
			$modal.removeEventListener('click', listener)
			destroyed = true
		},
		setContent (html) {
			$modal.querySelector('[data-content]').innerHTML = html
		}
	})
}