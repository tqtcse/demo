//Register function

var firebaseConfig = {
    apiKey: "AIzaSyDioYAzvJooHpspr8Z58bImI0s2jaIRU90",
    authDomain: "testlogin-c11b6.firebaseapp.com",
    projectId: "testlogin-c11b6",
    storageBucket: "testlogin-c11b6.appspot.com",
    messagingSenderId: "598921663451",
    appId: "1:598921663451:web:8bc05bbb07d312f1650dfe",
    measurementId: "G-4N0GNYZQ8J"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()

function register() {
email = document.getElementById('email').value
password = document.getElementById('password').value
full_name = document.getElementById('full_name').value
//check name, mail, pass
if (valid_name(full_name) == false){
    alert('invalid name')
    return
}

if (valid_email(email) == false || valid_password(password) == false){
    alert('Email or Password is not valid')
    return
}

auth.createUserWithEmailAndPassword(email, password)
.then(function(){
    var user = auth.currentUser
    var database_ref = database.ref()

// Create User data
     var user_data = {
        email : email,
        full_name : full_name,
        last_login : Date.now()
        }
//Push to firebase database
database_ref.child('users/' + user.uid).set(user_data)
//done
alert('user created !')
        }   
    )

}
function login(){
email = document.getElementById('email').value 
password = document.getElementById('password').value

if (valid_email(email) == false || valid_password == false){
    alert('Email or Password is not valid')
    return
}

auth.signInWithEmailAndPassword(email, password)
.then( function(){
    var user = auth.currentUser
    var database_ref = database.ref()

    var user_data = {
        last_login : Date.now()
    }
    database_ref.child('user/' + user.uid).update(user_data)
    alert('user logged in!')
}


)
}

function valid_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }

function valid_password(password) {
    
    // Firebase only accepts lengths greater than 6
    if (password.length < 6) {
      return false
    } else {
      return true
    }
  }
function valid_name(name){
    if (name == null){
        return false
    }
    if (name.length <= 0){
        return false
    } else {
        return true
    }
}
function submit(){
    
}