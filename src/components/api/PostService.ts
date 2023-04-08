class PostService {
  async getAllHeadlines(query: string | undefined) {
    const apiKey = 'M8tj8NNYOrc0WB5dsIeE';
    query = query ? `?name=${query}` : '';
    try {
      const res = await fetch(`https://the-one-api.dev/v2/character${query}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      const json = await res.json();
      console.log(json);
      return json.docs;
    } catch (error) {
      console.log('Error', error);
    }
  }

  unsibscribe() {
    console.log('You unsibscribed!');
  }
}

export default new PostService();
