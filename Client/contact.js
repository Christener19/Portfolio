document.querySelector('form').addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData.entries());

    const response = await fetch('https://christener.vercel.app/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData)
    });

    const responseText = await response.text();
    console.log('Response:', responseText);

    if (response.ok) {
      const responseData = JSON.parse(responseText);
      console.log('Parsed Data:', responseData);
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
