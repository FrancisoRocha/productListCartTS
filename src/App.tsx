import { useState } from "react";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header"
import { Modal } from "./components/Modal";
import { ProductGrid } from "./components/ProductGrid";
import data from './data/data.json'
import { useCart } from "./hooks/useCart";
import type { Product } from "./types"

function App() {

    const products : Product[] = data;
    const { items, addToCart, incrementQuantity, decrementQuantity, cartTotal, startNewOrder, removeFromCart } = useCart()
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleConfirmOrder() {
        setIsModalOpen(true);
    }

    function handleStartNewOrder() {
        startNewOrder();
        setIsModalOpen(false);
    }

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
            <Cart
                items={items}
                cartTotal={cartTotal}
                onConfirmOrder={handleConfirmOrder}
                onRemoveFromCart={removeFromCart}
            />
        </main>
        <Modal
            isOpen={isModalOpen}
            items={items}
            cartTotal={cartTotal}
            onStartNewOrder={handleStartNewOrder}
        />
    </>
  )
}

export default App
