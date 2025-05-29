# 🐾 FindPet

Aplicativo mobile feito em **React Native + Expo** com backend em **Node.js + MongoDB**, criado para **registrar, localizar e visualizar animais perdidos** em tempo real.

## 🚀 Funcionalidades

- Cadastro de pets perdidos com foto, localização e status de perigo
- Listagem de animais com destaque para os que estão em perigo
- Visualização dos animais no mapa
- Registro com uso da câmera e geolocalização do dispositivo

## 🛠️ Tecnologias

- **Frontend:** React Native, Expo, React Navigation, React Native Paper
- **Backend:** Node.js, Express, MongoDB, Multer
- **Banco de Dados:** MongoDB Atlas (ou local)

## 🔧 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/NataliaBento/FindPet.git
cd FindPet
```

### 2. Configure o backend

Acesse a pasta `backend/`:

```bash
cd backend
npm install
```

Crie um arquivo `.env` com sua string de conexão do MongoDB:

```
MONGO_URI=mongodb+srv://seu-usuario:sua-senha@seubanco.mongodb.net/?retryWrites=true&w=majority
```

Inicie o backend:

```bash
node index.js
```

> Certifique-se de estar conectado à mesma rede Wi-Fi que o celular, e use seu IP local no frontend.

---

### 3. Configure o frontend

Abra outra aba no terminal e vá para a pasta `frontend/`:

```bash
cd ../frontend
npm install
```

No arquivo `HomeScreen.js` (e outros), atualize o `API_URL` com seu IP local:

```js
const API_URL = 'http://SEU_IP_LOCAL:3000';
```

Inicie o app:

```bash
npx expo start
```

Escaneie o QR Code com o **Expo Go** no seu celular.

---

## 💡 Observações

- As fotos são salvas localmente na pasta `backend/uploads`
- O banco de dados não é fornecido — você precisa conectar ao **seu MongoDB**

---


