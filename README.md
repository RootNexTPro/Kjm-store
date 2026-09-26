# KJM Store Online

KJM Store Online is a digital products store backend powered by PocketBase. It handles product listings, orders, and coupons, and integrates with Notch Pay for payment processing.

## Project Structure

The project directory has the following structure:

- `pb_public/`: Contains the static files for the store's storefront (vitrine).
- `pb_hooks/`: Contains server-side logic and webhooks (e.g., Notch Pay webhooks).
- `pb_schema/`: Contains the JSON schemas for the PocketBase collections.
  - `products.json`: Schema for digital products.
  - `orders.json`: Schema for customer orders.
  - `coupons.json`: Schema for discount coupons.
- `.env.example`: Template for environment variables required by the project.

## Local Startup

To run the project locally, follow these steps:

1. **Install PocketBase:** Download the PocketBase executable for your operating system from the [official website](https://pocketbase.io/docs/) and place it in the root directory.
2. **Environment Variables:** Copy `.env.example` to `.env` and fill in your Notch Pay API keys:
   ```bash
   cp .env.example .env
   ```
3. **Import Schemas:** You will need to import the schemas located in `pb_schema/` into your PocketBase instance via the admin UI (Settings -> Export collections / Import collections).
4. **Start the Server:** Run the PocketBase executable:
   ```bash
   ./pocketbase serve
   ```
   The admin UI will be accessible at `http://127.0.0.1:8090/_/` and the public storefront at `http://127.0.0.1:8090/`.

## Deployment Prerequisites

Before deploying the application, ensure the following prerequisites are met:

1. A hosting provider capable of running the PocketBase executable (e.g., a VPS on DigitalOcean, AWS EC2, or platforms like Render/Fly.io).
2. Proper environment variable configuration for production, including valid Notch Pay keys.
3. Persistent storage setup for the `pb_data/` directory to prevent data loss.
4. A domain name with SSL/TLS certificates configured (PocketBase can handle automatic TLS if bound to port 80/443).

## Configuration du Webhook Notch Pay

Pour que les paiements soient automatiquement confirmés dans votre boutique (statut mis à jour de `pending` à `paid`), vous devez configurer le webhook Notch Pay.

1. Connectez-vous à votre [Tableau de bord Notch Pay Business suite](https://business.notchpay.co).
2. Naviguez vers la section des **Paramètres** puis **Webhooks**.
3. Ajoutez une nouvelle URL de webhook pointant vers votre serveur déployé :
   `https://votre-domaine.com/api/webhooks/notchpay`
4. Assurez-vous d'avoir configuré la variable `NOTCHPAY_PRIVATE_KEY` dans votre environnement de production (ou `.env` localement) afin que le serveur puisse vérifier l'authenticité de la transaction.

## 🚀 Déploiement en Production en 1 minute

Pour déployer rapidement ce projet sur un serveur Linux (VPS Ubuntu/Debian), nous avons inclus un script d'installation automatique.

### Étape 1 : Cloner le projet sur votre VPS
Connectez-vous à votre serveur via SSH, puis clonez ce dépôt :
```bash
git clone https://github.com/votre-utilisateur/kjm-store-online.git
cd kjm-store-online
```

### Étape 2 : Lancer le script de déploiement
Exécutez le script qui va télécharger PocketBase (selon l'architecture CPU), configurer les permissions, et créer un service \`systemd\` pour faire tourner le backend 24h/24 :
```bash
bash deploy.sh
```
Une fois terminé, PocketBase tournera en arrière-plan sur \`http://127.0.0.1:8090\`.

### Étape 3 : Nginx et SSL (HTTPS)
Pour lier votre nom de domaine (ex: \`store.votredomaine.com\`) et sécuriser le site avec HTTPS :

1. Installez Nginx et Certbot :
   ```bash
   sudo apt update
   sudo apt install nginx certbot python3-certbot-nginx
   ```
2. Utilisez le modèle \`nginx.conf.example\` fourni pour créer votre configuration :
   ```bash
   sudo cp nginx.conf.example /etc/nginx/sites-available/kjm-store.conf
   # Modifiez le fichier pour remplacer "votre-domaine.com" par votre vrai domaine
   # avec un editeur de texte comme vim ou nano.
   ```
3. Activez le site :
   ```bash
   sudo ln -s /etc/nginx/sites-available/kjm-store.conf /etc/nginx/sites-enabled/
   sudo systemctl reload nginx
   ```
4. Générez le certificat SSL gratuit :
   ```bash
   sudo certbot --nginx -d votre-domaine.com
   ```

Félicitations, votre boutique est en ligne et sécurisée ! 🎉
