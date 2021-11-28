import { VFC } from "react";
import { Button, Card, Icon, Statistic } from "semantic-ui-react";
import "./Timer.css";

type Props = {
  limit?: number;
  timeLeft?: number;
  isPrime?: boolean;
  reset?: () => void;
};

const Timer: VFC<Props> = ({
  limit = 60,
  timeLeft = 0,
  isPrime = false,
  reset = () => undefined,
}) => (
  <Card>
    <div className="ui two statistics">
      <Statistic className="number-board">
        <Statistic.Label>limit</Statistic.Label>
        <Statistic.Value>{limit}</Statistic.Value>
      </Statistic>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
        <Statistic.Value className={isPrime ? "prime-number" : undefined}>
          {timeLeft}
        </Statistic.Value>
      </Statistic>
    </div>
    <Card.Content>
      <Button color="red" fluid onClick={reset}>
        <Icon name="redo" />
        Reset
      </Button>
    </Card.Content>
  </Card>
);

export default Timer;
