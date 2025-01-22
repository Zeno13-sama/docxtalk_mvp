#!/bin/bash

# Aller dans le répertoire du projet
cd /docxtalk/docxtalk_mvp/MVP

# Mettre à jour le code depuis GitHub
git fetch --all
git reset --hard origin/master  # Remplacez master par main si nécessaire

# Arrêter et redémarrer les conteneurs Docker
docker-compose down
docker-compose up -d

echo "Déploiement terminé avec succès !"
