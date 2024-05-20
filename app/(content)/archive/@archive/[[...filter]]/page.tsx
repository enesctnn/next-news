import { NewsList } from '@/components/news-list';
import { NavLink } from '@/components/ui/nav-link';
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';
import { FilteredNewsT } from '@/types/FilteredNews';
import { NewsListT } from '@/types/news-list';

let links = getAvailableNewsYears();

export default function FilteredNewsPage({
  params: { filter },
}: FilteredNewsT) {
  let selectedYear = filter?.[0];
  let selectedMonth = filter?.[1];

  let filteredNews: NewsListT | undefined;
  let newsContent = <p>No news found for the selected period.</p>;

  if (selectedYear && !selectedMonth) {
    links = getAvailableNewsMonths(+selectedYear);
    filteredNews = getNewsForYear(+selectedYear);
  }

  if (selectedMonth && selectedYear) {
    filteredNews = getNewsForYearAndMonth(+selectedYear, +selectedMonth);
  }

  if (filteredNews && filteredNews.length > 0) {
    newsContent = <NewsList news={filteredNews} />;
  }

  if (
    selectedYear &&
    (!getAvailableNewsYears().includes(+selectedYear) ||
      (selectedMonth &&
        !getAvailableNewsMonths(+selectedYear).includes(+selectedMonth)))
  ) {
    throw new Error('Invalid filter.');
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map(link => (
              <li key={link}>
                <NavLink
                  href={
                    selectedYear
                      ? `/archive/${selectedYear}/${link}`
                      : `/archive/${link}`
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
