const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  console.log('Submitted!');
  const searchTerm = form.elements.query.value;
  // config gets added to end of query string
  const config = { params: { q: searchTerm } };

  const res = await axios.get('https://api.tvmaze.com/search/shows', config);
  postImages(res.data);
  // reset search form
  form.elements.query.value = '';
});

const postImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('IMG');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
