import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div className="drop-shadow-lg rounded-md cursor-pointer bg-white" onClick={toggleExpanded}>
      <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row">
        <h5 className="flex-1 text-base">{title}</h5>
        <div className="flex-none pl-2 stroke-2 text-2xl">{expanded ? <BiChevronUp /> : <BiChevronDown />}</div>
      </div>
      <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${expanded ? 'max-h-40' : 'max-h-0'}`}>
        <p className="pb-4 text-left">{content}</p>
      </div>
    </div>
  );
}

export default Accordion;
