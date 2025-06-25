import React from "react";
import Bubble from "./bubble";

export default function Bubbles({ current, onBubbleClick }) {
  return (
    <div className="uiuc-map absolute top-0 left-0">
      {/* <Bubble left="18%" top="22%" handleClick={onBubbleClick} bubbleAt={current} name="Beckman Institute" /> */}
      {/* <Bubble left="37%" top="8%" handleClick={onBubbleClick} bubbleAt={current} name="CSL Studio" /> */}
      <Bubble
        left="20%"
        top="37%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Electrical and Computer Engineering Building"
      />
      {/* <Bubble left="29%" top="32%" handleClick={onBubbleClick} bubbleAt={current} name="Coordinated Science Laboratory (CSL)" /> */}
      <Bubble
        left="37%"
        top="29%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Hydrosystems Lab"
      />
      <Bubble left="45%" top="17%" handleClick={onBubbleClick} bubbleAt={current} name="National Center for Supercomputing Applications" />
      <Bubble
        left="29%"
        top="38%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="North Quad"
      />
      <Bubble
        left="40%"
        top="38%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Newmark (Crane Bay)"
      />
      <Bubble left="55%" top="26%" handleClick={onBubbleClick} bubbleAt={current} name="Siebel Center" />
      {/* <Bubble left="31%" top="56%" handleClick={onBubbleClick} bubbleAt={current} name="Kenney Gym Annex" /> */}

      <Bubble left="48%" top="45%" handleClick={onBubbleClick} bubbleAt={current} name="Digital Computer Laboratory" />
      {/* <Bubble left="48%" top="53%" handleClick={onBubbleClick} bubbleAt={current} name="Grainger Engineering Library" /> */}
      <Bubble
        left="55%"
        top="50%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Grainger Loading Dock"
      />
      <Bubble
        left="61%"
        top="53%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Matthews Ave"
      />
      <Bubble
        left="41%"
        top="57%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Springfield"
      />
      <Bubble
        left="40%"
        top="66%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Talbot Lab"
      />
      {/* <Bubble left="58%" top="56%" handleClick={onBubbleClick} bubbleAt={current} name="Mechanical Engineering Laboratory (MEL)" /> */}
      <Bubble
        left="37%"
        top="60%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Campus Instructional Facility (CIF)"
      />
      <Bubble left="67%" top="63%" handleClick={onBubbleClick} bubbleAt={current} name="Materials Science & Engineering Building" />
      <Bubble
        left="68%"
        top="51%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Transportation Building"
      />
      <Bubble
        left="50%"
        top="74%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Everitt Laboratory"
      />
      <Bubble
        left="75%"
        top="58%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Sidney Lu Mechanical Engineering Building"
      />

      <Bubble
        left="91%"
        top="47%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Loomis Laboratory"
      />
      {/* <Bubble left="85%" top="40%" handleClick={onBubbleClick} bubbleAt={current} name="Materials Research Laboratory (MRL)" /> */}
      {/* <Bubble left="69%" top="85%" handleClick={onBubbleClick} bubbleAt={current} name="Illini Union" /> */}
      <Bubble
        left="78%"
        top="74%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Natural History Building"
      />
      <Bubble left="59%" top="69%" handleClick={onBubbleClick} bubbleAt={current} name="Engineering Hall" />
      <Bubble
        left="56%"
        top="64%"
        handleClick={onBubbleClick}
        bubbleAt={current}
        name="Bardeen Quad"
      />
    </div>
  );
}
