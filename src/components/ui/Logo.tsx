import Image from "next/image";

// Uses the original brand exports: dark wordmark on light, white wordmark on dark.
export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <span className="relative inline-flex">
      <Image src="/brand/logo-light.png" alt="ScaleVia" width={768} height={206} priority className={`${className} dark:hidden`} />
      <Image src="/brand/logo-dark.png" alt="ScaleVia" width={768} height={206} priority className={`${className} hidden dark:block`} />
    </span>
  );
}
