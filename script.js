function getuserinfo() {
  let requist = new XMLHttpRequest();

  requist.addEventListener("load", function () {
    let mosuliinfotext = this.responseText;
    let mosuliinfojs = JSON.parse(mosuliinfotext);
    console.log(mosuliinfojs);

    let ul = document.createElement("ul");

    mosuliinfojs.data.forEach(function(item){
      let li = document.createElement("li");

      li.textContent = `NAME: ${item.first_name}, SURNAME: ${item.last_name}, EMAIL: ${item.email}`;
      ul.appendChild(li);
    });

    document.getElementById('User-Info').appendChild(ul)
  });

  requist.open('GET','https://reqres.in/api/users?page=2');
  requist.send();
} 

getuserinfo()