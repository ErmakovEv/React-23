import PostService from '../components/api/PostService';

it('test MainPage loading', async () => {
  jest.spyOn(global, 'fetch').mockImplementation(
    jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ articles: [{ title: 'test1' }, { title: 'test2' }] }),
      })
    ) as jest.Mock
  );
  const rate = await PostService.getAllHeadlines();
  expect(rate).toEqual([{ title: 'test1' }, { title: 'test2' }]);
});
