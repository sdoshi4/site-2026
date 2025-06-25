import Link from 'next/link';

const footerSections = [
  {
    heading: "Special Events",
    links: [
      { text: "Middle School Design Competition", href: "/msdc" },
      { text: "High School Design Competition", href: "/hsdc" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { text: "Linktree", href: "https://linktr.ee/eoh2025" },
    ],
  },
  {
    heading: "EOH Committee",
    links: [
      { text: "Contact Us", href: "/contact-us" },
      { text: "Support EOH", href: "/#sponsors" },
      { text: "Engineering Council", href: "https://www.ecillinois.org/" },
      { text: "History of EOH", href: "https://grainger.illinois.edu/news/features/EOH-100" },
    ],
  },
  {
    heading: "Keep In Touch",
    links: [
      { text: "Mailing List", href: "https://forms.gle/A7QqftMGGXKgbBmv5" },
      { text: "Facebook", href: "https://www.facebook.com/EngineeringOpenHouse/" },
      { text: "Instagram", href: "https://www.instagram.com/eoh_illinois/" },
      { text: "X (formerly Twitter)", href: "https://twitter.com/IllinoisEOH" },
    ],
  },
];

export default function Footer({ socials }) {
  return (
    <footer
      className="relative flex flex-col w-full p-3 md:p-12 bg-no-repeat bg-bottom bg-cover"
      style={{ backgroundImage: "url('/assets/background/website-wide.png')" }}
    >
      {/* Translucent Overlay (not in use, preserved) */}
      {/* <div
        className="absolute inset-0 bg-black opacity-50 z-0"
        style={{
          pointerEvents: "none",
          top: 0,
          bottom: "auto",
          height: "100%",
        }}
      ></div> */}

      {/* Purple-to-transparent gradient behind text */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(128, 0, 128, 0.65) 25%, rgba(128, 0, 128, 0) 85%)",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row w-full items-center md:items-start">
        <div className="flex flex-row flex-wrap items-stretch justify-evenly md:w-2/3">
          {footerSections.map((section) => (
            <div className="flex flex-col p-2 w-44 gap-1" key={section.heading}>
              <h3 className="font-bold mb-1 font-montserrat text-black">{section.heading}</h3>
              {section.links?.map((link) => (
                <a
                  href={link.href}
                  className="hover:text-blue-700 duration-200 font-montserrat font-medium text-black"
                  key={link.href}
                >
                  {link.text}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="relative z-10 font-montserrat text-sm text-black text-center mt-4 font-medium">
        Copyright EOH 2025
      </p>
    </footer>
  );
}
