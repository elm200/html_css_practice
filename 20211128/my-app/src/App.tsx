import { VFC, useState } from 'react';
import Timer from 'containers/Timer';
import Counter from './Counter';
import './App.css';

const App: VFC = () => {
  const [limit, setLimit] = useState(60);

  return (
    <div className="container wrapper">
      <Counter title="limit" initialCount={limit} countObserver={(c) => { setLimit(c) }} />
      <Timer limit={limit} />
    </div>
  );
}

export default App;
