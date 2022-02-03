import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCLJ9kONQrupzEKbeBL4XVHYhm0QG7qix0",
    authDomain: "personal-project-ea18f.firebaseapp.com",
    projectId: "personal-project-ea18f",
    storageBucket: "personal-project-ea18f.appspot.com",
    messagingSenderId: "306518300847",
    appId: "1:306518300847:web:d9f476dd66f0d66fd21c5a",
    measurementId: "G-Z7EQB58NE1"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);