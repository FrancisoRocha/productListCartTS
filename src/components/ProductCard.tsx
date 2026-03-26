import type { Product } from "../types";
import "./ProductCard.css";

type ProductCardProps = {
    product: Product;
    quantity: number;
    // Funcion que recibe un producto de tipo Product y no retorna nada (void)
    onAddToCart: (product: Product) => void;
    // Funcion que recibe un id de producto (productId) y no retorna nada (void)
    onIncrement: (productId: Product["id"]) => void;
    onDecrement: (productId: Product["id"]) => void;
};

export function ProductCard({ product, quantity, onAddToCart, onIncrement, onDecrement,}: ProductCardProps) {
    return (
        <li className="product__item">
            <div className="item__img">
                <picture>
                    <source
                        srcSet={product.image.desktop}
                        media="(min-width: 1440px)"
                    />
                    <source
                        srcSet={product.image.tablet}
                        media="(min-width: 768px)"
                    />
                    <source
                        srcSet={product.image.mobile}
                        media="(min-width: 375px)"
                    />
                    <img
                        src={product.image.mobile}
                        className={`img__product${quantity > 0 ? " is-selected" : ""}`}
                        alt={product.name}
                    />
                </picture>
                <div className="button__cart">
                    {quantity === 0 ? (
                        <div className="add__cart">
                            <button
                                className="btn__add__cart"
                                aria-label="Add to cart"
                                onClick={() => onAddToCart(product)}
                            >
                                <img
                                    src="./images/icon-add-to-cart.svg"
                                    alt="Add to cart"
                                />
                                <span className="addCart">Add to Cart</span>
                            </button>
                        </div>
                    ) : (
                        <div className="count__btn">
                            <button
                                className="decrement"
                                aria-label="Decrease quantity"
                                onClick={() => onDecrement(product.id)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="2"
                                    fill="none"
                                    viewBox="0 0 10 2"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M0 .375h10v1.25H0V.375Z"
                                    />
                                </svg>
                            </button>
                            <span className="count" aria-live="polite">
                                {quantity}
                            </span>
                            <button
                                className="increment"
                                aria-label="Increase quantity"
                                onClick={() => onIncrement(product.id)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    fill="none"
                                    viewBox="0 0 10 10"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                                    />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="item__info">
                <p className="item__name">{product.category}</p>
                <p className="item__nameProduct">{product.name}</p>
                <p className="item__price"> ${product.price.toFixed(2)} </p>
            </div>
        </li>
    );
}
