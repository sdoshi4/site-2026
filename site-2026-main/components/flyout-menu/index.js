import FlyoutMenuItem from "./FlyoutMenuItem";

export default function ButtonMenu({
  maxWidth,
  menuItems,
  menuIsOpen,
  zeroTop,
  className
}) {
  return (
    <div
      className={`absolute z-10 left-1/2 transform ${zeroTop
          ? "top-0 pt-3 -translate-x-1/2"
          : "top-16 mt-3 -translate-x-3/4 rounded-lg"
        } w-screen sm:px-0 transition delay-150 duration-200  ${menuIsOpen
          ? `opacity-100 pointer-events-auto `
          : `opacity-0 ${zeroTop && "pointer-events-none"}`
        }`}
      style={{ maxWidth: maxWidth }}
    >
      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-x-hidden max-h-60">
        <div className="relative grid gap-6 bg-white px-6 py-6 sm:gap-8">
          {menuItems.map(({ text, href, target, onClick }) => (
            <FlyoutMenuItem
              maxWidth={maxWidth}
              text={text}
              href={href}
              target={target}
              onClick={onClick}
              className={className}
              key={`${href}-${text}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
