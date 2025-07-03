import { Fragment, useState } from "react";
import Button from "@/button";
import Link from "next/link";
import MobileMenu from "@/mobile-menu";
import { useRouter } from "next/navigation";
 
export default function Header({ headerItems }) {
  // IMPLEMENT SIGN OUT WITH MIDDLEWARE USING FIREBASE

  const [menuOpen, setMenuOpen] = useState(false);
  const { isSignedIn, isLoaded } = { isSignedIn: true, isLoaded: true }; // NEED TO FIX WITH MIDDLEWARE
  const router = useRouter();

  // hardcore js right here
  let mobileMenu = [];
  headerItems.forEach((item) => {
    if (typeof item.menuItems === "undefined") {
      mobileMenu.push(item);
    } else {
      if (item.href && !item.noMobile)
        mobileMenu.push({ text: item.text, href: item.href, type: item.type });
      item.menuItems.forEach((item) => {
        mobileMenu.push(item);
      });
    }
  });

  return (
    <Fragment>
      {/* Mobile */}
      <div className="fixed top-0 lg:hidden w-screen h-24 bg-white border-4 flex flex-col justify-center z-30">
        <div className="flex justify-center flex-row w-full">
          <Link href="/">
            <img
              src="/assets/logo/eohlogo2025.png"
              className="absolute left-6 top-0 h-16 w-min mt-3 cursor-pointer object-contain "
            />
          </Link>

          <img
            src="/assets/ui/menu.svg"
            className="absolute right-0 top-8 w-min h-10 mr-10 cursor-pointer object-contain"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>
      <MobileMenu
        menuOpen={menuOpen}
        items={mobileMenu}
        kill={() => setMenuOpen(false)}
      />

      {/* Desktop */}
      <div className="hidden lg:block fixed top-0 w-screen h-24 bg-white flex-col justify-center z-30">
        <div className="w-3/4 m-auto py-0">
          <nav className="flex flex-row w-full">
            <Link href="/">
              <img
                src="/assets/logo/eohlogo2025.png"
                className="h-16 w-30 mt-2.5 cursor-pointer"
                draggable={false}
              />
            </Link>
            <div className="mt-6 flex flex-row w-full justify-end">
              {/* These are the nav bar buttons dynamically loaded in */}
              {headerItems.map(({ type, text, href, target, menuItems }) => (
                <Button
                  key={text}
                  type={type}
                  text={text}
                  href={href}
                  target={target}
                  menuItems={menuItems}
                  className={`${
                    typeof type === "undefined" ? "mr-6" : "mr-3"
                  } uppercase text-center font-montserrat`}
                  flyoutClassName={
                    "uppercase text-center font-bold text-sm hover:text-theme-red transition delay-150 duration-200 ease-in-out font-montserrat"
                  }
                  style={{ fontWeight: 700, fontSize: 14 }}
                  multiline
                >
                  {text}
                </Button>
              ))}
              {isLoaded && isSignedIn && (
                <Button
                  className={`${
                    typeof type === "undefined" ? "mr-6" : "mr-3"
                  } uppercase text-center font-montserrat`}
                  flyoutClassName={
                    "uppercase text-center font-bold text-sm hover:text-theme-red transition delay-150 duration-200 ease-in-out font-montserrat"
                  }
                  style={{ fontWeight: 700, fontSize: 14 }}
                  multiline
                  onClick={() => router.push("/")}
                >
                  Sign Out
                </Button>
              )}
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
}
