import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"; // Optional: Add if Analytics needed
import { getAuth, Auth } from "firebase/auth"; // Import Auth service
import { FirebaseStorage, getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID // Optional
};

let app: FirebaseApp;
let db: Firestore;
let analytics; // Optional
let storage:FirebaseStorage ;
let auth: Auth; // Declare Auth instance
// Initialize Firebase only if it hasn't been initialized yet
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app); // Initialize Auth
  
  if (typeof window !== "undefined") { // Optional: Initialize Analytics only on client-side
    analytics = getAnalytics(app);
  }
} else {
  app = getApp();
  db = getFirestore(app);
  auth = getAuth(app); // Get existing Auth instance
  storage = getStorage(app);
// Get a reference to the storage service
 
  if (typeof window !== "undefined") { // Optional
    analytics = getAnalytics(app);
  }
}


export { app, db, auth, storage }; // Export auth instance