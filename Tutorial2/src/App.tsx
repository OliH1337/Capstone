import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    'Sydeny',
    'Melbourne',
    'Brisbane',
];

  return <div><ListGroup items={items} heading = "Cities"/></div>;
}

export default App; 