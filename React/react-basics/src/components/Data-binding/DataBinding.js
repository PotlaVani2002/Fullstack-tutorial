import React from 'react'

export default function DataBinding() {
    var id=1;
    var name="Sansung TV";
    var price=45000.44;
    var stock=true;
  return (
    <div>
      <h2>Product Details</h2>
      <dl>
        <dt>Product ID</dt>
        <dd>{id}</dd>
        <dt>Name</dt>
        <dd>{name}</dd>
        <dt>price</dt>
        <dd>{price}</dd>
        <dt>Stock</dt>
        <dd>{(stock==true)?"Available":"out of Stock"}</dd>
      </dl>
    </div>
  )
}
