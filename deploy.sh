#!/bin/bash
set -e

echo "============================================================"
echo "    🚀 KJM Store Online - Script de Déploiement Automatique 🚀"
echo "============================================================"

# Variables
PB_VERSION="0.22.21"
OS="linux"
ARCH=$(uname -m)

if [ "$ARCH" = "x86_64" ]; then
    PB_ARCH="amd64"
elif [ "$ARCH" = "aarch64" ] || [ "$ARCH" = "arm64" ]; then
    PB_ARCH="arm64"
else
    echo "Architecture non supportée: $ARCH"
    # Fallback to amd64 if detection fails instead of exiting
    PB_ARCH="amd64"
fi

PB_ZIP="pocketbase_${PB_VERSION}_${OS}_${PB_ARCH}.zip"
PB_URL="https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/${PB_ZIP}"

# Vérifier ou télécharger PocketBase
if [ ! -f "pocketbase" ]; then
    echo "Téléchargement de PocketBase v${PB_VERSION} pour ${PB_ARCH}..."
    wget -q "$PB_URL" -O pb.zip
    unzip -q pb.zip pocketbase
    rm pb.zip
    echo "PocketBase téléchargé avec succès."
else
    echo "L'exécutable PocketBase est déjà présent."
fi

# Permissions
echo "Configuration des permissions..."
chmod +x pocketbase
chmod +x deploy.sh

# Détection du chemin absolu
PROJECT_DIR=$(pwd)
CURRENT_USER=$(whoami)

# Configuration du service systemd
SERVICE_FILE="/etc/systemd/system/kjm-store.service"

echo "Création du service systemd dans $SERVICE_FILE..."
sudo bash -c "cat << 'SVC' > $SERVICE_FILE
[Unit]
Description=KJM Store Online (PocketBase)
After=network.target

[Service]
Type=simple
User=$CURRENT_USER
WorkingDirectory=$PROJECT_DIR
ExecStart=$PROJECT_DIR/pocketbase serve --http=127.0.0.1:8090
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
SVC"

echo "Rechargement des démons systemd et activation du service..."
sudo systemctl daemon-reload
sudo systemctl enable kjm-store.service
sudo systemctl restart kjm-store.service

echo "============================================================"
echo "✅ Déploiement terminé !"
echo "👉 Le service tourne sur http://127.0.0.1:8090"
echo "👉 Pour vérifier les logs: sudo journalctl -u kjm-store.service -f"
echo "============================================================"
