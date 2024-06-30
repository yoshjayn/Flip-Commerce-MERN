import NavBar from "../features/NavBar/NavBar";
import ProductList from "../features/product-list/ProductList";

function Home() {
  return (  
    <div>
        <NavBar>
            <ProductList></ProductList>
        </NavBar>
    </div>
  ); 
}

export default Home
