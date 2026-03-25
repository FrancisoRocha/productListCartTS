import { Header } from "./components/Header"
import { ProductCard } from "./components/ProductCard";
import data from './data/data.json'
import { useCart } from "./hooks/useCart";
import type { Product } from "./types"

function App() {

    const products : Product[] = data;
    console.log(products)

    const { items, addToCart, incrementQuantity, decrementQuantity } = useCart()

  return (
    <>
        <main className="container">
            <header className="container__header">
                <Header/>
            </header>
              <ul className="product__container">
                  {products.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        quantity={items.find(item => item.product.id === product.id)?.quantity || 0}
                        onAddToCart={addToCart}
                        onIncrement={incrementQuantity}
                        onDecrement={decrementQuantity}
                      />
                  ))}
            </ul>
        </main>
    </>
  )
}

export default App
