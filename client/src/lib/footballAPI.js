// const getPosts = () => {
//   var obj = {
//     link: 'https://api.producthunt.com/v1/posts',
//     object: {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer ' + this.state.clientToken,
//         'Host': 'api.producthunt.com'
//       }
//     }
//   }
//   fetch(api.posts.link, obj)
//     .then((response) => response.json())
//     .then((responseData) => {
//       console.log(responseData);
//     })
//     .done();
// }