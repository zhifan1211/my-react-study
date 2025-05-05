function ProductList({products, handleProductDelete, totalPrice}){
    return(
        <table border="1" cellpadding="10">
            <thead>
                <tr>
                    <th>ID</th><th>商品名稱</th><th>商品單價</th><th>移除商品</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td align="right">{product.price}</td>
                            <td>
                                <button onClick={()=>handleProductDelete(product.id)}>X</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="2" align="right">總金額：</td>
                    <td align="right">{totalPrice}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    )
}
export default ProductList