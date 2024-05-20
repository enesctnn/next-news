import { ArchiveLayoutT } from '@/types/ArchiveLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Archive',
  description: 'Display Filtered News',
};

export default function ArchiveLayout({ archive, latest }: ArchiveLayoutT) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
