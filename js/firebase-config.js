const firebaseConfig = {
    apiKey: "AIzaSyBhBTqQ1iadLatbKyD7DE7UM7gihfLjYEY",
    authDomain: "autostock-c3953.firebaseapp.com",
    databaseURL: "https://autostock-c3953-default-rtdb.asia-southeast1.firebasedatabase.app"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const database = typeof firebase.database === "function" ? firebase.database() : null;
