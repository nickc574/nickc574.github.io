// import ListGroup from "./components/ListGroup";
import { start } from "repl";
import Alert from "./components/Alert";
import Button from "./components/Button";
import View from "./option1/View";

function App(){
  const startup = "option1";

  // let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris' ];

  // const Callback = (item: String) => {
  //   console.log(item);
  // };

  // return <div><ListGroup items={items} heading="Cities" onSelectItem={Callback} /></div>

  
    return (
      <div>
        {/* <Alert>
          Hello <span>World</span>
        </Alert> */}
        {
          startup === "option1"? 
          <View /> : 
          <Button color="danger" onClick={()=>{console.log("Clicked")}}>My Button</Button>
        }
      </div>
      );

}

export default App;