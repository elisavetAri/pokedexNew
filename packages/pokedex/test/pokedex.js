import { render } from '@testing-library/react'
import Home from '../_app'
 
it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})