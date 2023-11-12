'use client';
import { useRouter } from 'next/navigation';
import { Button } from 'react-daisyui';

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        color="primary"
        onClick={() => {
          router?.push('/recommendations');
        }}
      >
        Dari Home ke Rekomendasi
      </Button>
    </main>
  );
}
