import { useState } from "react";

function CreateCards() {
  const [cards, setCards] = useState([]);

  const handleUpload = (event) => {
    event.preventDefault();

    const fileInput = document.getElementById("fileInput");
    const nameInput = document.getElementById("nameInput");
    const priceInput = document.getElementById("priceInput");
    const descriptionInput = document.getElementById("descriptionInput");

    const files = fileInput.files;

    const newCards = Array.from(files).map((file) => {
      const imageUrl = URL.createObjectURL(file);

      return {
        title: nameInput.value || file.name,
        description: descriptionInput.value || "Default description",
        price: parseFloat(priceInput.value) || 0,
        image: imageUrl,
      };
    });

    setCards((prevCards) => [...prevCards, ...newCards]);

    // Reset form fields
    fileInput.value = "";
    nameInput.value = "";
    priceInput.value = "";
    descriptionInput.value = "";
  };

  return (
    <div className="uploadPageContainer">
      <div className="uploadPage">
        <h1>Upload Page</h1>
        <form>
          <label htmlFor="fileInput">Select Image:</label>
          <input type="file" id="fileInput" accept="image/*" multiple />

          <label htmlFor="nameInput">Product Name:</label>
          <input type="text" id="nameInput" />

          <label htmlFor="priceInput">Product Price:</label>
          <input type="number" id="priceInput" />

          <label htmlFor="descriptionInput">Product Description:</label>
          <textarea id="descriptionInput" />

          <button onClick={handleUpload}>Upload</button>
        </form>

        <div className="cardContainer">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <p>Price: ${card.price}</p>
              <img src={card.image} alt={card.title} />
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateCards;
