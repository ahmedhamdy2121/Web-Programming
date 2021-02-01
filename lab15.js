$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var userid = $("#userid").val();
    
  fetch('https://jsonplaceholder.typicode.com/users/' + userid)
    .then(response => response.json())
    .then(json => displayGuests(json))

  fetch('https://jsonplaceholder.typicode.com/posts/' + userid)
    .then(response => response.json())
    .then(json => displayPosts(json))
}

function displayGuests(data) {
    $("#dataList").html("name: " + data.name + "<br />" 
      + "email: " + data.email + "<br />"
      + "address: " + JSON.stringify(data.address) + "<br />");
}

function displayPosts(data) {
    $("#posts").html(JSON.stringify(data));
}
