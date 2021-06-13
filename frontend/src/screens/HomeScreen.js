import React from 'react'
import{Row, Col}from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'
const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
               {products.map(product =>(
                   <Col sm={'auto'} md ={'auto'} lg={'auto'} xs={'auto'}>
                    <Product product={product}/>
                   </Col>
               ))}
            </Row>
        </>
    )
}

export default HomeScreen


