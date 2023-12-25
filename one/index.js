function start(){

    
    // Fetch JSON data from the API
fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status code: ${response.status}`);
    }
    return response.json();
})
  .then(jsonData => {
    // Extract products from JSON data
    const products = jsonData.products || {};
    
    // Convert object to array for easier sorting
    const productsArray = Object.values(products);

    // Sort products by popularity in descending order
    const sortedProducts = productsArray.sort((a, b) => b.popularity - a.popularity);

    // Display the sorted products
    sortedProducts.forEach(product => {
      console.log(`Title: ${product.title}`);
      console.log(`Price: ${product.price}`);
      console.log(`Popularity: ${product.popularity}`);
      console.log("----------------------");
    });
  })
  .catch(error => {
    // Print an error message if the request was not successful
    console.error(error.message);
  });
  
}