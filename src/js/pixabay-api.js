import axios from 'axios';

const API_KEY = '42527564-74a028b633bc3aa43e87a48a1'; // заміни на свій ключ
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
