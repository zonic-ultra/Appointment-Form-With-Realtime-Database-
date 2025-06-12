var fullNameV,
  ageV,
  genderV,
  addressV,
  emailV,
  cnumberV,
  msgcontentV,
  date_timeV;

function readFrom() {
  fullNameV = document.getElementById("fullName").value;
  ageV = document.getElementById("age").value;
  genderV = document.getElementById("gender").value;
  addressV = document.getElementById("address").value;
  emailV = document.getElementById("email").value;
  cnumberV = document.getElementById("cnumber").value;
  msgcontentV = document.getElementById("msgcontent").value;
  date_timeV = document.getElementById("date_time").value;

  console.log(
    fullNameV,
    ageV,
    genderV,
    addressV,
    emailV,
    cnumberV,
    msgcontentV,
    date_timeV
  );
}
document.getElementById("insert").onclick = function () {
  readFrom();
  firebase
    .database()
    .ref("info/" + fullNameV)
    .set({
      Name: fullNameV,
      Age: ageV,
      Gender: genderV,
      Address: addressV,
      Email: emailV,
      Contact_number: cnumberV,
      Message: msgcontentV,
      Date_time: date_timeV,
    });

  alert("Data Inserted");
  document.getElementById("fullName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cnumber").value = "";
  document.getElementById("msgcontent").value = "";
  document.getElementById("date_time").value = "";
};

document.getElementById("search").onclick = function () {
  readFrom();
  firebase
    .database()
    .ref("info/" + fullNameV)
    .on("value", function (snap) {
      if (snap.exists()) {
        document.getElementById("fullName").value = snap.val().Name;
        document.getElementById("age").value = snap.val().Age;
        document.getElementById("gender").value = snap.val().Gender;
        document.getElementById("address").value = snap.val().Address;
        document.getElementById("email").value = snap.val().Email;
        document.getElementById("cnumber").value = snap.val().Contact_number;
        document.getElementById("msgcontent").value = snap.val().Message;
        document.getElementById("date_time").value = snap.val().Date_time;
      } else {
        alert("Data not found");
      }
    });
};

document.getElementById("update").onclick = function () {
  readFrom();

  firebase
    .database()
    .ref("info/" + fullNameV)
    .update({
      // Name: fullNameV,
      Age: ageV,
      Gender: genderV,
      Address: addressV,
      Email: emailV,
      Contact_number: cnumberV,
      Message: msgcontentV,
      Date_time: date_timeV,
    });
  alert("Data Update");
  document.getElementById("fullName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cnumber").value = "";
  document.getElementById("msgcontent").value = "";
  document.getElementById("date_time").value = "";
};
document.getElementById("delete").onclick = function () {
  readFrom();

  firebase
    .database()
    .ref("info/" + fullNameV)
    .remove();
  alert("Data Deleted");
  document.getElementById("fullName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("address").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cnumber").value = "";
  document.getElementById("msgcontent").value = "";
  document.getElementById("date_time").value = "";
};
