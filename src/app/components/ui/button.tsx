import { ReactNode } from "react";

export default function Button({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <button className={className}>{children}</button>;
}
