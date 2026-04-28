// Animación de entrada para elementos con data-animate
document.addEventListener('DOMContentLoaded', () => {
	const animatedElements = document.querySelectorAll('[data-animate]');
	const animateOnScroll = () => {
		animatedElements.forEach(el => {
			const rect = el.getBoundingClientRect();
			if (rect.top < window.innerHeight - 60) {
				el.classList.add('animated');
			}
		});
	};
	animateOnScroll();
	window.addEventListener('scroll', animateOnScroll);

	// Menú móvil (hamburger)
	const hamburger = document.querySelector('.hamburger');
	const navMenu = document.querySelector('.nav-menu');
	if (hamburger && navMenu) {
		hamburger.addEventListener('click', () => {
			navMenu.classList.toggle('active');
		});
		document.querySelectorAll('.nav-link').forEach(link => {
			link.addEventListener('click', () => navMenu.classList.remove('active'));
		});
	}

	// Navbar efecto scroll
	const navbar = document.getElementById('navbar');
	window.addEventListener('scroll', () => {
		if (window.scrollY > 60) {
			navbar.classList.add('scrolled');
		} else {
			navbar.classList.remove('scrolled');
		}
	});

	// Pantalla de apertura y botón "Entrar al Sitio"
	const openingScreen = document.getElementById('opening-screen');
	const enterBtn = document.getElementById('enter-site');
	if (openingScreen && enterBtn) {
		enterBtn.addEventListener('click', () => {
			openingScreen.style.display = 'none';
			document.body.style.overflow = 'auto';
		});
		// Bloquear scroll mientras está la pantalla de apertura
		document.body.style.overflow = 'hidden';
	}

	// Botón para reproducir audio de Petro
	const playVoiceBtn = document.getElementById('play-voice');
	const petroAudio = document.getElementById('petro-audio');
	if (playVoiceBtn && petroAudio) {
		playVoiceBtn.addEventListener('click', () => {
			petroAudio.play();
		});
	}

	// Contador animado
	const counters = document.querySelectorAll('.counter-item');
	counters.forEach(counter => {
		const numberEl = counter.querySelector('.counter-number');
		const target = +counter.getAttribute('data-target');
		let started = false;
		const animateCounter = () => {
			const rect = counter.getBoundingClientRect();
			if (!started && rect.top < window.innerHeight - 40) {
				started = true;
				let current = 0;
				const increment = Math.ceil(target / 60);
				const update = () => {
					current += increment;
					if (current > target) current = target;
					numberEl.textContent = current;
					if (current < target) {
						requestAnimationFrame(update);
					}
				};
				update();
			}
		};
		window.addEventListener('scroll', animateCounter);
		animateCounter();
	});

	// Partículas decorativas en el hero
	const particlesContainer = document.getElementById('particles');
	if (particlesContainer) {
		for (let i = 0; i < 18; i++) {
			const particle = document.createElement('div');
			particle.className = 'particle';
			particle.style.left = Math.random() * 100 + '%';
			particle.style.top = Math.random() * 100 + '%';
			particle.style.animationDuration = (4 + Math.random() * 4) + 's';
			particlesContainer.appendChild(particle);
		}
	}

	// Formulario de contacto (validación simple)
	const contactForm = document.getElementById('contactForm');
	if (contactForm) {
		contactForm.addEventListener('submit', e => {
			e.preventDefault();
			alert('¡Gracias por tu mensaje!');
			contactForm.reset();
		});
	}
});
