// You may wish to find an effective randomizer function on MDN.

const { urlencoded } = require("express");

function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortFunction(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {
      if(document.querySelector('.flex-inner')) {
          document.querySelector('.flex-inner').remove();
      }
      const new_array = range(10);
      const country_arr = new_array.map(() => {
        const num = getRandomIntInclusive(0,243);
        return fromServer[num];
      });

      const back_arr = country_arr.sort((a, b) => sortByKey(a, b, 'name'));
      const unordered = document.createElement('ul');
      unordered.className = 'flex-inner';
      $('form').prepend(ul);
      console.log('fromServer', fromServer);

      back_arr.forEach((el,i) => {
        const li = document.createElement('li');
        $(li).append(`input type="checkbox" value=$(el.code) id=$(el.code) />`);
        $(li).append(`label for=$(el.code)>$(el.name)</label>`);
        $(li).append(li);
    });
    .catch((err) => console.log(err));
});