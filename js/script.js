
var Actuel = "home";
function openit(id)
{
    document.getElementById("principale").style.maxHeight = "0";
    setTimeout(function() {
      document.getElementById(Actuel).style.display = "none";
      document.getElementById(id).style.display = "block";
      document.getElementById("principale").style.maxHeight = "1000";
      Actuel = id;
    }, 600);
}

var done = false;
function openContact() 
{
    openit('contact');
    setTimeout(function() {
        if(!done)
        {
          var mapOptions = {
              center: new google.maps.LatLng(48.60644,2.302212),
              zoom: 10,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              disableDefaultUI: true,
              minZoom: 6
            };
            map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
             var markerPosition = new google.maps.Marker({
               animation: google.maps.Animation.DROP,
                   position: new google.maps.LatLng(48.60644,2.302212),
               map: map,
          });
            done = true;
        }
    }, 700);
}

function envoyer()
{
  var xhr = new XMLHttpRequest();
          xhr.open('POST', 'contactpost.php');
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() { 

              if (xhr.readyState == 4 && xhr.status == 200) { 

                  document.getElementById("resultat").innerHTML =  xhr.responseText;

              }
          }
      xhr.send('email=' + document.getElementById('email').value + '&message=' + document.getElementById('message').value);
      alert("Thank You!");
}