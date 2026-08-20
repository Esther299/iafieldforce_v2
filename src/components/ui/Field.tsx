import type {
  InputHTMLAttributes,
  PropsWithChildren,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "../../lib/cn";

const controlBase =
  "w-full rounded-xl border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none ring-brand-500/30 placeholder:text-ink-400 focus:ring-2";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(controlBase, "h-10", className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(controlBase, "min-h-24 py-2", className)}
      {...props}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(controlBase, "h-10", className)} {...props}>
      {children}
    </select>
  );
}

export function Label({ children }: PropsWithChildren) {
  return (
    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
      {children}
    </label>
  );
}
