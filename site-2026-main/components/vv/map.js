import React, { useState } from "react"
import { Remage } from "./remage.js"
import { CardInteract } from "./interacts.js"
import { LOCATIONS } from "../../utilities/links.js"
import { Icon } from "@iconify/react"
import { Modal } from "../modal/index.js"
import { ShuttleInformation } from "../shuttle/index.js"
import useMapModal from "./map-modal.js"

const Map = () => {
  const { modalImages, noMapAvailable, openModal, closeModal } = useMapModal();
  const interacts = [
    CardInteract({
      top: "13.5%",
      left: "10.3%",
      heading: "Beckman Institute",
      buildingCode: "Beckman",
      mapsLink: LOCATIONS.Beckman,
      openModal: openModal,
    }),
    CardInteract({
      top: "10.5%",
      left: "20.3%",
      heading: "CSL Studio",
      buildingCode: "CSL",
      mapsLink: LOCATIONS.CSL,
      openModal: openModal,
    }),
    CardInteract({
      top: "20.5%",
      left: "10.3%",
      heading: "ECEB",
      buildingCode: "ECEB",
      mapsLink: LOCATIONS.ECEB,
      openModal: openModal,
    }),
    CardInteract({
      top: "18%",
      left: "18%",
      heading: "Coordinated Sciences Lab",
      buildingCode: "CSL",
      mapsLink: LOCATIONS.CoordinatedSciencesLab,
      openModal: openModal,
    }),
    CardInteract({
      top: "17%",
      left: "21%",
      heading: "Hydrosystems Laboratory",
      buildingCode: "Hydrosystems",
      mapsLink: LOCATIONS.HydrosystemsLab,
      openModal: openModal,
    }),
    CardInteract({
      top: "13%",
      left: "26%",
      heading: "NCSA",
      buildingCode: "NCSA",
      mapsLink: LOCATIONS.NCSA,
      openModal: openModal,
    }),
    CardInteract({
      top: "24%",
      left: "16%",
      heading: "Nick Holonyak Nanotechnology Lab",
      buildingCode: "HMNTL",
      mapsLink: LOCATIONS.NanotechLab,
      openModal: openModal,
    }),
    CardInteract({
      top: "21%",
      left: "22.5%",
      heading: "Newmark Civil Engineering Lab",
      buildingCode: "Newmark",
      mapsLink: LOCATIONS.Newmark,
      openModal: openModal,
    }),
    CardInteract({
      top: "18%",
      left: "30.5%",
      heading: "Siebel School of Computing and Data Science",
      buildingCode: "Siebel",
      mapsLink: LOCATIONS.SiebelCS,
      openModal: openModal,
    }),
    CardInteract({
      top: "20%",
      left: "53%",
      heading: "Engineering Student Project Laboratory (ESPL)",
      buildingCode: "ESPL",
      mapsLink: LOCATIONS.ESPL,
      openModal: openModal,
    }),
    CardInteract({
      top: "24.3%",
      left: "25.5%",
      heading: "Digital Computer Laboratory",
      buildingCode: "DCL",
      mapsLink: LOCATIONS.DCL,
      openModal: openModal,
    }),
    CardInteract({
      top: "28%",
      left: "28%",
      heading: "Grainger Engineering Library",
      buildingCode: "Grainger Library",
      mapsLink: LOCATIONS.Grainger,
      openModal: openModal,
    }),
    CardInteract({
      top: "33.5%",
      left: "24.5%",
      heading: "Talbot Laboratory",
      buildingCode: "Talbot",
      mapsLink: LOCATIONS.Talbot,
      openModal: openModal,
    }),
    CardInteract({
      top: "29.5%",
      left: "34.5%",
      heading: "Mechanical Engineering Lab (MEL)",
      buildingCode: "MEL",
      mapsLink: LOCATIONS.MEL,
      openModal: openModal,
    }),
    CardInteract({
      top: "30.5%",
      left: "21.5%",
      heading: "Campus Instructional Facility (CIF)",
      buildingCode: "CIF",
      mapsLink: LOCATIONS.CIF,
      openModal: openModal,
    }),
    CardInteract({
      top: "32%",
      left: "39%",
      heading: "Material Science & Engineering (MSEB)",
      buildingCode: "MSEB",
      mapsLink: LOCATIONS.MSEB,
      openModal: openModal,
    }),
    CardInteract({
      top: "27%",
      left: "39.5%",
      heading: "Transportation Building",
      buildingCode: "TB",
      mapsLink: LOCATIONS.TransportationBuilding,
      openModal: openModal,
    }),
    CardInteract({
      top: "36.5%",
      left: "28.3%",
      heading: "Everitt Laboratory",
      buildingCode: "Everitt",
      mapsLink: LOCATIONS.Everitt,
      openModal: openModal,
    }),
    CardInteract({
      top: "29.5%",
      left: "43.8%",
      heading: "Sidney Lu (MEB)",
      buildingCode: "MEB",
      mapsLink: LOCATIONS.SidneyLu,
      openModal: openModal,
    }),
    CardInteract({
      top: "25%",
      left: "53.3%",
      heading: "Loomis Laboratory (Physics)",
      buildingCode: "Loomis",
      mapsLink: LOCATIONS.Loomis,
      openModal: openModal,
    }),
    CardInteract({
      top: "21.5%",
      left: "49.7%",
      heading: "Materials Research Laboratory (MRL)",
      buildingCode: "MRL",
      mapsLink: LOCATIONS.MRL,
      openModal: openModal,
    }),
    CardInteract({
      top: "36.5%",
      left: "44.7%",
      heading: "Natural History Building (NHB)",
      buildingCode: "NHB",
      mapsLink: LOCATIONS.NHB,
      openModal: openModal,
    }),
    CardInteract({
      top: "34.5%",
      left: "34.7%",
      heading: "Engineering Hall",
      buildingCode: "Engineering Hall",
      mapsLink: LOCATIONS.EHall,
      openModal: openModal,
    }),
    CardInteract({
      top: "37%",
      left: "32.5%",
      heading: "Graziano Plaza",
      buildingCode: "Graziano",
      mapsLink: LOCATIONS.GrazianoPlaza,
      openModal: openModal,
    }),
    CardInteract({
      top: "72.5%",
      left: "78.9%",
      heading: "Stock Pavilion",
      buildingCode: "Stock Pavilion",
      mapsLink: LOCATIONS.StockPavillion,
      openModal: openModal,
    }),
    CardInteract({
      top: "54%",
      left: "65%",
      heading: "Observatory",
      buildingCode: "Observatory",
      mapsLink: LOCATIONS.Observatory,
      openModal: openModal,
    }),
    CardInteract({
      top: "32.3%",
      left: "30.8%",
      heading: "Bardeen Quad",
      buildingCode: "Bardeen Quad",
      mapsLink: LOCATIONS.BardeenQuad,
      openModal: openModal,
    }),
  ]

  // const [modalImages, setModalImages] = useState([]);
  // const [noMapAvailable, setNoMapAvailable] = useState(false);

  // const openModal = async (buildingCode) => {
  //   let images = [];

  //   if (buildingCode === "Sidney Lu") {
  //     images = [
  //       "/assets/maps/sidney lu0.png",
  //       "/assets/maps/sidney lu1.png",
  //       "/assets/maps/sidney lu2.png",
  //     ];
  //   } else {
  //     const floor1Url = `/assets/maps/${buildingCode.toLowerCase()}1.png`;
  //     const floor2Url = `/assets/maps/${buildingCode.toLowerCase()}2.png`;

  //     try {
  //       const res1 = await fetch(floor1Url, { method: 'HEAD' });

  //       if (res1.ok) {
  //         try {
  //           const res2 = await fetch(floor2Url, { method: 'HEAD' });
  //           if (res2.ok) {
  //             images = [floor1Url, floor2Url];
  //           } else {
  //             images = [floor1Url];
  //           }
  //         } catch {
  //           images = [floor1Url];
  //         }
  //         setNoMapAvailable(false); // ✅ Maps exist
  //       } else {
  //         setNoMapAvailable(true); // ❌ No map available
  //       }
  //     } catch {
  //       setNoMapAvailable(true); // ❌ No map available
  //     }
  //   }

  //   setModalImages(images);
  // };
  

  // const closeModal = () => {
  //   setModalImages([]);
  //   setNoMapAvailable(false); // Reset state when closing modal
  // };

  return (
    <>
      <div className="xs:hidden mx-5 flex flex-col gap-5">
        <p>Oops, your screen is too small to render the interactive map correctly!</p>
        <p>Don't worry, here's a static version of the map</p>
        <img src="/campus-map.svg" alt="Campus Map" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-5 items-center lg:items-start">
        <div className="hidden xs:block">
          <Remage
            src="/assets/images/eoh-maponly2.png"
            title="Campus Map"
            interactables={interacts}
          />
        </div>

        {modalImages.length > 0 && (
  <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
    <div className="modal-content bg-white p-5 rounded-lg relative w-11/12 sm:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-gray-500 z-50"
      >
        &times;
      </button>

      {noMapAvailable ? (
        <p className="text-center text-gray-600">No map available for this building.</p>
      ) : (
        modalImages.map((src, idx) => (
          <img key={idx} src={src} alt={`Floor ${idx + 1}`} className="mb-3 w-full" />
        ))
      )}
    </div>
  </div>
)}





        <div className="mx-5">
          <ShuttleInformation />
          <a
            href="/faq"
            className="flex items-center justify-center gap-2 py-3 text-center text-white rounded-full bg-black text-xl font-semibold
                        w-full sm:w-96 mx-auto my-3 bg-gradient-to-tr from-yellow-800 via-yellow-500 to-yellow-700"
          >
            <Icon icon="wpf:faq" className="text-2xl" />
            <span>FAQs</span>
          </a>

          <h2 className="font-heading text-2xl my-3">Locations</h2>
          <div className="flex flex-col gap-3">
            {interacts.map((interact, idx) => (
              <span
                className="flex flex-row items-center justify-between ml-2"
                key={idx}
              >
                <h4>{interact.heading}</h4>
                <span className="flex flex-row items-center gap-3">
                  {interact.mapsLink && (
                    <a
                      href={interact.mapsLink}
                      target="_blank"
                      aria-label="Google Maps Link"
                      className="flex flex-row items-center py-2 px-3 border shadow-md rounded-md gap-2 hover:bg-blue-200 duration-200"
                    >
                      <Icon
                        icon="ri:direction-fill"
                        className="text-3xl text-blue-700 hover:text-blue-600"
                      />
                    </a>
                  )}
                  <a
                    className="flex flex-row items-center py-2 px-3 border shadow-md rounded-md gap-2 hover:bg-yellow-200 duration-200"
                    href={`/vv?t=exhibits&q=${encodeURI(
                      interact.buildingCode
                    )}`}
                  >
                    <Icon
                      icon="game-icons:barracks-tent"
                      className="text-yellow-500 hover:text-yellow-400 text-3xl"
                    />
                  </a>
                  <a
                    className="flex flex-row items-center py-2 px-3 border shadow-md rounded-md gap-2 hover:bg-green-200 duration-200"
                    onClick={() => openModal(interact.buildingCode)}
                  >
                    <Icon
                      icon="mdi:map"
                      className="text-2xl text-green-700 hover:text-green-600"
                    />
                  </a>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;