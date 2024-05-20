import { getNewsBySlug } from '@/lib/news';
import { ImageT } from '@/types/Image';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function ImagePage({ params: { slug } }: ImageT) {
  const selectedNews = getNewsBySlug(slug);
  if (!selectedNews) notFound();
  return (
    <div className="fullscreen-image">
      <Image
        src={`/images/news/${selectedNews.image}`}
        alt={selectedNews.title}
        fill
      />
    </div>
  );
}
