// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

  const firebaseConfig = {
    apiKey: "AIzaSyAwxoO8IRlrrBxTUu7ZWILcW6XqAYMBSIc",
    authDomain: "topicos-d1f09.firebaseapp.com",
    projectId: "topicos-d1f09",
    databaseURL: "https://topicos-d1f09-default-rtdb.firebaseio.com/", // Link de tu base de datos
    projectId: "topicos-d1f09",
    storageBucket: "topicos-d1f09.firebasestorage.app",
    messagingSenderId: "1082103057759",
    appId: "1:1082103057759:web:f5804077e9052198327aea",
    measurementId: "G-EZ4BZ9Z1JE"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una referencia a la base de datos
const database = getDatabase(app);

export default database;
