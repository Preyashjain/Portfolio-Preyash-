import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-[13px] text-accent">404</p>
      <h1 className="mt-3 text-[26px] font-semibold tracking-tight text-foreground">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-2 max-w-[380px] text-[15px] text-muted-foreground">
        The page you&apos;re looking for was moved or never existed.
      </p>
      <Link href="/" className={buttonVariants({ className: "mt-7" })}>
        Back to home
      </Link>
    </div>
  );
}
