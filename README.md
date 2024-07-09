# Catalogo de CEAH

Backend del catalogo de CEAH creado con Express, Typescript, MongoDB, Multer, Dotenv, cors, morgan, bcryptjs, jsonwebtoken.

Clean Architect
Domain solo se relaciona con domain
Application solo se relaciona con domain
Infrastructure se relacion con Application y Domain

* Tener instalado globalmente

npm i typescript -g
npm i ts-node -g
npm i nodemon -g


* Pasos para hacer un crud sin models con Express con js

tsc --init
npm init -y
npm i express cors dotenv multer morgan mongoose bcryptjs jsonwebtoken
npm i @types/express @types/cors @types/dotenv @types/multer @types/morgan @types/mongoose @types/bcryptjs @types/jsonwebtoken -D


* Descomentamos y ponemos en ts.config

{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}


* En mi packpage.json

"scripts": {
    "dev": "nodemon ./src/app.ts",
    "build": "tsc",
    "start": "node ./dist/app.js"
  },


* Pasos para desplegar
sudo apt-get update
sudo apt-get upgrade
sudo apt install nginx

