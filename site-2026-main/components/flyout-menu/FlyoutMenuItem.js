import Link from "next/link";

export default function FlyoutMenuItem({ maxWidth, text, href, target, onClick, className }) {
  const internal = (
    <div
      className={`-m-3 p-3 block rounded-md hover:bg-gray-50 transition ease-in-out duration-150 ${
        typeof href === "undefined" ? `cursor-default` : `cursor-pointer`
      }`}
    >
      <p className={className || `text-base font-medium text-gray-900`} style={{width: maxWidth - 50}}>{text}</p>
    </div>
  );

  if (!href) {
    return (
      <div onClick={(e) => onClick(text)}>{internal}</div>
    )
  }

  if (target) {
    return (
      <a href={href} target={target}>
        {internal}
      </a>
    );
  }

  return <Link href={href}>{internal}</Link>;
}
