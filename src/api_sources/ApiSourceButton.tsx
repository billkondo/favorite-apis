import { FC } from 'react';
import { Button } from 'antd';

type Props = {
  name: string;
  onClick: () => void;
};
const ApiSourceButton: FC<Props> = ({ name, onClick }) => {
  return (
    <Button size="large" type="primary" onClick={onClick}>
      {name}
    </Button>
  );
};

export default ApiSourceButton;
