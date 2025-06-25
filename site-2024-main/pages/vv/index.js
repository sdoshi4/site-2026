import { Fragment } from 'react';
import React, { useState } from 'react';
import Exhibits from "components/vv/exhibits.js";
import Map from "components/vv/map.js";
import SpecialEvents from "components/vv/special-events.js";
import { Icon } from '@iconify/react';
import { useQueryParam, StringParam, withDefault } from 'use-query-params';

export default function VisitorView() {
    const [currentView, setCurrentView] = useQueryParam('t', withDefault(StringParam, 'exhibits'));;;
    const pages = {
        'exhibits': { title: 'Exhibits', icon: "game-icons:barracks-tent", element: <Exhibits /> },
        'map': { title: 'Map', icon: "iconoir:map", element: <Map /> },
        'special-events': { title: 'Special Events', icon: "mdi:robot-mower-outline", element: <SpecialEvents /> }
    }

    return (
        <div className="mt-24 lg:mt-20 flex flex-col justify-between">

            <div className='mb-24'>
                {pages[currentView].element}
            </div>

            <div className="fixed bottom-0 flex flex-row justify-evenly bg-blue-300 w-full h-20 items-center">
                {Object.keys(pages)
                    .map(p =>
                        <button key={p} onClick={() => setCurrentView(p)}
                            className={`${currentView === p ? 'font-bold' : ''} flex flex-col items-center w-1/3`}
                        >
                            <Icon icon={pages[p].icon} className='text-3xl' />
                            <h2 className='text-base whitespace-nowrap'>
                                {pages[p].title}
                            </h2>
                        </button>
                    )}
            </div>
        </div>
    )
}