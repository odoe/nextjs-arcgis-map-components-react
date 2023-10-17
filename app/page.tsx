import dynamic from 'next/dynamic';

const MappingNoSSR = dynamic(() => import('@/components/mapping'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MappingNoSSR />
    </main>
  );
}
