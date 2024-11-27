import React from 'react';
import { Routes, Route } from "react-router-dom";
import ChoosenProduct from './ChosenProduct';
import Products from './Products';

export function ProductsPage() {
    return (
        <div className="products-page">
            <Routes>
                {/* Route for a specific product, relative to /products */}
                <Route path=":productId" element={<ChoosenProduct />} />
                
                {/* Route for the products list */}
                <Route path="/" element={<Products />} />
            </Routes>
        </div>
    );
}
