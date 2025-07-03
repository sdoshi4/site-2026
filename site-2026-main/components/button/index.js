import { Fragment, useState } from "react";
import { getStyles } from "@utilities/types";
import FlyoutMenu from "@/flyout-menu";

export default function Button({
  children,
  divClass,
  style,
  href,
  target,
  className,
  type,
  menuItems,
  width,
  onClick,
  multiline,
  flyoutClassName,
}) {
  const [menuIsOpen, setMenuOpenTo] = useState(false);

  const cursor =
    typeof href === "undefined" ? "cursor-default" : "cursor-pointer";
  const styles = `relative transition delay-150 duration-200 ease-in-out inline-flex items-center py-2 ${getStyles(
    type
  )} ${cursor} ${className}`;

  return (
    <div className={divClass}>
      <a
        href={href}
        target={target || "_self"}
        onMouseEnter={() => {
          setMenuOpenTo(true);
        }}
        onMouseLeave={() => {
          setMenuOpenTo(false);
        }}
        className={styles}
        style={style}
        onClick={onClick}
      >
        <h3
          className={`font-montserrat ${
            multiline ? "mx-auto" : "whitespace-nowrap truncate"
          }`}
          style={width ? { width: width } : {}}
        >
          {children}
        </h3>
        {type == "menu" && (
          <img
            src="/assets/ui/caret-down.svg"
            className="inline-block float-right w-5 p-0"
          />
        )}
      </a>
      {menuItems && (
        <div
          className="relative"
          onMouseEnter={() => {
            setMenuOpenTo(true);
          }}
          onMouseLeave={() => {
            setMenuOpenTo(false);
          }}
        >
          <FlyoutMenu
            maxWidth={200}
            menuItems={menuItems}
            menuIsOpen={menuIsOpen}
            zeroTop={true}
            className={flyoutClassName}
          />
        </div>
      )}
    </div>
  );
}
