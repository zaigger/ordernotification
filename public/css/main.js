// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional


var firebaseConfig = {
apiKey: "AIzaSyD-Gjzukh9IrRAfww_EWTD7wF0DR-ZlUTk",
authDomain: "clientorder-18289.firebaseapp.com",
databaseURL: "https://clientorder-18289-default-rtdb.firebaseio.com",
projectId: "clientorder-18289",
storageBucket: "clientorder-18289.appspot.com",
messagingSenderId: "606963992537",
appId: "1:606963992537:web:479a4afe37d6e8c5513bc8",
measurementId: "G-KX85DC0T9Q"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref('messages');


document.getElementById('orderform').addEventListener('submit', submitForm);



function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name')
    var febric = getInputVal('febric')
    var clothstype = getInputVal('clothstype')
    var clothsname = getInputVal('clothsname')
    var mobile = getInputVal('mobile')
    var email = getInputVal('email')

    saveMessage(name, febric, clothstype, clothsname, mobile, email);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },2000);

    orderform.reset()

}

function getInputVal(id){
    return document.getElementById(id).value;

}

function saveMessage(name, febric, clothstype, clothsname, mobile, email){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        febric: febric,
        clothstype: clothstype,
        clothsname: clothsname,
        mobile: mobile,
        email: email

    });
   
}
