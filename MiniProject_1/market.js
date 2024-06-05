let market = [
    { id: 1, title: 'California Elephant Ears', description: "I am selling my California Elephant Ears. I am also open to trading.", location: "Fairfax, VA", price: "$50"},
    { id: 2, title: 'Peace Lily', description: "Looking to trade propagations.", location: "Arlington, VA", price: "N/A"},
    { id: 3, title: 'Spider Plant', description: "Plant for sale!", location: "Richmond, VA", price: "$20"}
  ];
  
  function displaymarket() {
    const marketContainer = document.getElementById("marketContainer");
    marketContainer.innerHTML = "";
  
    market.forEach((item) => {
      const marketElement = document.createElement("div");
      marketElement.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p><p>${item.location}</p><p>${item.price}</p>`;
      marketElement.style.border ="1px solid green";
      marketElement.style.margin ="10px";
      marketElement.style.padding = "10px";
      marketContainer.appendChild(marketElement);
    });
  }
  
  function addmarket() {
      const title = document.getElementById('marketTitle').value;
      const description = document.getElementById('marketdescription').value;
      const location = document.getElementById('marketLocation').value;
      const price = document.getElementById('marketPrice').value;
      const newId = market.length + 1;
      market.push({id: newId, title: title, description: description, location: location, price:price});
      document.getElementById('marketTitle').value = '';
      document.getElementById('marketdescription').value = '';
      document.getElementById('marketLocation').value = '';
      document.getElementById('marketPrice').value = '';
      displaymarket();
  }

  window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
  });
  
  let interval = setInterval(displaymarket, 5000);

  
  displaymarket();