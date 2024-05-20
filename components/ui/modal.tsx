'use client';

import { ModalT } from '@/types/modal';
import { useRouter } from 'next/navigation';

export function Modal({ children }: ModalT) {
  const router = useRouter();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        {children}
      </dialog>
    </>
  );
}
