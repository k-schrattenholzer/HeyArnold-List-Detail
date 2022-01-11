import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Characters from './Characters.jsx';

it('should render the characters component', () => {
  const testCharacters = [
    {
      _id: 1,
      name: 'Grandma Gertie',
      image: 'https://website.com/image/gertie.jpg',
    },
    {
      _id: 2,
      name: 'Arnie',
      image: 'https://website.com/image/arnie.jpg',
    },
    {
      _id: 3,
      name: 'Stella Shortman',
      image: 'https://website.com/image/Stella-Shortman.jpg',
    },
  ]
  const { container } = render (
    <MemoryRouter>
      <Characters characterList={testCharacters}/>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});