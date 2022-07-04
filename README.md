# Gigit

Cara mudah mendefinisikan Git Hooks

## Instalasi

```bash
npm i -g @mzaini30/gigit
```

## Cara Pakai

Buat file `gigit.json` yang isinya seperti ini:

```json
{
  "pre-commit": "npm run preCommit",
  "pre-push": "npm run prePush"
}
```

Lalu, install Git Hooks dengan perintah `gigit`
