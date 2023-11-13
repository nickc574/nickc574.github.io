import { Fragment, useState } from "react"
//import { MouseEvent } from "react";

interface Props {
    items: String[];
    heading: String;
    onSelectItem: (item: String) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    

    //const handleClick = (event: MouseEvent) => {console.log(event); selectedIndex = event.sel};
    //let selectedIndex = -1;

    //items = [];

    const [selectedIndex, setSelectedIndex] = useState(-1);


    return (
        <>
            <h1>{heading}</h1>

            {/* { items.length === 0 ? <p>No item Found</p> : null } */}
            {items.length === 0 && <p>No item Found</p>}

            <ul className="list-group">
                {items.map((item, index) => <li className={selectedIndex === index? "list-group-item active" : "list-group-item"} onClick={() => { setSelectedIndex(index); onSelectItem(item); }}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;
