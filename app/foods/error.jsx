'use client';
import { Button } from 'react-daisyui';

const FoodError = ({ error, reset }) => {
  return (
    <main className="flex flex-col items-center justify-between p-24 space-y-6">
      <p>{error?.toString() || 'Theme is an error!'}</p>
      <Button onClick={reset} color="primary" className="w-fit">
        Reset
      </Button>
    </main>
  );
};

export default FoodError;
