import { createFileRoute } from '@tanstack/react-router';

const Component = () => {
  return <div>Dashboard</div>;
};

export const Route = createFileRoute('/_app/dashboard/_layout/dashboard')({});
