// You may wish to find an effective randomizer function on MDN.
function getRandomIntInclusive(min, max) {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1 + 1) + min1);
}

//function getRandomInt(min, max) {
 // return Math.floor(Math.random() * Math.floor(max) - Math.floor(min)) + Math.floor(min);
//}
function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortByKey(a, b, key) {
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
      if (document.querySelector('.flex-inner')) {
        document.querySelector('.flex-inner').remove();
      }
      const new_array = range(10);
      const country_arr = new_array.map(() => {
        const numb = getRandomIntInclusive(0, 243);
        return fromServer[numb];
      });

      const back_arr = country_arr.sort((a, b) => sortByKey(b, a, 'name'));
      const ul = document.createElement('ul');
      ul.className = 'flex-inner';
      $('form').prepend(ul);
      //console.log('fromServer', fromServer);

      back_arr.forEach((el, i) => {
        const li = document.createElement('li');
        $(li).append(`<input type="checkbox" value=${el.code} id=${el.code} />`);
        $(li).append(`<label for=${el.code}>${el.name}</label>`);
        $(ul).append(li);
      });
    })
    .catch((err) => console.log(err));
});