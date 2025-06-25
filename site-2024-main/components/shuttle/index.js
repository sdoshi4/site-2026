import { Icon } from "@iconify/react"
import { useState } from "react"
import { Modal } from "../modal/index.js"
import Info from "../content/info.js"


export const ShuttleInformation = () => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <Modal title="Shuttle Information" open={modalOpen} setOpen={setModalOpen}>
                <div className="mb-5">
                    <div className="h-2"></div>
                    <Info>
                        EOH Shuttles are Peoria Charter buses, NOT the MTD public transit buses
                    </Info>
                    <div className="h-2"></div>
                    The shuttle will run from <b>8:00 AM to 5:30 PM</b> Friday and Saturday. Shuttle stops will
                    be:<br />
                    <ul className="ml-2">

                        <li>
                            Lot E-14
                        </li>
                        <li>
                            S 6th St (close to South Quad)
                        </li>
                        <li>
                            Everitt Laboratory
                        </li>
                        <li>
                            Campus Instructional Facility (CIF)
                        </li>
                        <li>
                            Electrical and Computer Engineering (ECEB)
                        </li>
                        <li>
                            Lot B22
                        </li>
                    </ul>
                    and then will return to E-14 and repeat.
                </div>
                <img
                    alt="Map of EOH Shuttles"
                    src="assets/images/shuttle.png"
                />
            </Modal>
            <button onClick={() => setModalOpen(true)}
                className="flex items-center justify-center gap-2 py-3 text-center text-white rounded-full bg-black text-xl font-semibold
                          w-full sm:w-96 mx-auto my-3 bg-gradient-to-tr from-[#c578d6] via-[#d292e0] to-[#c578d6] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
                <Icon icon="bxs:bus" className="text-2xl" />
                <span>Shuttle Info</span>
            </button>
        </>
    )
}

/*

<div className="h-2"></div>
                    The shuttle will run from <b>8:00 AM to 5:30 PM</b> Friday and Saturday. Shuttle stops will
                    be:<br />
                    <ul className="ml-2">

                        <li>
                            Lot E-14, Stock Pavilion
                        </li>
                        <li>
                            S 6th St (close to South Quad)
                        </li>
                        <li>
                            Everitt Laboratory
                        </li>
                        <li>
                            Campus Instructional Facility (CIF)
                        </li>
                        <li>
                            Electrical and Computer Engineering (ECEB)
                        </li>
                        <li>
                            Lot B22
                        </li>
                        <li>
                            Engineering Students Projects Laboratory (ESPL)
                        </li>
                    </ul>
                    and then will return to E-14 and repeat.


                    <img
                    alt="Map of EOH Shuttles"
                    src="/shuttle-map.svg"
                />

*/
