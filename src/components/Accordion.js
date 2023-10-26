import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) { // items contains the list to dispaly im accordion
    // set state to open/ close 
    const [selectedIndex, setSelectedIndex] = useState(-1);
    function manageCollaps(index) {
        //if (selectedIndex == index)
        //    setSelectedIndex(-1)
        //else
        //    setSelectedIndex(index)

        setSelectedIndex((current) => {
            if (current === index)
                return -1;
            return index;
        })

    }

    const renderItem = items.map((item, index) => {
        const isExpended = selectedIndex === index;
        const icon = (
            <span className="text-2xl">
                {isExpended ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
        );

        return (
                <div key={item.id}>
                    <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
                        onClick={() => manageCollaps(index)}>{item.lable} {icon}</div>
                    {isExpended && <div>{item.contemt}</div>}
                </div>
        )
    })
    return (
        <div>
            {renderItem}
        </div>
    )
}

export default Accordion;