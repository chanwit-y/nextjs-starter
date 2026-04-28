"use client";

import { useEffect, useRef, useState, useCallback, type ReactNode, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import "./Modal.css";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl" | "fullscreen";
  title?: ReactNode;
  hideCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  footer?: ReactNode;
  children?: ReactNode;
}

const ANIMATION_MS = 250;

export default function Modal({
  open,
  onClose,
  size = "md",
  title,
  hideCloseButton = false,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  footer,
  children,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    } else if (mounted) {
      setClosing(true);
      setVisible(false);
      const timer = setTimeout(() => {
        setMounted(false);
        setClosing(false);
      }, ANIMATION_MS);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, closeOnEscape, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (visible && panelRef.current) {
      panelRef.current.focus();
    }
  }, [visible]);

  const handleBackdropClick = useCallback(
    (e: MouseEvent) => {
      if (closeOnBackdropClick && e.target === e.currentTarget) {
        onClose();
      }
    },
    [closeOnBackdropClick, onClose],
  );

  if (!mounted) return null;

  const backdropClass = [
    "modal-backdrop",
    visible && !closing ? "modal-backdrop--open" : "",
    closing ? "modal-backdrop--closing" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const panelClass = ["modal-panel", `modal-panel--${size}`].join(" ");

  return createPortal(
    <div className={backdropClass} onClick={handleBackdropClick} role="presentation">
      <div
        ref={panelRef}
        className={panelClass}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        {(title || !hideCloseButton) && (
          <div className="modal-header">
            {title ? <h2>{title}</h2> : <span />}
            {!hideCloseButton && (
              <button
                type="button"
                className="modal-close-btn"
                aria-label="Close"
                onClick={onClose}
              >
                <X size={18} />
              </button>
            )}
          </div>
        )}

        <div className="modal-body">{children}</div>

        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>,
    document.body,
  );
}
