const sidebarExpand = document.querySelectorAll('.sidebar-expand')

sidebarExpand.forEach(item => {
	item.addEventListener('click', e => {
		const element = e.currentTarget
		const isActive = element.classList.contains('active')

		element.classList.toggle('active')

		const sidebarHeader = element.querySelector('.sidebar-expand-header')
		const sidebarContent = element.querySelector('.sidebar-expand-content')
		const sidebarChevron = element.querySelector('.chevron-icon')

		if (isActive) {
			sidebarHeader.classList.add('button-ghost-md')
			sidebarHeader.classList.remove('button-primary-md')
			sidebarContent.style.cssText = `display: none;`
			sidebarChevron.style.cssText = `rotate: 180deg;`
		} else {
			sidebarHeader.classList.remove('button-ghost-md')
			sidebarHeader.classList.add('button-primary-md')
			sidebarContent.style.cssText = `display: block;`
			sidebarChevron.style.cssText = `rotate: 0deg;`
		}
	})
})
