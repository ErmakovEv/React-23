async function getAllHeadlines() {
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines?country=us&' + 'apiKey=e81740fa41a6438fa9d69efd843769c2'
  );
  const json = await res.json();
  return json;
}

export default getAllHeadlines;
