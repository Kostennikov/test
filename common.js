const DateTime = luxon.DateTime,
elem = document.querySelector("#data");
elem.innerText = DateTime.local().setLocale('en-GB').toLocaleString();
console.log( DateTime.local().setLocale().startOf('week').toISO() );

axios.get('https://api.github.com/users/mzabriskie')
.then(function (user) {
  document.getElementById('useravatar').src = user.data.avatar_url;
  document.getElementById('username').innerHTML = user.data.name;
});
