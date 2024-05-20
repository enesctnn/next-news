import { Modal } from '@/components/ui/modal';
import { getNewsBySlug } from '@/lib/news';
import { InterceptedImageT } from '@/types/InterceptedImage';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function InterceptedImagePage({
  params: { slug },
}: InterceptedImageT) {
  const selectedNews = getNewsBySlug(slug);
  if (!selectedNews) notFound();
  
  return (
    <Modal>
      <div className="fullscreen-image">
        <Image
          src={`/images/news/${selectedNews.image}`}
          alt={selectedNews.title}
          fill
        />
      </div>
    </Modal>
  );
}
