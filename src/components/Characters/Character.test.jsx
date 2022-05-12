import { render } from '@testing-library/react';
import Character from './Character.jsx';

it('should render the characters component', () => {
  const testCharacter =
    {
      _id: 1,
      name: 'Grandma Gertie',
      image: 'https://website.com/image/gertie.jpg',
    }

  const { container } = render (
      <Character character={testCharacter}/>
  );

  expect(container).toMatchSnapshot();
});