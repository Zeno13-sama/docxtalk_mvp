import hmac
import hashlib

# Clé secrète (identique à celle configurée dans GitHub et dans ton application Flask)
secret = b'071e3b498271e28854f25e30afccffa21fa45b9e72f3ddffb525325f6c3ed6e6'

# Corps de la requête (identique à celui envoyé dans la requête curl)
body = b'{"ref": "refs/heads/master"}'

# Calcul de la signature HMAC-SHA256
signature = hmac.new(secret, body, hashlib.sha256).hexdigest()

# Affiche la signature au format attendu (sha256=...)
print(f"sha256={signature}")
