// Public web-app configuration for the Northstar website.
// Replace every REPLACE_* value with the values from Firebase Console > Project settings > Your apps.
// This file is not a place for private service-account keys.
export const firebaseConfig = {
  apiKey: "REPLACE_WITH_FIREBASE_API_KEY",
  authDomain: "REPLACE_WITH_PROJECT_ID.firebaseapp.com",
  projectId: "REPLACE_WITH_PROJECT_ID",
  storageBucket: "REPLACE_WITH_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "REPLACE_WITH_MESSAGING_SENDER_ID",
  appId: "REPLACE_WITH_FIREBASE_APP_ID"
};

// Use the same email in firestore.rules and for the Firebase Authentication admin account.
export const adminEmail = "REPLACE_WITH_ADMIN_EMAIL";

export function isFirebaseConfigured() {
  const required = [
    firebaseConfig.apiKey,
    firebaseConfig.authDomain,
    firebaseConfig.projectId,
    firebaseConfig.appId,
    adminEmail
  ];
  return required.every(value => value && !value.startsWith("REPLACE_"));
}
