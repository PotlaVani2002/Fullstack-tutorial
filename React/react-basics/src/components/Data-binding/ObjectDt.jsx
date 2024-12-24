import { useState, useEffect } from "react";
export function ObjectDt() {
    const [product, setProduct] = useState({});
    useEffect(() => {
        setProduct({ name: 'Samsung TV', price: 56000 });
    })
    return (
        <div>
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.name}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
            </dl>
            <h2>Keys</h2>
            <ul>
                {Object.keys(product).map(key=>{
                    <li key={key}>
                        {key}: {product[key]}
                    </li>
                })
                }
            </ul>
        </div>
    )
}