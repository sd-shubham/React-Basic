import Accordion from "../components/Accordion"

function AccordionPage() {
    const items = [{
        id: 'fgfyyruf',
        lable: 'API-1',
        contemt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida cursus urna, non scelerisque tellus auctor a. Curabitur fringilla nisl leo, sit amet dictum quam ultrices eget. Nam non magna consequat, iaculis augue sed, porttitor turpis. Nulla pharetra ultrices sapien, ut porta lorem feugiat non. Cras id tellus sem. Vestibulum lectus neque, rutrum at suscipit pretium, ornare at neque. Ut eu eros eu leo luctus semper.'
    },
    {
        id: 'gdgtkk',
        lable: 'API-2',
        contemt: 'Sed vestibulum risus sed lorem scelerisque egestas. Suspendisse porta ex at rutrum auctor. Fusce quis ligula in mi tristique tincidunt. Vivamus imperdiet tempus risus eget posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ultrices erat vitae metus malesuada tincidunt. Aliquam consectetur mollis neque vel interdum. Cras tincidunt feugiat diam, eu sodales ipsum pretium venenatis. Ut mollis ipsum et urna ultricies, sed hendrerit ante vehicula. Ut vel nulla eu quam volutpat efficitur. Integer vestibulum pulvinar volutpat.'
    }
    ]

    const onButtonClick = (name) => {
        console.log(`button ${name} clicked`)
    }
    return (
        <div>
            {/* <div>Hello from App component</div>
      <div>
        <Button primary onClick = {()=>onButtonClick('primary')}>Click</Button>
      </div>
      <br></br>
      <div>
      <Button success rounded onClick = {()=>onButtonClick('success')}>Cancle</Button>
      </div> */}
            <Accordion items={items}></Accordion>
        </div>
    );
}
export default AccordionPage;