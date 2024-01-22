// import Message from "./message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
import Testing from "./components/Testing";

function App() {
  const [onAlert, setOnAlert] = useState(false);

  let items = ["Abuja", "Lagos", "Port Harcourt", "Enugu", "Ibadan"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>

      <div>
        {onAlert && (
          <Alert
            onClose={() => {
              setOnAlert(false);
              console.log("Alert Closed");
            }}
          >
            Hello Alert
          </Alert>
        )}
        <Button
          children="My Button"
          // color="secondary"
          onClick={() => {
            setOnAlert(true);
            console.log("Alert displayed");
          }}
        ></Button>
      </div>
      <Testing onSelect={() => console.log("clicked")} tooty="Testing" />
    </div>
  );
}

export default App;

// You can use reactnode as type to pass html elements as children in react
