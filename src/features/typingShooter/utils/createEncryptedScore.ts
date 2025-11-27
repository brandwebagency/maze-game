import CryptoJS from "crypto-js";

export function encrypt(text) {
  const encrypted = CryptoJS.AES.encrypt(
    text.toString(),
    "keychron-typing-shooter-SK"
  ).toString();

  // Make URL-safe
  return encrypted.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
