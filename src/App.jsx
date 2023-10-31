import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import "./index.css"

function App() {
  return (
    <>
      <div>
        <NavBarComponent />
        <ItemListContainer greeting="Bienvenidos a Clementina Pizza!"/>
      </div>
    </>
  );
}

export default App;
