import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
} from '@memora-ws/ui';

export function HomePage() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold leading-tight text-neutral-900">
          Memora
        </h1>
        <p className="text-sm leading-normal text-muted">
          Design system preview driven by shared tokens.
        </p>
      </header>

      <Card>
        <CardTitle>Buttons</CardTitle>
        <CardBody>Variants and sizes resolved from the token theme.</CardBody>
        <CardFooter>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger" size="sm">
            Delete
          </Button>
          <Button disabled>Disabled</Button>
        </CardFooter>
      </Card>

      <Card elevated padding="sm">
        <CardTitle>Badges</CardTitle>
        <CardBody>Semantic tones for note states.</CardBody>
        <CardFooter>
          <Badge>Draft</Badge>
          <Badge tone="primary">Shared</Badge>
          <Badge tone="success">Saved</Badge>
          <Badge tone="danger" size="md">
            Trashed
          </Badge>
        </CardFooter>
      </Card>
    </section>
  );
}

export default HomePage;
