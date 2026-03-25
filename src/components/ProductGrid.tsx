import { ProductCard } from "./ProductCard";
import type { Product, CartItem } from "../types";

type ProductGridProps = {
    products: Product[];
    items: CartItem[];
    onAddToCart: (product: Product) => void;
    onIncrementQuantity: (productId: Product['id']) => void;
    onDecrementQuantity: (productId: Product['id']) => void;
}

export function ProductGrid({ products, items, onAddToCart, onIncrementQuantity, onDecrementQuantity } : ProductGridProps) {
    return (
        <ul className="product__container">
            {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  quantity={items.find(item => item.product.id === product.id)?.quantity || 0}
                  onAddToCart={onAddToCart}
                  onIncrement={onIncrementQuantity}
                  onDecrement={onDecrementQuantity}
                />
            ))}
      </ul>
        )
}
