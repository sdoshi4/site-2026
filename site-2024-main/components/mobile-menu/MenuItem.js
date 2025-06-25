import { getStyles } from "@utilities/types";
import Link from "next/link";

export default function MenuItem({
  type,
  href,
  target,
  className,
  children,
  kill,
}) {
  const link = target ? (
    <a href={href} target={target}>
      {children}
    </a>
  ) : (
    <Link href={href} className="font-montserrat">{children}</Link>
  );

  return (
    <div
      className={`relative transition delay-150 duration-200 ease-in-out inline-grid items-center border border-transparent 
                  text-base font-medium h-10 w-screen text-center
                  ${getStyles(type)}
                  ${typeof href === "undefined" && `cursor-default`}
                  ${className}`}
      onClick={kill}
    >
      {link}
    </div>
  );
}
