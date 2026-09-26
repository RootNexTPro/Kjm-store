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
