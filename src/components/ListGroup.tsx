function ListGroup() {
  let cities = ["Abuja", "Lagos", "Port Harcourt", "Enugu"];
  //   cities = [];

  return (
    <>
      <h3>List</h3>
      {cities.length == 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {cities.map((city, position) => (
          <li key={position}>{city}</li>
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
