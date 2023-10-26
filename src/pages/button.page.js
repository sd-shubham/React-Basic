////import Button from "../components/Button";
////function ButtonPage() {
//// const onButtonClick = (name) => {
////  console.log(`button ${name} clicked`)
//// }
////  return (
////    <div>
////      <div>Hello from App component</div>
////      <div>
////        <Button primary onClick = {()=>onButtonClick('primary')}>Click</Button>
////      </div>
////      <br></br>
////      <div>
////      <Button success rounded onClick = {()=>onButtonClick('success')}>Cancle</Button>
////      </div>
////    </div>
////  );
////}

////export default ButtonPage;


import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage() {
    const handleClick = () => {
        console.log('Clicked!');
    };

    return (
        <div>
            <div>
                <Button
                    secondary
                    outline
                    rounded
                    className="mb-5"
                    onClick={handleClick}
                >
                    <GoBell />
                    Click me!!
                </Button>
            </div>
            <div>
                <Button danger outline onMouseEnter={handleClick}>
                    <GoCloud />
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning onMouseLeave={handleClick}>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Something!
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
