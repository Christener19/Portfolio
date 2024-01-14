document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact",
      {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(jsonData)
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status} ${response.statusText}`);
    }

    const responseText = await response.text();
    console.log("Response Text:", responseText);
  } catch (error) {
    console.error("Error:", error);
  }
    // Clear the input values
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    return false;
});

