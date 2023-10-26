import Link from "./Link";

function SlidBar() {
  const links = [
    { label: "DropDown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/button" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/count" },
  ];

  const renderLink = links.map((x) => {
    return (
      <Link key={x.label} to={x.path} cls='mb-5' activeClassName='font-bold border-l-4 border-blue-500 pl-2'>
        {x.label}
      </Link>
    );
  });
  return (<div className="sticky top-0 overflow-y-scroll flex flex-col item-start"> 
    { renderLink }
  </div>);
}
export default SlidBar;
