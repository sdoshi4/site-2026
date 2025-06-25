import { Icon } from "@iconify/react";
import { useState } from "react";
// import {openModal, closeModal } from "./map.js"
import useMapModal from "./map-modal.js";

export const CardInteract = ({
    top,
    left,
    heading = "",
    buildingCode = "",
    mapsLink = "",
    openModal,
}) => {
    const [isHovering, setHovering] = useState(false);
    const [timeoutId, setTimeoutId] = useState();

    return {
        top,
        left,
        heading,
        mapsLink,
        buildingCode,
        render: (state, active, setActive) => {
            // const {openModal} = useMapModal();
            const clearSelection = () => {
                setHovering(false);
                setActive(null);
                if (timeoutId) {
                    clearTimeout(timeoutId)
                    setTimeoutId(null)
                }
            }
            const scale = state.scale;
            return (
                <div
                    onMouseEnter={() => {
                        setHovering(true);
                        setTimeoutId(setTimeout(clearSelection, 2500));
                        setActive(buildingCode);
                    }}
                    onMouseLeave={clearSelection}
                    style={{ transform: `scale(${1 / scale})`, position: 'relative' }}
                >
                    <div className={`${isHovering ? "visible" : "invisible hidden"}
                                 absolute -left-16 bottom-5 text-black p-4 bg-white/80 rounded-xl flex flex-col w-60 z-50   `}>
                        <span className="flex flex-row justify-between items-center">
                            <h1 className="">{heading}</h1>
                            <div className="flex flex-end flex-row gap-3 items-center">
                                {mapsLink &&
                                    <a href={mapsLink} target="_blank" aria-label="Google Maps Link">
                                        <Icon icon="ri:direction-fill" className="text-3xl text-blue-700 hover:text-blue-600" />
                                    </a>
                                }
                                <a className="" href={`/vv?t=exhibits&q=${encodeURI(buildingCode)}`}>
                                    <Icon icon="game-icons:barracks-tent" className="text-yellow-500 hover:text-yellow-400 text-3xl" />
                                </a>
                                <a className="" onClick={() => openModal(buildingCode)}>
                                    <Icon icon="mdi:map" className="text-green-700 hover:text-green-600 text-3xl" />
                                </a>
                            </div>
                        </span>
                    </div>
                    {(active == null || active == buildingCode) &&
                        <Icon icon="maki:marker" className="text-2xl text-pink-500 hover:text-pink-800 cursor-pointer z-10" />
                    }
                </div>
            );
        },
    };
};