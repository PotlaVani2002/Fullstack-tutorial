import { useEffect, useState } from 'react';

export function NestedIterations() {
    const [items] = useState([
        { category: 'Electronics', products: ['TV', 'Mobile'] },
        { category: 'FooterWear', products: ['Sandals', 'Casuals', 'Boots', 'Sneakers'] }
    ]);

    return (
        <div>
            <h2>Menu</h2>
            <ol>
                {
                    items.map(item => (
                        <li key={item.category}>
                            {item.category}
                            <ul>
                                {
                                    item.products.map(product => (
                                        <li key={product}>{product}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}
