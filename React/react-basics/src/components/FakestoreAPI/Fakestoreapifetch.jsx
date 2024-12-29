import { useState, useEffect } from "react";

export function Fakestoreapifetch() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        async function loadCategories() {
            try {
                const response = await fetch("https://fakestoreapi.com/products/categories");
                if (!response.ok) {
                    throw new Error("Failed to fetch categories");
                }
                const data = await response.json();
                setCategories(["All", ...data]);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        }

        async function loadProducts() {
            try {
                const response = await fetch("https://fakestoreapi.com/products/");
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        loadCategories();
        loadProducts();
    }, []);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter((product) => product.category === selectedCategory));
        }
    }, [selectedCategory, products]);

    return (
        <div>
            <header className="d-flex justify-content-between align-items-center m-2 p-2 bg-dark text-white">
                <h3>FAKESTORE</h3>
                <div>
                    {categories.map((category) => (
                        <span
                            className={`m-3 fs-5 ${category === selectedCategory ? "text-primary" : ""}`}
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            style={{ cursor: "pointer" }}
                        >
                            {category.charAt(0).toUpperCase() + category.substring(1)}
                        </span>
                    ))}
                </div>
                <div>
                    <span className="bi bi-search me-3 fs-5"></span>
                    <span className="bi bi-heart me-3 fs-5"></span>
                    <span className="bi bi-cart me-3 fs-5"></span>
                </div>
            </header>
            <main className="m-2 p-2 row justify-items-between">
                <div className=" mb-3 col-2">
                    <h2 className="me-3">Categories</h2>
                    <select
                        className="form-select w-auto"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map((category) => (
                            <option value={category} key={category}>
                                {category.charAt(0).toUpperCase() + category.substring(1)}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-10 d-flex flex-wrap justify-items-between">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={product.id} >
                                <div className="card p-2 m-2" style={{ width: "20rem"}}>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="card-img-top"
                                        style={{ height: "200px", objectFit: "contain" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">
                                            <strong>Price:</strong> ${product.price}
                                        </p>
                                        <p className="card-text text-muted">{product.description}</p>
                                        <p className="card-text">
                                            <strong>Category:</strong> {product.category}
                                        </p>
                                        <div className="d-flex align-items-center">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <span
                                                    key={i}
                                                    className={`bi ${
                                                        i < Math.round(product.rating.rate)
                                                            ? "bi-star-fill text-success"
                                                            : "bi-star"
                                                    }`}
                                                ></span>
                                            ))}
                                            <span className="ms-2">
                                                {product.rating.rate} ({product.rating.count})
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">No products available</div>
                    )}
                </div>
            </main>
        </div>
    );
}
