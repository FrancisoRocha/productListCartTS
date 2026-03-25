import { Header } from "./components/Header"
import { ProductGrid } from "./components/ProductGrid";
import data from './data/data.json'
import { useCart } from "./hooks/useCart";
import type { Product } from "./types"

function App() {

    const products : Product[] = data;
    const { items, addToCart, incrementQuantity, decrementQuantity } = useCart()

  return (
    <>
        <main className="container">
            <header className="container__header">
                <Header/>
            </header>
            <ProductGrid
                products={products}
                items={items}
                onAddToCart={addToCart}
                onIncrementQuantity={incrementQuantity}
                onDecrementQuantity={decrementQuantity}
            />
        </main>
    </>
  )
}

export default App
