import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting...',
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ReroutePage({ searchParams }: PageProps) {
  const { to, key } = await searchParams;

  if (to === 'emed2025') {
    const redirectUrl = key
      ? `/personal/unlisted/emed2025?key=${key}`
      : '/personal/unlisted/emed2025';

    redirect(redirectUrl);
  }

  // If 'to' parameter is not recognized, redirect to home
  redirect('/');
}