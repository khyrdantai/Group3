function showAlert() {
    var myText = "Did you think there would be somthing here?";
    alert (myText);
}

// open pop-up menu for add contact
function show_add_contact(){
  
  var static_body = document.getElementById("static_body");
  static_body.style = "opacity: .33;";

  var add_contact_form = document.getElementById("add_contact_form");
  add_contact_form.style = "display: block;"
}

function submit_form_data(){
  close_add_box();
}

// close pop up menu. right now this is more of a cancel than a submit
function close_add_box(){
  var add_contact_form = document.getElementById("add_contact_form");
  var static_body = document.getElementById("static_body");
  add_contact_form.style = "display: none;";
  static_body.style = "opacity: 1;";
}


