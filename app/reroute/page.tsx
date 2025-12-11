import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting...',
};

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function ReroutePage({ searchParams }: PageProps) {
  const to = searchParams.to as string;
  const key = searchParams.key as string;

  if (to === 'emed2025') {
    const redirectUrl = key
      ? `/personal/unlisted/emed2025?key=${key}`
      : '/personal/unlisted/emed2025';

    redirect(redirectUrl);
  }

  // If 'to' parameter is not recognized, redirect to home
  redirect('/');
}