# Guide du Portfolio Antoine Ritter

## 🎯 Vue d'ensemble

Bienvenue ! Ce document vous explique comment utiliser et personnaliser votre nouveau site portfolio. Le site a été conçu de manière simple et logique pour être facilement compris et modifié, même par quelqu'un qui débute en développement web.

## 📁 Structure du site

Le site est contenu dans un seul fichier `index.html` qui comprend :
- **HTML** : La structure et le contenu de la page
- **CSS** : Les styles et l'apparence visuelle
- **JavaScript** : Les interactions et animations

## 🎨 Sections du site

### 1. **Navigation**
- En haut de la page, collée lors du défilement
- Menu avec les liens : Accueil, Projets, À propos, Contact
- Menu hamburger sur mobile pour une meilleure ergonomie

### 2. **Section Hero (Accueil)**
- Grande section d'introduction
- Votre nom et titre
- Bouton qui défile automatiquement vers vos projets

### 3. **Section Projets**
- Grille de cartes affichant vos projets
- Effet de survol pour une meilleure interactivité
- Tags de technologies utilisées

### 4. **Section À propos**
- Présentation brève
- Liste de vos compétences sous forme de badges

### 5. **Section Contact**
- Informations de contact
- Liens vers réseaux sociaux
- Formulaire de contact simple

### 6. **Footer**
- Copyright et liens sociaux

## ✏️ Comment personnaliser le site

### Modifier les textes

1. **Votre nom et titre** :
```html
<h1 class="hero-title">Bonjour, je suis [VOTRE NOM]</h1>
<p class="hero-subtitle">[VOTRE TITRE]</p>
```

2. **Description À propos** :
Cherchez la section avec `id="apropos"` et modifiez le texte dans le paragraphe.

3. **Informations de contact** :
Remplacez `contact@antoineritter.fr` par votre vraie adresse email.

### Modifier les couleurs

Dans la section CSS, cherchez les variables `:root` :
```css
:root {
    --primary-color: #2563eb;      /* Bleu principal */
    --secondary-color: #7c3aed;    /* Violet secondaire */
    --text-color: #1f2937;         /* Gris foncé pour le texte */
    --bg-color: #fafafa;           /* Arrière-plan gris très clair */
}
```

Changez les codes couleur hexadécimaux pour personnaliser votre palette.

### Ajouter ou modifier des projets

Cherchez la section `<div class="projects-grid">` et ajoutez/modifiez les cartes :

```html
<div class="project-card">
    <div class="project-icon">📱</div>
    <h3 class="project-title">Titre du projet</h3>
    <p class="project-description">Description de votre projet ici.</p>
    <div class="project-tags">
        <span class="tag">Technologie1</span>
        <span class="tag">Technologie2</span>
    </div>
    <a href="#" class="project-link">Voir plus →</a>
</div>
```

### Modifier les compétences

Dans la section À propos, ajoutez ou supprimez des badges de compétences :

```html
<span class="skill-badge">Nom de la compétence</span>
```

### Mettre à jour les liens sociaux

Remplacez les URLs des liens GitHub et LinkedIn :

```html
<a href="https://github.com/VOTRE_USERNAME" target="_blank">
<a href="https://linkedin.com/in/VOTRE_PROFIL" target="_blank">
```

## 📱 Responsive Design

Le site s'adapte automatiquement aux différentes tailles d'écran :
- **Desktop** (> 1024px) : 3 colonnes de projets
- **Tablette** (768px - 1024px) : 2 colonnes de projets
- **Mobile** (< 768px) : 1 colonne, menu hamburger

## 🚀 Déploiement avec Docker

Puisque vous utilisez Docker et docker-compose, voici comment héberger ce site :

### 1. Structure de dossier
```
/mon-portfolio/
├── docker-compose.yml
├── Caddyfile
└── www/
    └── index.html
```

### 2. Exemple de docker-compose.yml
```yaml
version: '3.8'

services:
  caddy:
    image: caddy:latest
    container_name: portfolio-caddy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile
      - ./www:/srv
      - caddy_data:/data
      - caddy_config:/config

volumes:
  caddy_data:
  caddy_config:
```

### 3. Exemple de Caddyfile
```
antoineritter.fr {
    root * /srv
    file_server
    encode gzip
    
    # Configuration TLS automatique
    tls {
        protocols tls1.2 tls1.3
    }
}
```

### 4. Commandes de déploiement
```bash
# Placer votre index.html dans le dossier www/
cp index.html www/

# Démarrer les conteneurs
docker-compose up -d

# Vérifier les logs
docker-compose logs -f
```

### 5. Configuration DNS (DuckDNS)
Si vous utilisez DuckDNS, assurez-vous que votre domaine pointe vers votre IP publique.

## 🎓 Concepts pour débutants

### HTML (Structure)
- Les **balises** définissent la structure : `<header>`, `<section>`, `<div>`, etc.
- Les **attributs** ajoutent des informations : `class`, `id`, `href`
- Pensez au HTML comme au **squelette** de votre page

### CSS (Style)
- Les **sélecteurs** ciblent des éléments : `.classe`, `#id`, `element`
- Les **propriétés** définissent l'apparence : `color`, `font-size`, `margin`
- Pensez au CSS comme à la **peau et vêtements** de votre page

### JavaScript (Interactivité)
- Ajoute du **comportement** à votre page
- Gère les **événements** : clics, défilement, etc.
- Pensez au JavaScript comme au **système nerveux** de votre page

## 🔧 Prochaines étapes

1. **Personnalisez le contenu** avec vos vraies informations
2. **Ajoutez vos vrais projets** avec captures d'écran
3. **Créez des pages détaillées** pour chaque projet
4. **Configurez le formulaire de contact** (nécessite un backend ou service tiers)
5. **Optimisez les images** pour un chargement rapide
6. **Testez sur différents navigateurs** et appareils

## 📚 Ressources pour apprendre

- **HTML/CSS** : MDN Web Docs (developer.mozilla.org)
- **JavaScript** : javascript.info
- **Flexbox/Grid** : css-tricks.com/snippets/css/complete-guide-flexbox/
- **Responsive Design** : web.dev/responsive-web-design-basics/

## 💡 Conseils

- **Sauvegardez régulièrement** votre code avec Git
- **Testez chaque modification** avant de déployer
- **Demandez des retours** à vos amis et collègues
- **Itérez progressivement** : commencez simple, améliorez graduellement
- **Documentez vos projets** au fur et à mesure que vous les créez

## 📞 Support

Si vous avez des questions ou besoin d'aide pour personnaliser davantage votre site, n'hésitez pas à :
- Consulter la documentation en ligne
- Rejoindre des communautés de développeurs (Stack Overflow, Reddit r/webdev)
- Expérimenter et apprendre par la pratique !

---

**Bon courage avec votre portfolio ! 🚀**
