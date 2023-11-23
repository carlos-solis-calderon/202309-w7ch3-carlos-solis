const serverUrl = 'https:localhost/2700';
const handleSubmit = async (event) => {
  event.preventDefault();
  const form = event.target;
  const userLogin = {
    email: form.elements.namedItem('email').value,
    passwd: form.elements.namedItem('passwd').value,
  };
  console.log(userLogin);
  const url = serverUrl + '/users/login';
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(userLogin),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const result = await response.json();
  console.log(result);
};

const handleGet = async (event) => {
  event.preventDefault();
  console.log(result.token);

  const url = serverUrl + '/notes';
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + result.token,
    },
  });
  const result = await.response.json()
  console.log(result)
};

document.querySelector('form').addEventListener('submit', handleSubmit);
document.querySelector('form').addEventListener('click', handleGet);
