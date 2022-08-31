const form = document.querySelector('#searchForm');
let resultList = document.getElementById('results-container');

form.addEventListener('submit', async function (event) {
  clearPrevious();
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
      // create image element for each show result
      const img = document.createElement('IMG');
      img.src = result.show.image.medium;
      // add each img to resultList div
      resultList.appendChild(img);
    }
  }
};

const clearPrevious = () => {
  resultList.innerText = '';
};
