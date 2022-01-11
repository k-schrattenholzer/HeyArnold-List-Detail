import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Character from './Character.jsx';

it('should render the characters component', () => {
  const testCharacter =
    {
      _id: 1,
      name: 'Grandma Gertie',
      image: 'https://website.com/image/gertie.jpg',
    }

  const { container } = render (
    <MemoryRouter>
      <Character character={testCharacter}/>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});