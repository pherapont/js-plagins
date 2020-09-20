const confirm = (options) => {
	return new Promise ((resolve, reject) => {
		const confirmModal = $.modal({
			title: 'Вы уверены?',
			closable: false,
			width: '400px',
			animation: 'from-top',
			buttons: [
				{
					text: 'Отменить',
					type: 'green',
					handler() {
						confirmModal.close()
						reject(console.log('Отмена удаления'))
					}
				},
				{
					text: 'Удалить',
					type: 'red',
					handler() {
						confirmModal.close()
						resolve(console.log('Удаление окна'))
					}
				}
			]
		})
		confirmModal.open()
	})
}
