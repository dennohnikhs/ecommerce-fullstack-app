import { ReactNode } from "react";

export default function PageHeader({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="text-4xl mb-4">{children}</div>
    </>
  );
}
