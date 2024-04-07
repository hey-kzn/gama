import { createFileRoute } from '@tanstack/react-router';
import { RegisterPage } from '@/pages/auth/RegisterPage.tsx';

export const Route = createFileRoute('/_public/register')({ component: RegisterPage });
