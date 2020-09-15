const modal = $.modal({
	title: 'Модальное окно №1',
	content: `<p class="modal__text">Lorem ipsum dolor sit.</p>
		<p class="modal__text">Lorem ipsum dolor sit.</p>
		<p class="modal__text">Lorem ipsum dolor sit.</p>`,
	closable: true,
	width: '400px',
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
			type: 'modal__btn--red',
			handler() {
				modal.close()
			}
		}
	]
})
