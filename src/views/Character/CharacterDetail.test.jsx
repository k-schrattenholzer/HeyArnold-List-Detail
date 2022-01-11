import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer} from "msw/node";
import { MemoryRouter, Route } from "react-router-dom";
import CharacterDetail from "./CharacterDetail.jsx";

const server = setupServer(
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters/:id', (req, res, ctx) => {
    return res(
      ctx.json({
        _id: 1,
        name: 'Katie',
        image: 'https://website.com/image/katie.jpg',
      })
    );
  })
);

describe('CharacterDetail', () => {

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('should render an individual character', async () => {

    render (
      <MemoryRouter initialEntries={['/character-detail/1']}>
        <Route path='/character-detail/:id'>
          <CharacterDetail />
        </Route>
      </MemoryRouter>
    );

    // screen.getByText(`loading character`);

    return waitFor(() => {
      screen.getByText('Katie');
    })

  })
})