import { NewsListT } from '@/types/news-list';
import Link from 'next/link';

export const NewsList = ({ news }: { news: NewsListT }) => (
  <ul className="news-list">
    {news.map(item => (
      <li key={item.id}>
        <Link href={`/news/${item.slug}`}>
          <img src={`/images/news/${item.image}`} alt={item.title} />
          <span>{item.title}</span>
        </Link>
      </li>
    ))}
  </ul>
);
