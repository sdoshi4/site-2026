import Button from '@/button';
import { Modal } from '../../components/modal/index.js';
import { useState } from 'react';
import { Icon } from '@iconify/react';

const slotGradients = {
  0: 'bg-gradient-to-tr from-[#d62828] via-[#d62828] to-[#d62828]',
  1: 'bg-gradient-to-tr from-[#ff8400] via-[#ff8400] to-[#ff8400]',
  2: 'bg-gradient-to-tr from-[#c578d6] via-[#c578d6] to-[#c578d6]',
  3: 'bg-gradient-to-tr from-[#a2d3c2] via-[#a2d3c2] to-[#a2d3c2]',
  4: 'bg-gradient-to-tr from-[#c578d6] via-[#c578d6] to-[#c578d6]',
  5: 'bg-gradient-to-tr from-[#a2d3c2] via-[#a2d3c2] to-[#a2d3c2]',
}

const awards = [
  {
    "title": "Outstanding Undergraduate Research",
    "1": "Hydrogels in Healthcare",
    "2": "Department of Climate, Meteorology, and Atmospheric Science",
    "3": "Design Your Cure"
  },
  {
    "title": "Outstanding RSO Exhibit",
    "1": "The Beast",
    "2": "Freedom Machine: Adaptive Gravel E-Trike",
    "3": "The Fusor"
  },
  {
    "title": "Outstanding Freshman Exhibit",
    "1": "IISE Shark Tank",
    "2": "Pykrete: Ice with the Strength of Steel",
    "3": "Women’s Reproductive Health Hormone Sensor"
  },
  {
    "title": "Most Engaging",
    "1": "Pilot Your Drone: Air Traffic Adventureland",
    "2": "Motor Testing Technology",
    "3": "Jump Simulation - Medical School Experience"
  },
  {
    "title": "Family Favorite Award",
    "1": "IISE Shark Tank",
    "2": "Mobile Manipulation Delivery Robot",
    "3": "Egg Drop"
  },
  {
    "title": "Most Industry Impact Presented by Chevron",
    "1": "Freedom Machine: Adaptive Gravel E-Trike",
    "2": "CIMED Intelligent Mattress Topper",
    "3": "Urinalysis"
  },
  {
    "title": "Visionary Impact Award",
    "1": "VoxLink",
    "2": "NeuroTech@UIUC",
    "3": "Women’s Reproductive Health Hormone Sensor"
  },
  {
    "title": "Distinguished Technology Award",
    "1": "ArachnoBot",
    "2": "The Fusor",
    "3": "Novoprint: Multi-Extruder Robotic Printing Arm"
  },
  {
    "title": "Sustainability Award",
    "1": "Power of Clean Water and Tree Rings",
    "2": "From Scrap to Spool: 3D PLA Recycler",
    "3": "Care for the Air"
  },
  {
    "title": "The Age of Innovation",
    "1": "Pilot Your Drone: Air Traffic Adventureland",
    "2": "Women’s Reproductive Health Hormone Sensor",
    "3": "Illini Solar Car"
  }
];

export default function Awards() {
  const [award, setAward] = useState(null);
  return (
    <>
      <p className='md:w-2/3 mx-5 md:mx-auto text-center mb-5'>
        The Awards Ceremony provides an opportunity to celebrate the hard work that our exhibitors have put into their exhibits.
        We look forward to highlighting outstanding exhibits that demonstrate creativity, innovation, and passion. <br />
        Congratulations to all of our EOH 2025 award winners!
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-5 mx-10">
        {
          award &&
          <Modal open={award != null} setOpen={_x => setAward(null)} title={award.title}>
            <div className="flex flex-col gap-2">
              <h3 className='mt-2 font-heading text-lg'>First Place</h3>
              <span className='flex flex-row rounded-lg items-center gap-4 p-3 text-white font-bold bg-yellow-600'>
                <Icon icon="game-icons:podium-winner" className='text-3xl min-w-[25px]' />
                <p>{award["1"]}</p>
              </span>
              <h3 className='mt-2 font-heading text-lg'>Second Place</h3>
              <span className='flex flex-row rounded-lg items-center gap-4 p-3 text-white font-bold bg-gray-600'>
                <Icon icon="game-icons:podium-second" className='text-3xl min-w-[25px]' />
                <p>{award["2"]}</p>
              </span>
              <h3 className='mt-2 font-heading text-lg'>Third Place</h3>
              <span className='flex flex-row rounded-lg items-center gap-4 p-3 text-white font-bold bg-primary-brown'>
                <Icon icon="game-icons:podium-third" className='text-3xl min-w-[25px]' />
                <p>{award["3"]}</p>
              </span>
            </div>
          </Modal>
        }

        {
          awards.map((a, idx) =>
            <button
  onClick={() => setAward(a)}
  className={`w-72 ${slotGradients[idx % Object.keys(slotGradients).length]} 
            rounded-lg p-4 text-white 
            flex items-center justify-center 
            shadow-lg shadow-gray-600 hover:shadow-lg hover:rounded-xl duration-300`}
>
  <h4 className='text-lg font-semibold text-center'>{a.title}</h4>
</button>

          )
        }
      </div>
    </>
  );
}
