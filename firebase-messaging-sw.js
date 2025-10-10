// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js");

const firebaseConfig = {
  // Pastikan konfigurasi ini sama dengan yang di index.html
  apiKey: "AIzaSyCZAfnelUdrwUz856j2hC3yJWqUm-JJmiI",
  authDomain: "ruangbelajar-52a67.firebaseapp.com",
  databaseURL: "https://ruangbelajar-52a67-default-rtdb.firebaseio.com",
  projectId: "ruangbelajar-52a67",
  storageBucket: "ruangbelajar-52a67.appspot.com",
  messagingSenderId: "545318863560",
  appId: "1:545318863560:web:df392c010ff914aad49bfd",
  measurementId: "G-9M8CKR66BW",
};

// Inisialisasi Firebase App
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Tangani pesan di latar belakang (saat browser ditutup atau di-minimize)
messaging.onBackgroundMessage((payload) => {
  console.log("[firebase-messaging-sw.js] Pesan push latar belakang diterima.", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || "https://firebasestorage.googleapis.com/v0/b/ruangbelajar-52a67.appspot.com/o/LOGO%20PRODI%202025.png?alt=media&token=a13b26cd-23c0-40bb-bd96-c4ff014673a1",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
