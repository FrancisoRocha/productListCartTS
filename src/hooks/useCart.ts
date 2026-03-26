import { useState, useEffect } from "react"
import type { CartItem, Product } from "../types";

export const useCart = () => {

    const [items, setItems] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem('cart')
        return saved ? JSON.parse(saved) : []
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items))
    }, [items])

    function addToCart(productItems: Product) {
        const existingProduct = items.findIndex(item => item.product.id === productItems.id);

        if (existingProduct >= 0) {
            const updateItems = items.map((item, index) => {
                if (index === existingProduct) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                } else {
                    return item;
                }
            })
            setItems(updateItems);
        } else {
            setItems(
                [...items,
                { product: productItems, quantity: 1 }]
            );
        }

    }

    function incrementQuantity(productId: Product['id']) {
        const updateItems = items.map((item) => {
            if (item.product.id === productId) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item;
        })
        setItems(updateItems);
    }

    function decrementQuantity(productId: Product['id']) {
        const updateItems = items.map((item) => {
            if (item.product.id === productId) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item;
        }).filter(item => item.quantity > 0);
        setItems(updateItems);
    }

    function removeFromCart(productId: Product['id']) {
        const updateItems = items.filter(item => item.product.id !== productId);
        setItems(updateItems);
    }

    const cartTotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0)

    function startNewOrder() {
        setItems([]);
    }

    return {
        items,
        addToCart,
        cartTotal,
        startNewOrder,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
    }
}
