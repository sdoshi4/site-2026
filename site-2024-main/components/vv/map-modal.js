import { useState } from "react";

const useMapModal = () => {
    const [modalImages, setModalImages] = useState([]);

    const openModal = async (buildingCode) => {
        let images = ["/assets/images/default_image.png"];

        if (buildingCode === "MEB") {
            images = [
              "/assets/maps/sidney lu0.jpg",
              "/assets/maps/sidney lu1.jpg",
              "/assets/maps/sidney lu2.jpg",
            ];
        }
        else if (buildingCode === "TB") {
            images = [
              "/assets/maps/tb1.jpg",
              "/assets/maps/tb2.jpg",
              "/assets/maps/tb3.jpg",
            ];
        } else {
            const floor1Url = `/assets/maps/${buildingCode.toLowerCase()}1.jpg`;
            const floor2Url = `/assets/maps/${buildingCode.toLowerCase()}2.jpg`;
            try {
                const res1 = await fetch(floor1Url, { method: "HEAD" });
                if (res1.ok) {
                try {
                    const res2 = await fetch(floor2Url, { method: "HEAD" });
                    images = res2.ok ? [floor1Url, floor2Url] : [floor1Url];
                } catch {
                    images = [floor1Url];
                }
                }
            } catch {
                // Do nothing
            }
        }

        setModalImages(images);
    };

    const closeModal = () => {
        setModalImages([]);
    };

    return { modalImages, openModal, closeModal };
    };

export default useMapModal;