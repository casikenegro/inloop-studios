
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const languageButtons = document.querySelectorAll('[data-lang]');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.game': 'Nuestro juego',
    'nav.news': 'Novedades',
    'nav.about': 'Quiénes somos',
    'nav.contact': 'Contacto',
    'nav.talk': 'Hablemos',
    'hero.kicker': 'Estudio indie de videojuegos',
    'hero.title': 'Creamos experiencias narrativas con atmósferas que dejan huella',
    'hero.body': 'Diseñamos mundos, personajes e historias pensados para conectar con quienes los juegan, cuidando cada detalle de la experiencia.',
    'hero.gameButton': 'Conoce nuestro juego',
    'hero.aboutButton': 'Sobre nosotros',
    'hero.soon': 'DEMO DISPONIBLE',
    'hero.demo': 'Descubre el inicio de Shadows of Christmas Eve.',
    'game.kicker': 'Nuestro primer juego',
    'game.description': 'Explora una casa que se va transformando a medida que las pesadillas se vuelven cada vez más perturbadoras, mientras presencias parecen observarte desde la oscuridad.',
    'game.tag1': 'Terror psicológico',
    'game.tag2': 'Aventura narrativa',
    'game.tag3': 'Exploración',
    'game.tag4': 'Puzles',
    'game.steam': 'Ver en Steam',
    'game.trailer': 'Tráiler Oficial',
    'about.kicker': 'Quiénes somos',
    'about.title': 'Dos personas detrás de cada detalle',
    'about.body1': 'InLoop Studios es un estudio independiente formado por dos desarrolladores apasionados por la narrativa, el diseño de mundos y las experiencias que conectan emocionalmente con quien juega.',
    'about.body2': 'Combinamos diseño, arte, narrativa y programación para crear videojuegos pequeños, personales y con una identidad visual clara.',
    'team.yussRole': 'Dirección creativa · Narrativa · Level design · Arte',
    'team.yussBio': 'Cofundadora y directora creativa. Desarrolla la narrativa, el guion, el diseño de niveles y la dirección artística, definiendo la visión detrás de cada proyecto.',
    'team.watafoRole': 'Programación · Desarrollo técnico · Diseño 3D',
    'team.watafoBio': 'Cofundador y desarrollador principal. Se encarga de la programación y los sistemas del juego, además de crear assets 3D, iluminación y efectos visuales que dan vida a cada proyecto.',
    'contact.kicker': 'Contacto',
    'contact.title': 'Hablemos',
    'contact.body': 'Para colaboraciones, prensa, propuestas o consultas sobre nuestros proyectos, puedes escribirnos directamente.',
    'contact.emailLabel': 'EMAIL',
    'contact.followLabel': 'SÍGUENOS',
    'support.kicker': 'APÓYANOS',
    'support.body': 'Apóyanos mientras seguimos desarrollando y mejorando Shadows of Christmas Eve.',
    'support.button': 'APÓYANOS EN KO-FI',
    'news.kicker': 'NOVEDADES',
    'news.title': 'Lo último de InLoop',
    'news.intro': 'Actualizaciones, eventos, lanzamientos y apariciones de InLoop Studios.',
    'news.filter.all': 'TODAS',
    'news.filter.game': 'JUEGO',
    'news.filter.events': 'EVENTOS',
    'news.filter.press': 'PRENSA',
    'news.filter.community': 'COMUNIDAD',
    'footer.copy': '© 2026 InLoop Studios. Todos los derechos reservados.'
  },
  en: {
    'nav.home': 'Home',
    'nav.game': 'Our game',
    'nav.news': 'News',
    'nav.about': 'About us',
    'nav.contact': 'Contact',
    'nav.talk': 'Let’s talk',
    'hero.kicker': 'Indie game studio',
    'hero.title': 'We create narrative experiences with atmospheres that leave a lasting impression',
    'hero.body': 'We design worlds, characters, and stories made to connect with players, carefully shaping every detail of the experience.',
    'hero.gameButton': 'Explore our game',
    'hero.aboutButton': 'About us',
    'hero.soon': 'DEMO AVAILABLE',
    'hero.demo': 'Discover the beginning of Shadows of Christmas Eve.',
    'game.kicker': 'Our first game',
    'game.description': 'Explore a house that changes as nightmares grow increasingly disturbing, while unseen presences seem to watch you from the darkness.',
    'game.tag1': 'Psychological horror',
    'game.tag2': 'Narrative adventure',
    'game.tag3': 'Exploration',
    'game.tag4': 'Puzzles',
    'game.steam': 'View on Steam',
    'game.trailer': 'Official trailer',
    'about.kicker': 'About us',
    'about.title': 'Two people behind every detail',
    'about.body1': 'InLoop Studios is an independent studio formed by two developers passionate about storytelling, world design, and experiences that connect emotionally with players.',
    'about.body2': 'We combine design, art, narrative, and programming to create small, personal games with a clear visual identity.',
    'team.yussRole': 'Creative direction · Narrative · Level design · Art',
    'team.yussBio': 'Co-founder and creative director. She develops the narrative, writing, level design, and art direction, defining the vision behind each project.',
    'team.watafoRole': 'Programming · Technical development · 3D design',
    'team.watafoBio': 'Co-founder and lead developer. He handles programming and game systems, while also creating 3D assets, lighting, and visual effects that bring each project to life.',
    'contact.kicker': 'Contact',
    'contact.title': 'Let’s talk',
    'contact.body': 'For collaborations, press inquiries, proposals, or questions about our projects, feel free to contact us directly.',
    'contact.emailLabel': 'EMAIL',
    'contact.followLabel': 'FOLLOW US',
    'support.kicker': 'SUPPORT US',
    'support.body': 'Support us while we continue developing and improving Shadows of Christmas Eve.',
    'support.button': 'SUPPORT US ON KO-FI',
    'news.kicker': 'NEWS',
    'news.title': 'InLoop latest',
    'news.intro': 'Updates, events, launches, and appearances from InLoop Studios.',
    'news.filter.all': 'ALL',
    'news.filter.game': 'GAME',
    'news.filter.events': 'EVENTS',
    'news.filter.press': 'PRESS',
    'news.filter.community': 'COMMUNITY',
    'footer.copy': '© 2026 InLoop Studios. All rights reserved.'
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
      if (element.classList.contains('glitch-title')) {
        element.dataset.text = translations[lang][key];
      }
    }
  });

  languageButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  localStorage.setItem('inloop-language', lang);
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
}

languageButtons.forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

setLanguage(localStorage.getItem('inloop-language') || 'es');
