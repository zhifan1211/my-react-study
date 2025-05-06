import './App.css'
import { useState } from 'react';
import ProductInput from './components/ProductInput';
import ProductList from './components/ProductList';

function App(){

    const [products, setProducts] = useState([]);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    }

    const handleProductPriceChange = (e) => {
        setProductPrice(e.target.value);
    }

    const productAdd = () => {
        const newId = products.length > 0 ? Math.max(...products.map((p)=>p.id)) + 1 : 1;
        const newProduct = {id:newId, name:productName, price: parseFloat(productPrice) || 0};
        setProducts([...products, newProduct]);
        setProductName('');
        setProductPrice('');
    }

    const handleProductDelete = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    }

    // 計算價格總和
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

    return(
        <>  
            <h1>簡易購物車</h1>
            <ProductInput productName={productName} handleProductNameChange={handleProductNameChange} 
                          productPrice={productPrice} handleProductPriceChange={handleProductPriceChange}
                          productAdd={productAdd}/>
            <ProductList products={products} handleProductDelete={handleProductDelete} totalPrice={totalPrice}/>
        </>
    )
}
export default App;