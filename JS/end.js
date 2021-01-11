const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5; 


finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
 });

 saveHighScore = e => {
    console.log("Clicked the save button!");
    e.preventDefault();

    const score = {
       score: Math.floor(Math.random() * 100),
       name: username.value
    };
    highScores.push(score);

    highScores.sort((a, b) => b.score - a.score);

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./index.html");
 };

  // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyAiFU4qMEsxVzEZvhqXt-lPeCgfyUglf5c",
  //   authDomain: "pruebafirebase-d8b48.firebaseapp.com",
  //   projectId: "pruebafirebase-d8b48",
  //   storageBucket: "pruebafirebase-d8b48.appspot.com",
  //   messagingSenderId: "1047351380530",
  //   appId: "1:1047351380530:web:6f43e58c70f10716b24a2b"
  // };
  
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

  // //Conecta con BDD. De vuelve el objeto BDD

  // var db = firebase.firestore();

  //Operaciones con BDD

  // function escribir(){
  //   db.collection("users").add({
  //       username: `${username}`,
  //       higscore: `${highScores}`,
  //   })
  //   .then(function(docRef) {
  //       console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch(function(error) {
  //       console.error("Error adding document: ", error);
  //   });
  // }

  // function leer(){
  //   db.collection("users").get().then((querySnapshot) => {
  //       console.log(querySnapshot);
  //       querySnapshot.forEach((doc) => {
  //           console.log(doc.data());
  //           console.log(`${doc.id} => ${doc.data()}`);
  //       });
  //   });
  // }

  // db.collection("users").doc("TT3iGW74b0Hx1Yj4UDYE")
  //   .onSnapshot(function(doc) {
  //       console.log("Current data: ", doc.data());
  //   });