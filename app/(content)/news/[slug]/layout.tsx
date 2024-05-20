import { NewsDetailLayoutT } from '@/types/NewsDetailLayout';

export default function NewsDetailLayout({
  children,
  modal,
}: NewsDetailLayoutT) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
