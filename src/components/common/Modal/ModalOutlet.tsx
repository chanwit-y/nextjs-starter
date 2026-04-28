"use client";

import { useCallback, useState, useEffect } from "react";
import Modal from "./Modal";
import { useModal, type ModalEntry } from "./ModalContext";

export default function ModalOutlet() {
  const { modals, closeModal } = useModal();
  const [closingIds, setClosingIds] = useState<Set<string>>(new Set());
  const [rendered, setRendered] = useState<ModalEntry[]>([]);

  useEffect(() => {
    const currentIds = new Set(modals.map((m) => m.id));
    const removed = rendered.filter((m) => !currentIds.has(m.id));

    if (removed.length > 0) {
      setClosingIds((prev) => {
        const next = new Set(prev);
        removed.forEach((m) => next.add(m.id));
        return next;
      });

      const timer = setTimeout(() => {
        setClosingIds((prev) => {
          const next = new Set(prev);
          removed.forEach((m) => next.delete(m.id));
          return next;
        });
        setRendered(modals);
      }, 260);

      return () => clearTimeout(timer);
    }

    setRendered(modals);
  }, [modals]);

  const handleClose = useCallback(
    (id: string) => {
      closeModal(id);
    },
    [closeModal],
  );

  const all = [...rendered, ...modals.filter((m) => !rendered.some((r) => r.id === m.id))];
  const unique = all.filter((m, i, arr) => arr.findIndex((x) => x.id === m.id) === i);

  return (
    <>
      {unique.map((modal) => (
        <Modal
          key={modal.id}
          open={!closingIds.has(modal.id) && modals.some((m) => m.id === modal.id)}
          onClose={() => handleClose(modal.id)}
          size={modal.size}
          title={modal.title}
          hideCloseButton={modal.hideCloseButton}
          closeOnBackdropClick={modal.closeOnBackdropClick}
          closeOnEscape={modal.closeOnEscape}
          footer={modal.footer}
        >
          {modal.content}
        </Modal>
      ))}
    </>
  );
}
