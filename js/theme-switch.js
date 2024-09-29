const htmlBody = document.querySelector('body')
const toggleBtn = document.querySelector('button')

toggleBtn.addEventListener('click', () => {
	htmlBody.classList.toggle('dark-mode')
})
