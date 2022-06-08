import Header from "./components/Header";
import Card from "./components/Card";
import Total from "./components/Total";
import Checkout from "./components/Checkout";
import { Container, Divider } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Divider light />
        <Card />
        <Total />
        <Checkout />
      </Container>
    </div>
  );
}

export default App;
