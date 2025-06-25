import { Icon } from "@iconify/react";


export const Modal = ({ close, event }) => {
    if (event == null) {
        return;
    }
    const picture = event?.picture?.formats?.medium?.url

    return (
      <>
        {
          <div
            className="fixed top-0 right-0 w-screen h-screen bg-blue-400/40 z-30 flex items-center justify-center backdrop-blur-sm"
            onClick={close}
          >
            <div
              className="bg-white rounded-xl mx-5 w-full md:w-1/2 h-1/2 p-8 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-3">
                <span className="flex flex-row justify-between">
                  <h2 className="font-heading text-lg">{event.title}</h2>
                  <button onClick={close} aria-label="Close Modal">
                    <Icon icon="maki:cross" className="text-2xl" />
                  </button>
                </span>
                <span className="flex flex-row gap-2">
                  <Icon
                    icon="carbon:location-filled"
                    className="text-xl text-blue-800"
                  />
                  <span>{event.location}</span>
                </span>
                <div
                  // dangerouslySetInnerHTML={{ __html: event.description }}
                >
                  <p>{event.description}</p>
                </div>
                {picture && (
                  <img
                    src={`${picture}`}
                    alt="Picture related to this event"
                    className="rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>
        }
      </>
    )
}