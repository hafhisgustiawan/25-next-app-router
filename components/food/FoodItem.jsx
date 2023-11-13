import { Button } from 'react-daisyui';

const FoodItem = ({ user }) => {
  const clickHandler = () => {
    window.alert('Click button');
  };

  return (
    <Button color="primary" onClick={clickHandler}>
      {user?.name}
    </Button>
  );
};

export default FoodItem;
