const themeToggle = document.querySelector('.theme-toggle');
const currentYear = document.querySelector('#current-year');
const navLinks = document.querySelectorAll('.nav-link');

themeToggle.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
	const isDarkMode = document.body.classList.contains('dark-mode');
	themeToggle.textContent = isDarkMode ? '浅色模式' : '深色模式';
	themeToggle.setAttribute('aria-label', isDarkMode ? '切换浅色模式' : '切换深色模式');
});

currentYear.textContent = new Date().getFullYear();

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		navLinks.forEach((item) => item.classList.remove('active'));
		link.classList.add('active');
	});
});
