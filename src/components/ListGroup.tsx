import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h3>{heading}</h3>
      {items.length == 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, position) => (
          <li
            className={
              selectedIndex === position
                ? "list-group-item active"
                : "list-group-item"
            }
            key={position}
            onClick={() => {
              setSelectedIndex(position);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}

export default ListGroup;
