function openTab(evt, month) {
  let i = 0;

  let tabcontent = document.getElementsByClassName("tabcontent");

  for (i; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablinks");

  for (i; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(month).style.display = "block";
  evt.currentTarget.className += " active";
}
