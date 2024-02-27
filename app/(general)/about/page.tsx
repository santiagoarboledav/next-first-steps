import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO description',
  keywords: ['about', 'acerca de']
}

export default function About() {
    return (
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        <span className="text-5xl">About</span>
      </main>
    );
  }
  