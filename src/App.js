import { Counter } from "./components/Counter";
import Link from "./components/Link";
import Route from "./components/Route";
import SlidBar from "./components/Slidbar";
import AccordionPage from "./pages/Accordion.page";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import ButtonPage from "./pages/button.page";
import DropdownPage from "./pages/dropdown.page";
function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SlidBar></SlidBar>
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          < ModalPage/>
        </Route>
        <Route path="/table">
          < TablePage/>
        </Route>
        <Route path="/count">
          < Counter/>
        </Route>
      </div>
    </div>
  );
}

export default App;
