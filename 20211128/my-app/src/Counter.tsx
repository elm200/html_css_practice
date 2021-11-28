import { VFC, useState } from "react";
import { Button, Card, Statistic } from "semantic-ui-react";
import "./Counter.css";

type Props = {
  title?: string;
  initialCount?: number;
  countObserver?: (n: number) => void;
};

const Counter: VFC<Props> = ({
  title = "count",
  initialCount = 0,
  countObserver = (n: number) => console.log(n),
}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => (c >= 1 ? c - 1 : 0));

  return (
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>{title}</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui three buttons">
          <Button color="red" onClick={() => countObserver(count)}>
            Set
          </Button>
          <Button color="green" onClick={increment}>
            +1
          </Button>
          <Button color="blue" onClick={decrement}>
            -1
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Counter;
