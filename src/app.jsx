import { RouterProvider } from 'react-router';
import Container from '@src/components/container'
import router from '@src/router';

const App = () => {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
};

export default App;
