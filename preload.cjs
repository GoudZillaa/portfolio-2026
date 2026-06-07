const crypto = require('crypto');
if (crypto.webcrypto && crypto.webcrypto.getRandomValues) {
  crypto.getRandomValues = crypto.webcrypto.getRandomValues.bind(crypto.webcrypto);
}
