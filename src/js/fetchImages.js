
import axios from 'axios';
async function fetchImages(inputValue, pageNr) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=31731640-63415b264c7abe0734c9208e1&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchImages };
