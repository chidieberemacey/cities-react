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
      </ul>
    </>
  );
}

export default ListGroup;
