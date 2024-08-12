// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnn3kkfrVD71xLl0lg-EFZepEdxHL8Aig",
    authDomain: "gsma7670c.firebaseapp.com",
    databaseURL: "https://gsma7670c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gsma7670c",
    storageBucket: "gsma7670c.appspot.com",
    messagingSenderId: "351373262732",
    appId: "1:351373262732:web:2c308099230251131320a9",
    measurementId: "G-45B69FTJWH"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Reference to your sensor data in Firebase
const sensorRef = database.ref('VER1');

// Fetch the sensor data and update the meter elements with the last record
sensorRef.on('child_added', (snapshot) => {
  const data = snapshot.val();
    
    if (data) {
        // Update the meters with the latest sensor values
        document.getElementById('lightMeter').value = data.I || 0;
        document.getElementById('lightMeterValue').innerText = data.I || 0;

        document.getElementById('humidityMeter').value = data.h || 0;
        document.getElementById('humidityMeterValue').innerText = `${data.h || 0}%`;

        document.getElementById('temperatureMeter').value = data.t || 0;
        document.getElementById('temperatureMeterValue').innerText = `${data.t || 0}°C`;

        document.getElementById('leafWetnessMeter').value = data.D1 || 0;
        document.getElementById('leafWetnessMeterValue').innerText = `${data.D1 || 0}%`;

        document.getElementById('soilMoistureTopMeter').value = data.a || 0;
        document.getElementById('soilMoistureTopMeterValue').innerText = `${data.a || 0}%`;

        document.getElementById('soilMoistureMiddleMeter').value = data.b || 0;
        document.getElementById('soilMoistureMiddleMeterValue').innerText = `${data.b || 0}%`;

        document.getElementById('soilMoistureBottomMeter').value = data.c || 0;
        document.getElementById('soilMoistureBottomMeterValue').innerText = `${data.c || 0}%`;
    }
});


// Fetch data from the local JSON file
