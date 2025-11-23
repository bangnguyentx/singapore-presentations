typescript
import { slides } from '@/data/slides';
import SlideContainer from '@/components/SlideContainer';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return slides.map((slide) => ({
    slug: slide.slug,
  }));
}

export default function SlidePage({ params }: { params: { slug: string } }) {
  const slide = slides.find(s => s.slug === params.slug);
  
  if (!slide) {
    notFound();
  }

  return <SlideContainer initialSlug={params.slug} />;
}
