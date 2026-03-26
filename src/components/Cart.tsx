import type { CartItem } from "../types"
import "./Cart.css"

type CartProps = {
    items: CartItem[];
    cartTotal: number;
    onConfirmOrder: () => void;
    onRemoveFromCart: (productId: CartItem['product']['id']) => void;
}

export function Cart({ items, cartTotal, onConfirmOrder, onRemoveFromCart }: CartProps) {

    return (
        <>
            <aside className="container__cart">
                <div className="cart__title">
                    <h2 className="cart__number">Your Cart (<span>{ items.length }</span>)</h2>
                </div>
                { items.length === 0 ? (
                    <div className="placeholder">
                        <img src="/images/illustration-empty-cart.svg" alt="empty placeholder" />
                        <p className="text__placeholder">Your added items will appear here</p>
                    </div>
                ) : (
                    <div className="added__items">
                        <ul className="items">
                            {items.map((item) => (
                                <li className="item__cart" key={item.product.id}>
                                    <p className="added__title">{ item.product.name}</p>
                                    <div className="quantity__price--cart">
                                        <p className="quantity"><span aria-live="polite">{ item.quantity }</span>x</p>
                                        <p className="price">@${item.product.price.toFixed(2)}</p>
                                        <p className="quantity__price">${(item.product.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <button
                                        className="remove__product"
                                        aria-label="Remove product"
                                        onClick={() => onRemoveFromCart(item.product.id)}
                                    >
                                        <img src="/images/icon-remove-item.svg" alt="" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="total__items">
                            <p className="total__text">Order Total</p>
                            <p className="total">${ cartTotal.toFixed(2) }</p>
                        </div>
                        <div className="carbon__info">
                            <img src="/images/icon-carbon-neutral.svg" alt="icon carbon neutral" />
                            <p className="carbon__text">This is a <b className="info">carbon-neutral</b> delivery</p>
                        </div>
                        <button
                            className="btn__confirm__order"
                            onClick={() => onConfirmOrder()}
                        >Confirm Order</button>
                    </div>
                ) }
            </aside>
        </>

    )
}
