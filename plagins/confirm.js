const confirm = (options) => {
	return new Promise ((resolve, reject) => {
		const confirmModal = $.modal({
			title: options.title,
			closable: false,
			width: '400px',
			animation: 'from-top',
			content: options.content,
			buttons: [
				{
					text: 'Отменить',
					type: 'green',
					handler() {
						confirmModal.close()
						reject()
					}
				},
				{
					text: 'Удалить',
					type: 'red',
					handler() {
						confirmModal.close()
						resolve()
					}
				}
			]
		})
		setTimeout( () => confirmModal.open(), 100) 
	})
}
