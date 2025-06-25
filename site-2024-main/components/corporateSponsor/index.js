import Image from "next/image"

export default function CorporateSponsor() {
  const logos_medium = [
    "/assets/sponsors/Abbott.png",
    "/assets/sponsors/Brunswick.png",
    "/assets/sponsors/Dixon.png",
    "/assets/sponsors/Hendrik.png",
  ]
  const logos_small = [
    "/assets/sponsors/MTD.png",
    "/assets/sponsors/Allete.png",
    "/assets/sponsors/Beckman.png",
  ]

  const logos_large = [
    "/assets/sponsors/Cheveron.png",
    "/assets/sponsors/John.PNG",
    "/assets/sponsors/Caterpillar.png",
  ]

  return (
    <div className="w-screen flex items-center flex-col ">
      <div className="flex flex-wrap justify-center gap-5 p-5 max-w-5xl">
        {logos_large.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-72 h-48"
          >
            {" "}
            {/* Adjust width (w-36) and height (h-36) as needed */}
            <Image
              src={logo}
              alt={`Sponsor Logo ${index + 1}`}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-5 p-5 max-w-5xl">
        {logos_medium.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-52 h-32"
          >
            {" "}
            {/* Adjust width (w-36) and height (h-36) as needed */}
            <Image
              src={logo}
              alt={`Sponsor Logo ${index + 1}`}
              width={250}
              height={250}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-5 p-5 max-w-5xl">
        {logos_small.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-36 h-20"
          >
            {" "}
            {/* Adjust width (w-36) and height (h-36) as needed */}
            <Image
              src={logo}
              alt={`Sponsor Logo ${index + 1}`}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
