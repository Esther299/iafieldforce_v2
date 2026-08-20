import type { PropsWithChildren, ReactNode } from "react";
import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/Button";

function useEscapeToClose(isOpen: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  actions,
  className,
}: PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  actions?: ReactNode;
  className?: string;
}>) {
  useEscapeToClose(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-transparent backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative z-10 my-auto w-full max-w-md transform rounded-2xl bg-white p-6 shadow-2xl transition-all duration-300",
          className,
        )}
      >
        <div className="flex items-center justify-between gap-3 border-b border-ink-100 pb-3">
          {title ? (
            <h2 className="text-lg font-bold text-navy">{title}</h2>
          ) : (
            <div />
          )}
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-700"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-4">{children}</div>

        {actions ? (
          <div className="mt-6 flex flex-wrap justify-end gap-2">{actions}</div>
        ) : null}
      </div>
    </div>
  );
}

/** Barra de acciones estándar de los formularios en modal. */
export function ModalActions({
  onCancel,
  submitLabel,
  cancelLabel = "Cancelar",
}: {
  onCancel: () => void;
  submitLabel: string;
  cancelLabel?: string;
}) {
  return (
    <div className="flex justify-end gap-2 pt-2">
      <Button type="button" variant="ghost" onClick={onCancel}>
        {cancelLabel}
      </Button>
      <Button type="submit">{submitLabel}</Button>
    </div>
  );
}

export function Drawer({
  isOpen,
  onClose,
  title,
  children,
  action,
}: PropsWithChildren<{
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  action?: ReactNode;
}>) {
  useEscapeToClose(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-ink-900/50 transition-opacity duration-350"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-sm transform bg-white opacity-100 shadow-2xl transition-all duration-350">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-3 border-b border-ink-100 px-6 py-4">
            {title ? (
              <h2 className="text-lg font-semibold text-navy">{title}</h2>
            ) : null}
            <button
              onClick={onClose}
              className="rounded-lg p-1 text-ink-500 transition-colors hover:bg-ink-100"
              aria-label="Close drawer"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>
          {action ? (
            <div className="border-t border-ink-100 px-6 py-4">{action}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function ConfirmDialog({
  isOpen,
  onClose,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  isDangerous = false,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  isDangerous?: boolean;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      {description && <p className="text-sm text-ink-600">{description}</p>}
      <div className="mt-4 flex justify-end gap-2">
        <Button variant="ghost" onClick={onClose}>
          {cancelText}
        </Button>
        <Button
          variant={isDangerous ? "danger" : "primary"}
          onClick={() => {
            onConfirm();
            onClose();
          }}
        >
          {confirmText}
        </Button>
      </div>
    </Modal>
  );
}
