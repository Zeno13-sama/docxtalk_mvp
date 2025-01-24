
#!/bin/bash

echo "Début du déploiement..."

# Définir le répertoire du projet Git dans le conteneur
PROJECT_DIR="/docxtalk_mvp/MVP"  # Le répertoire où se trouve le dépôt Git et docker-compose.yml

# Étape 1 : Se déplacer dans le répertoire du projet Git
echo "Changement de répertoire vers $PROJECT_DIR..."
cd "$PROJECT_DIR" || { echo "Erreur : Impossible de se déplacer dans $PROJECT_DIR"; exit 1; }

# Étape 2 : Mettre à jour le code depuis GitHub
echo "Mise à jour du code depuis GitHub..."
git fetch --all || { echo "Erreur lors de git fetch"; exit 1; }
git pull origin master || { echo "Erreur lors de git pull"; exit 1; }

# Étape 3 : Arrêter les conteneurs Docker
echo "Arrêt des conteneurs Docker..."           
docker-compose -f docker-compose.yml down || { echo "Erreur lors de docker-compose down"; exit 1; }

# Étape 4 : Redémarrer les conteneurs Docker
echo "Redémarrage des conteneurs Docker..."
docker-compose -f docker-compose.yml up -d || { echo "Erreur lors de docker-compose up"; exit 1; }

echo "Déploiement terminé avec succès !"