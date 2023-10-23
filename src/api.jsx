// export function fetchData() {
//     return fetch('https://dummyjson.com/products')
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => data.products)
//       .catch((error) => {
//         throw new Error('Error fetching data: ' + error.message);
//       });
//   }

export function fetchData() {
    return fetch('https://dummyjson.com/products')
      .then((response) => response.json()
      .then((data => {
        return data.products
      }
      ))
  )}