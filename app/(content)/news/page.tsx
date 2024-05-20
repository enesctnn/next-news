import { NewsList } from '@/components/news-list';
import { getAllNews } from '@/lib/news';
import { Metadata } from 'next';

const DUMMY_NEWS = getAllNews();

export const metadata: Metadata = {
  title: 'News Page',
  description: 'Display Available News',
};

function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}

export default NewsPage;
