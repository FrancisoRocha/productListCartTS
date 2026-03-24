import { Header } from "./components/Header"
import data from './data/data.json'
import type { Product } from "./types"

function App() {

    const products : Product[] = data;
    console.log(products)

  return (
    <>
        <main className="container">
            <header className="container__header">
                <Header/>
            </header>
            <ul className="product__container">
            </ul>
        </main>
    </>
  )
}

export default App
