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

* cat packpage.json sirve para ver el archivo
* nano.env editor de texto
* ctrl + o para guardar
* enter para confirmar el guardar
* ctrl + x para salir
* pwd para ver la ruta
* rm -rf CEAH-API para borrar la carpeta
* git clone https://github.com/kyozApp/CEAH-API.git    para clonar la carpeta


link usados
https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04-es
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04-es
https://pm2.keymetrics.io/docs/tutorials/pm2-nginx-production-setup
https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-20-04-es

* pasos para mongo
sudo rm /etc/apt/sources.list.d/mongodb-org-4.4.list

curl -fsSL https://pgp.mongodb.com/server-6.0.asc | sudo tee /etc/apt/trusted.gpg.d/mongodb-server-6.0.asc

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

sudo apt-get update

sudo apt-get install -y mongodb-org

