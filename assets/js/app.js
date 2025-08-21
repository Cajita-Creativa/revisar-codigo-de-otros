const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // no existe una etiqueta name, es una clase
const $b = document.querySelector('.blog'); // aqui le hacía referencia a un id y es clase en el html
const $l = document.querySelector('.location');

//Le hace falta la funcion asyncrona con el try y catch
async function displayUser(username) {
  try {
      $n.textContent = 'cargando...';
      const response = await fetch(`${usersEndpoint}/${username}`);
      const data = await response.json(); //se pide data y no estaba declarada
      console.log(data);
      $n.textContent = '${data.name}';
      $b.textContent = '${data.blog}';
      $l.textContent = '${data.location}';
    } catch (err) {
    handleError(err);
  }
}

    function handleError(err) {
      console.log('OH NO!');
      console.log(err);
      $n.textContent = `Algo salió mal: ${err}` //se comio el $ de la constante
    }

  displayUser('stolinski').catch(handleError);