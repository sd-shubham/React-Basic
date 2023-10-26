import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
//   const [name,setName] = useState('');
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () =>{
    setShowModal(false);
  }
  const handleSubmit = () => {
    console.log('')

    setTimeout(() => {
        handleClose();
    }, 3000);
  }

  const modalFooter = (
    <div className="flex">
  <Button success onClick={handleSubmit}>Save</Button>
  <Button danger onClick={handleClose}>CLOSE</Button>
  </div>
  )
  const ModalData = <Modal onClose = {handleClose} footer={modalFooter}>
    <div>
    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget neque iaculis, cursus odio id, congue sem. Donec in diam augue. Suspendisse eu sem diam. Ut tempor volutpat lacus, a dictum turpis cursus convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum feugiat pulvinar nisi, eget ornare ex pretium at. Quisque diam metus, pulvinar non varius sit amet, volutpat efficitur mauris. Nam augue dolor, elementum ac tincidunt id, luctus vitae nulla. Etiam eu dolor ut ligula tristique venenatis. Quisque eget gravida purus, in imperdiet nibh. Donec sodales libero non interdum auctor. Duis id magna quis dolor viverra lacinia. Suspendisse vel elit eget mi placerat pellentesque vel ut dui. Cras consequat vel turpis ac sagittis. Duis sit amet libero dui.

Cras a nibh nec mauris tristique dictum ut sit amet sapien. Phasellus auctor eget felis in mollis. Integer nunc justo, tincidunt volutpat mauris ac, vestibulum porta ante. Duis laoreet, ligula at vestibulum sagittis, nunc sapien ornare nisl, eget lacinia mi quam at ex. Quisque dignissim blandit varius. Nam ultricies massa mauris, vitae dictum turpis egestas in. Maecenas non vehicula ligula. Fusce ut enim pellentesque, tincidunt tortor vitae, consectetur quam. Ut feugiat convallis commodo. Nunc et purus nunc. Quisque consectetur enim erat, vitae placerat purus varius vitae. Nulla lorem odio, dictum eget magna quis, finibus feugiat ante.

Phasellus tincidunt sem augue, vitae semper magna consequat sit amet. Phasellus iaculis euismod massa, ac pretium nulla interdum quis. Vestibulum placerat leo nec sodales rhoncus. Aenean erat massa, aliquet vitae ligula non, pharetra molestie arcu. Fusce a turpis molestie, euismod erat et, bibendum arcu. Nullam scelerisque consectetur arcu, at volutpat nisl tincidunt id. Integer tristique magna sem, ut ultricies sem eleifend id. In pellentesque nisl velit.

Aliquam at fermentum metus. Mauris id augue ut erat sagittis tempor sed consequat libero. In euismod, massa vel feugiat tempor, velit odio dapibus mauris, eget mattis enim augue sit amet dui. Phasellus nisi risus, laoreet eget neque a, ullamcorper consectetur enim. Sed vel facilisis justo. Donec in libero at enim efficitur venenatis ultrices at nunc. Ut mollis viverra luctus. Nunc mattis justo eu nibh tristique iaculis. Donec ac euismod libero. Etiam dui neque, gravida a diam in, viverra molestie est. Cras consectetur urna ac orci ullamcorper convallis. Pellentesque hendrerit nisi vel aliquam placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris venenatis, lectus vel tempus volutpat, lacus justo condimentum felis, vitae mattis tortor dui at magna.

Pellentesque et tempor enim. Aliquam erat volutpat. Donec libero ipsum, facilisis ut rhoncus a, laoreet quis tortor. Ut nulla tellus, maximus eget massa et, convallis porta eros. Duis rutrum arcu sit amet ex semper feugiat. Proin at gravida quam, id ullamcorper purus. Vivamus finibus, mauris non efficitur volutpat, tellus velit ultricies massa, sit amet malesuada nibh felis scelerisque ligula. Sed sit amet lacus nunc. Ut in cursus urna. Vivamus orci enim, vehicula condimentum mauris sit amet, feugiat mollis metus. Sed efficitur viverra sem, sed gravida diam dapibus id.</h1> 
    {/* <input type="text" onChange={(e) => setName(e.target.value)} /> */}
    </div>
    {/* <div>
        {modalFooter}
    </div> */}
    </Modal>;
  return (
    <div>
      <Button onClick={handleClick} primary>
        OpenModal
      </Button>
      {showModal && ModalData}
    </div>
  );
}
export default ModalPage;
