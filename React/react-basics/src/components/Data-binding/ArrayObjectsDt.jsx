import {useEffect,useState} from 'react';
export function ArrayObjectsDt(){
    const [products]=useState([{Name:'TV',price:45000},
        {Name:'Mobile',price:12000}
    ])
    return(
        <div>
            <h2>Product Details</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=><tr key={product.Name}>
                           <td>{product.Name}</td>
                           <td>{product.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}