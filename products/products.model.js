const products = [
    {
        id:"redshoe",
        description: "Red Shoe",
        price: 45.99,
        reviews: []
    },
    {
        id:"blueshoe",
        description: "Blue Shoe",
        price: 46.99,
        reviews: []
    },
];

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter((product)=>{
        return product.price >= min && product.price <= max;
    });
}

function getProductsById(id) {
    return products.find((product) => {
      return product.id === id;
    });
}

function addNewProduct(id, description, price) {
    const newProduct = {
      id,
      price,
      description,
      reviews: []
    };
    products.push(newProduct);
    return newProduct;
  }
  
  function addNewProductReview(id, rating, comment) {
    const matchedProduct = getProductsById(id);
    if (matchedProduct) {
      const newProductReview = {
        rating,
        comment,
      };
  
      matchedProduct.reviews.push(newProductReview);
  
      return newProductReview;
    }
  }

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductsById,
    addNewProduct,
    addNewProductReview
}