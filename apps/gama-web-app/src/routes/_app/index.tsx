import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/')({
  component: () => <div>Hello /_authenticated/!</div>
})