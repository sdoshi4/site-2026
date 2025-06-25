import React, { useRef, useState } from "react";
import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";
import { Icon } from "@iconify/react";

export const Remage = ({
  src,
  interactables,
  title = "",
}) => {
  const initialState = { scale: 2.98, positionX: -258.39, positionY: -238.65 };

  const transformComponentRef = useRef(null);
  const [state, setState] = useState(initialState);
  const [active, setActive] = useState(null);

  return (
      <TransformWrapper
        initialScale={initialState.scale}
        initialPositionX={initialState.positionX}
        initialPositionY={initialState.positionY}
        maxScale={5}
        ref={transformComponentRef}
        onTransformed={(_a, newState) => {
          // console.log(newState)
          setState(newState);
        }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
        <div className="flex flex-col">
            <div className="flex flex-row gap-2 items-center justify-between mx-5 mb-3">
              <p className="text-sm">Pinch or scroll to zoom, drag to pan</p>
              <button
                className="p-2 rounded-md hover:bg-opacity-10 duration-200 bg-opacity-0 bg-white"
                onClick={() => resetTransform()}
              >
                <Icon className="text-2xl" icon="system-uicons:zoom-reset" />
              </button>
              <button
                className="p-2 rounded-md hover:bg-opacity-10 duration-200 bg-opacity-0 bg-white"
                onClick={() => zoomIn()}
              >
                <Icon className="text-2xl" icon="lucide:zoom-in" />
              </button>
              <button
                className="p-2 rounded-md hover:bg-opacity-10 duration-200 bg-opacity-0 bg-white"
                onClick={() => zoomOut()}
              >
                <Icon className="text-2xl" icon="lucide:zoom-out" />
              </button>

            </div>
            <div className="flex justify-center">

              <TransformComponent>
                <div className="">
                  <img src={src} alt="" className="h-full relative overflow-hidden max-w-xl" />
                </div>
                {interactables
                  .map((interact, idx) =>
                    <div key={idx}
                      style={{
                        left: interact.left,
                        top: interact.top,
                        position: "absolute",
                      }}
                    >
                      {interact.render(state, active, setActive)}
                    </div>)}
              </TransformComponent>
            </div>
        </div>
        )}
    </TransformWrapper>
  );
};