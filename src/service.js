const URL = 'http://opentable.herokuapp.com/api/restaurants';

export const get = (city, page = false) => {
  return new Promise((resolve, reject) => {
    const pagination = page ? `&page=${page}` : '';
    fetch(`${URL}?city=${city}${pagination}`).then(response => {
      if (response.status !== 200) {
        console.error('Something wrong with the Response');
        reject(response);
        return;
      }
      resolve(response.json());
    });
  });
}