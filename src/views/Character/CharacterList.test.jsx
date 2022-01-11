import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter, Route } from 'react-router-dom';
import CharacterList from './CharacterList.jsx';

const server = setupServer(
  rest.get(
    'https://hey-arnold-api.herokuapp.com/api/v1/characters',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            _id: 1,
            name: 'Katie',
            image: 'https://website.com/image/katie.jpg',
          },
          {
            _id: 2,
            name: 'Other Name',
            image: 'https://website.com/image/other-name.jpg',
          },
        ])
      );
    }
  )
);

describe('CharacterList', () => {

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('should render a list of characters', async() => {
    render(
      <MemoryRouter initialEntries={['/character-list']}>
        <Route path={'/character-list'}>
          <CharacterList />
        </Route>
      </MemoryRouter>
    );
    
    await screen.findByText('loading up');
  });
   waitFor(() => {
    screen.getByText('Other Name');
  })
});
