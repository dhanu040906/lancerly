"https://www.gstatic.com/firebasejs/11.1.0/firebase-app-compat.js"
   "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth-compat.js"
    "https://www.gstatic.com/firebasejs/11.1.0/firebase-database-compat.js"

const firebaseConfig = {
    apiKey: "AIzaSyBIfFs_76KN0Mx6vLbeni8j2QIqEDfOOLE",
    authDomain: "authentication-final-4e0cf.firebaseapp.com",
    databaseURL: "https://authentication-final-4e0cf-default-rtdb.firebaseio.com/",
    projectId: "authentication-final-4e0cf",
    storageBucket: "authentication-final-4e0cf.firebasestorage.app",
    messagingSenderId: "899696975212",
    appId: "1:899696975212:web:3aa5337e8d6014de98a749"
}
firebase.initializeApp(firebaseConfig);

var account = 0;

function adddetailstopage(name, collegename, skills, projects, email) {

    var personBox = document.createElement('div');
    personBox.className = 'person-box';

    var _name = document.createElement('b');
    var _collegename = document.createElement('p');
    var _skills = document.createElement('p');
    var _project = document.createElement('p');
    var _email = document.createElement('p');

    _name.innerHTML = 'My name is ' + name;
    _collegename.innerHTML = 'I graduated from ' + collegename;
    _skills.innerHTML = 'My skills are ' + skills;
    _project.innerHTML = 'My previous works are ' + projects;
    _email.innerHTML = 'You can contact me through ' + email;

    personBox.appendChild(_name);
    personBox.appendChild(_collegename);
    personBox.appendChild(_skills);
    personBox.appendChild(_project);
    personBox.appendChild(_email);

    document.getElementById('information').appendChild(personBox);
}
function fetchdata() {
    firebase.database().ref('details of all people').once('value', function (snapshot) {
        snapshot.forEach(
            function (ChildSnapshot) {
                let name = ChildSnapshot.val().name;
                let collegename = ChildSnapshot.val().college;
                let skills = ChildSnapshot.val().phonenumber;
                let project = ChildSnapshot.val().projects;
                let email = ChildSnapshot.val().email;
                adddetailstopage(name, collegename, skills, project, email)
            }
        );
    })
}

window.onload = fetchdata;

