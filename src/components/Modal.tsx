import { useEffect, useRef } from "react";
import type { CartItem } from "../types";
import "./Modal.css"

type ModalProps = {
    isOpen: boolean;
    items: CartItem[];
    onStartNewOrder: () => void;
    cartTotal: number;
}

export function Modal({ isOpen, items, onStartNewOrder, cartTotal }: ModalProps) {

    // Referencia al elemento dialog para controlar su apertura y cierre
    const dialogRef = useRef<HTMLDialogElement>(null);

    // Efecto para abrir o cerrar el modal según el estado isOpen
    // ? Optional chaining para asegurarnos de que dialogRef.current no sea null antes de llamar a showModal() o close()
    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [isOpen]); // Se ejecuta cada vez que isOpen cambia

    // Si el modal no está abierto, no renderizamos nada
    if(!isOpen) return null;

    return (
        <dialog id="modal" ref={dialogRef}>
            <div className="title__info">
            <img src="/images/icon-order-confirmed.svg" alt="icon order confirmed" />
            <div className="modal__info">
                <h2 className="title__modal">Order Confirmed</h2>
                <p className="text__modal">We hope you enjoy your food!</p>
            </div>
            </div>
            <div className="confirmed__items">
                <ul className="confirmed__item">
                    {items.map((itemProduc) => (
                        <li className="item__container__products" key={ itemProduc.product.id }>
                            <div className="item__products__img">
                                <img src={itemProduc.product.image.thumbnail} alt={`Product confirmed ${itemProduc.product.image.thumbnail}`} />
                            </div>
                            <div className="item__products__info">
                                <p className="item__product">{ itemProduc.product.name }</p>
                                <div className="item__quantity__price">
                                    <p className="item__product__number"><span>{ itemProduc.quantity }</span>x</p>
                                    <p className="item__product__price"><span>@</span>${ itemProduc.product.price.toFixed(2) }</p>
                                </div>
                            </div>
                            <div className="item__product__total">
                                <p className="product__total">${ (itemProduc.product.price * itemProduc.quantity).toFixed(2) }</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="items__total">
                    <p className="total__products__item">Order Total</p>
                    <p className="price__products__item">${ cartTotal.toFixed(2) }</p>
                </div>
            </div>
            <button
                className="btn__new__order"
                onClick={ () => onStartNewOrder() }
            >Start New Order</button>
        </dialog>
    )
}
