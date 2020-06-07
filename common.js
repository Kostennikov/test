const DateTime = luxon.DateTime,
elem = document.querySelector("#data");
elem.innerText = DateTime.local().setLocale('en-GB').toLocaleString();
console.log( DateTime.local().setLocale().startOf('week').toISO() );