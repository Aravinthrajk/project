fetch("ex.json")
  .then((response) => response.json())
  .then((data) => {
    // Use the JSON data here
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
