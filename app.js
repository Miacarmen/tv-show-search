const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  console.log('Submitted!');
  const searchTerm = form.elements.query.value;
  
  const queryUrl = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;

  const res = await axios.get(queryUrl);
  console.log(res.data);
});
