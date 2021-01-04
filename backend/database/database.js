import bcrypt from 'bcryptjs';

export default {
    users: [
        {
            name: 'Wassim',
            email: 'mh.wassim1@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'test',
            email: 'test@gmail.com',
            password: bcrypt.hashSync('123', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            // _id: '1',
            name: 'Product 1',
            category: 'Category 1',
            image: '/images/product-sample.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            // _id: '2',
            name: 'Product 2',
            category: 'Category 2',
            image: '/images/product-2.jpg',
            price: 90,
            countInStock: 20,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            // _id: '3',
            name: 'Product 3',
            category: 'Category 1',
            image: '/images/product-3.jpg',
            price: 50,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
        }
    ]
}
