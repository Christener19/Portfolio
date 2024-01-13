document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const jsonData = Object.fromEntries(formData.entries());

  fetch('https://christener.vercel.app/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jsonData)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});
