import { useState } from "react"
import type { CartItem } from "../types";

export const useCart = () => {

    const [items, setItems] = useState<CartItem[]>([]);


    return {
        items
    }
}
