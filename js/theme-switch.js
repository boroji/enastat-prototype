const htmlBody = document.querySelector('body')
const toggleBtn = document.querySelector('.sidebar-logo')

toggleBtn.addEventListener('click', () => {
	htmlBody.classList.toggle('dark-mode')
})
