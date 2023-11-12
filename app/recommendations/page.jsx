'use client';
import { useRouter } from 'next/navigation';
import { Button } from 'react-daisyui';

const Root = () => {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        color="primary"
        onClick={() => {
          router?.push('/foods');
        }}
      >
        Dari Rekomendasi ke Foods
      </Button>
    </main>
  );
};

export default Root;
