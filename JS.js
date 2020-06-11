function showtext(id)
{
  document.getElementById(id).style.display = "inline-block"
}

function show(id)
{
    var img = document.getElementById(id);
    if(img.style.display == "inline-block")
    {
        document.getElementById(id).style.display = "none";
    }
    else if(document.getElementById(id).style.display == "none")
    {
        document.getElementById(id).style.display = "inline-block";
    }
}


/* DOM EVENT */
function mDown(obj) {
  obj.style.backgroundColor = "red";
  obj.innerHTML = "Mouse up";
}

function mUp(obj) {
  obj.style.backgroundColor="green";
  obj.innerHTML="Thank you";
}

/* DOM Form */
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Username can't be empty！");
    return false;
        }
}

/* DOM AJAX */
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let APOD = JSON.parse(this.responseText);
      document.getElementById("ajax").innerHTML = 
      `Date:${APOD.date}<br>
      <img src=${APOD.url}  width="540px" height="540px"/><br>
      Explanation:${APOD.explanation}
      `;
    }
  }
  xhttp.open("GET", "https://api.nasa.gov/planetary/apod?api_key=yIsFLQnxATVTwJ0ehQfKKfoxGL8cs0SQvJ4NDMIs", true);
  xhttp.send();
  }
  