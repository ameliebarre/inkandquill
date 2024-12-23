import Link from "next/link";
import { PropsWithChildren } from "react";

import { Button } from "../components/ui/button";

interface ButtonLinkProps {
  source: string;
}

export function ButtonLink({
  source,
  children,
}: PropsWithChildren<ButtonLinkProps>) {
  return (
    <Button asChild variant="link" className="w-fit p-0">
      <Link href={source} className="underline">
        {children}
      </Link>
    </Button>
  );
}
