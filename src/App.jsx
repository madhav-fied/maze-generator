import { useEffect } from 'react';
import init, { greet } from '../maze-gen-wasm/pkg/maze_generator_rust';

const App = () => {
  useEffect(() => {
    init().then(() => {
      greet('Done');
    });
  }, []);

  return (
    <h1>
      Maze generator
    </h1>
  )
};

export default App;
