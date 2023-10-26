import {useState} from 'react';
import Dropdown from "../components/Dropdown";

function DropdownPage() {
    const [selection, setSelection] = useState();
    // const [nSelection, nSetSelection] = useState(null);
    // const [selection, setSelection] = useState({label:"Select",value:'0'});

    
    const handleSelect = (option) => {
      setSelection(option);
    };
    // const handleNSelect = (option) => {
    //     nSetSelection(option);
    //   };
  
    const options = [
      { label: 'Red', value: 'red' },
      { label: 'Green', value: 'green' },
      { label: 'Blue', value: 'blue' },
    ];
   // options.unshift({label:"Select",value:'0'})
    // const options2 = [
    //     { label: '1', value: '1' },
    //     { label: '2', value: '2' },
    //     { label: '3', value: '3' },
    //   ];
  
    return (
        <div className='flex'>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      {/* <Dropdown options={options} value={selection} onChange={handleSelect} /> */}
      {/* <Dropdown options={options2} value={nSelection} onChange={handleNSelect} /> */}
      {selection?.value === '0' && "Invalid selection"}
      </div>
      
    );
}
export default DropdownPage;
