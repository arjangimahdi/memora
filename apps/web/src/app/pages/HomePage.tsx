import { Button } from '@memora-ws/ui';

export function HomePage() {
  return (
    <main>
      <h1>Memora</h1>
      <Button onClick={() => alert('UI package works')}>Test Button</Button>
    </main>
  );
}

export default HomePage;
