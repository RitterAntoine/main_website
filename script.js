// ============================================
// JAVASCRIPT EXTRACTED FROM index.html
// Place this file in the same folder as index.html
// ============================================

// ============================================
// MENU HAMBURGER MOBILE
// ============================================

// Récupération des éléments du DOM (Document Object Model)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Ajout d'un événement au clic sur le bouton hamburger
hamburger.addEventListener('click', function() {
    // Toggle = ajoute la classe si elle n'existe pas, l'enlève si elle existe
    navMenu.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Enlève la classe 'active' pour fermer le menu
        navMenu.classList.remove('active');
    });
});

// ============================================
// GESTION DU FORMULAIRE DE CONTACT
// ============================================

// Récupération du formulaire
const contactForm = document.getElementById('contactForm');

// Ajout d'un événement lors de la soumission du formulaire
contactForm.addEventListener('submit', function(event) {
    // Empêche le rechargement de la page
    event.preventDefault();
    
    // Récupération des valeurs des champs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Affichage d'un message de confirmation
    alert('Merci ' + name + ' ! Votre message a été envoyé avec succès.\n\nNote: Ce formulaire est un exemple. Dans un vrai site, les données seraient envoyées à un serveur.');
    
    // Réinitialisation du formulaire
    contactForm.reset();
});

// ============================================
// ANIMATION AU SCROLL (optionnel)
// ============================================

// Fonction pour détecter si un élément est visible à l'écran
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour ajouter des animations aux éléments visibles
function handleScrollAnimations() {
    // Sélection de tous les éléments à animer
    const animatedElements = document.querySelectorAll('.project-card, .skill-badge');
    
    // Pour chaque élément
    animatedElements.forEach(function(element) {
        // Si l'élément est visible
        if (isElementInViewport(element)) {
            // Ajouter une petite animation
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Écouteur d'événement sur le scroll
window.addEventListener('scroll', handleScrollAnimations);

// Appeler la fonction au chargement de la page
window.addEventListener('load', handleScrollAnimations);
