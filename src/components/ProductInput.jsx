function ProductInput({productName, handleProductNameChange, productPrice, handleProductPriceChange, productAdd}){
    return(
        <div>
            <input type='text' value={productName} onChange={handleProductNameChange} placeholder="商品名稱"/>
            <input type='text' value={productPrice} onChange={handleProductPriceChange} placeholder='商品價格'/>
            <button onClick={productAdd}>新增商品</button>
        </div>
    )
}
export default ProductInput