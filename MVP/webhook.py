from flask import Flask, request
import subprocess
import hmac
import hashlib
import logging

# Configurer les logs
logging.basicConfig(
    filename='/var/log/webhook.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    # Log des en-têtes et du corps de la requête
    logging.info("Requête reçue : %s", request.headers)
    logging.info("Corps de la requête : %s", request.get_data())

    # Récupérer la signature GitHub
    signature = request.headers.get('X-Hub-Signature-256', '')
    logging.info("Signature reçue : %s", signature)

    # Extraire la partie sha256 de la signature
    if not signature.startswith('sha256='):
        logging.error("Format de signature invalide : %s", signature)
        return 'Format de signature invalide', 400
    signature = signature.split('sha256=')[-1]
    logging.info("Signature extraite : %s", signature)

    # Clé secrète GitHub (identique à celle configurée dans GitHub)
    secret = b'071e3b498271e28854f25e30afccffa21fa45b9e72f3ddffb525325f6c3ed6e6'
    logging.info("Clé secrète utilisée : %s", secret)

    # Calculer la signature locale
    body = request.get_data()
    local_signature = hmac.new(secret, body, hashlib.sha256).hexdigest()
    logging.info("Signature locale calculée : %s", local_signature)

    # Comparer les signatures
    if not hmac.compare_digest(local_signature, signature):
        logging.error("Signature invalide : reçue=%s, calculée=%s", signature, local_signature)
        return 'Signature invalide', 403

    # Exécuter le script de déploiement
    try:
        subprocess.run(['/docxtalk/docxtalk_mvp/MVP/deploy.sh'], check=True)
        logging.info("Déploiement déclenché avec succès !")
        return 'Déploiement déclenché avec succès !', 200
    except subprocess.CalledProcessError as e:
        logging.error("Erreur lors de l'exécution du script de déploiement : %s", e)
        return 'Erreur lors du déploiement', 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
