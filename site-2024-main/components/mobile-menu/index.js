import MenuItem from "./MenuItem";

export default function MobileMenu({ menuOpen, items, kill }) {
  return (
    <nav
      className={`block fixed top-24 z-20 lg:hidden bg-gray-100 mb-10 transition-all ${menuOpen ? "h-full opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      {items.map(({ type, text, href, target }) => (
        <MenuItem type={type} href={href} target={target} kill={kill} key={`${text}-${href}`}>
          {text}
        </MenuItem>
      ))}
    </nav>
  );
}
