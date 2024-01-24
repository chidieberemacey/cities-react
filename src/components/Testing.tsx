import { useState } from "react";

interface Props {
  tooty: string;
  onSelect: (book: string) => void;
}
const Testing = ({ tooty, onSelect }: Props) => {
  const [selectedBook, setSelectedBook] = useState(-1);
  const books = ["Power", "Human nature", "Giving"];
  //   const handleSelect = (book: string) => console.log(book);
  return (
    <div>
      {<h3>{tooty.toUpperCase()}</h3>}{" "}
      <ul className="list-group">
        {books.map((book, position) => (
          <li
            key={position}
            onClick={() => {
              setSelectedBook(position);
              onSelect(book);
            }}
            className={
              selectedBook == position
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {"Laws of " + " " + book}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testing;

/*
1. create component //
2. Make displayed text dynamic and not hard coded//
3. create a list of items //
4. Display each item in the list //
5. give class active to only selected item
6. Use state to change state of selected item
7. Add a function that logs selected item to the console
8. Find a way to implement handle select function to the code
8. Find a way to implement handle select function to the code
*/
