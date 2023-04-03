class PostService {
  async getAllHeadlines(query: string | undefined) {
    const apiKey = 'JVqOkngyIlk_xeaCUIiv';
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
      console.log(error);
    }
  }

  unsibscribe() {
    console.log('You unsibscribed!');
  }
}

export default new PostService();
