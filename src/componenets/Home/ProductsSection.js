import React from 'react';
import { Card, Button } from "react-bootstrap"

import MedicineStockist from "../../images/medicine stockist.png"
import CatalogMaker from "../../images/catalog maker.png"
import InvoiceMaker from "../../images/invoice maker.jpg"
import MuslimWeddingCardMaker from "../../images/muslim wedding card maker.png"
import BasicMarriageBiodataMaker from "../../images/basic marriage biodata maker.png"
import MuslimMarriageBiodataMaker from "../../images/muslim marriage biodata maker.png"

const ProductsSection = () => {
    return <div className='product-container'>
        <div className='product-header'>
            <h1>Our Products</h1>
            <p>We have a wide range of products in many fields</p>
        </div>
        <div className="product-demo">
            <Card className="products-part">
                <Card.Img variant="top" className="product-image" src={MedicineStockist} />
                <Card.Body>
                    <Card.Title>Medicine Stockist App</Card.Title>
                    <Card.Text>
                        Medicine Stockist :Manage Stock, Sale, Expiry
                    </Card.Text>
                    <a className='link-tag' href='https://play.google.com/store/apps/details?id=com.sts.medicinestockmanagement' target="_blank">View</a>
                </Card.Body>
            </Card>
            <Card className="products-part">
                <Card.Img variant="top" className="product-image" src={CatalogMaker} />
                <Card.Body>
                    <Card.Title>Catalog Maker App</Card.Title>
                    <Card.Text>
                        Catalog Maker : Create & Share Catalog PDF
                    </Card.Text>
                    <a className='link-tag' href='https://play.google.com/store/apps/details?id=com.asharinfotech.catalogmaker' target="_blank">View</a>
                </Card.Body>
            </Card>
            <Card className="products-part">
                <Card.Img variant="top" className="product-image" src={MuslimWeddingCardMaker} />
                <Card.Body>
                    <Card.Title>Muslim Wedding Card Maker</Card.Title>
                    <Card.Text>
                        Create wedding card so easily and professionally
                    </Card.Text>
                    <a className='link-tag' href='https://play.google.com/store/apps/details?id=com.asharinfotech.muslimweddingcard' target="_blank">View</a>
                </Card.Body>
            </Card>
            <Card className="products-part">
                <Card.Img variant="top" className="product-image" src={BasicMarriageBiodataMaker} />
                <Card.Body>
                    <Card.Title>Basic Marriage Biodata Maker App</Card.Title>
                    <Card.Text>
                        Create marriage biodata in a couple of minutes
                    </Card.Text>
                    <a className='link-tag' href='https://play.google.com/store/apps/details?id=com.asharinfotech.marriagebiodata' target="_blank">View</a>
                </Card.Body>
            </Card>
            <Card className="products-part">
                <Card.Img variant="top" className="product-image" src={MuslimMarriageBiodataMaker} />
                <Card.Body>
                    <Card.Title>Muslim Marriage Biodata Maker</Card.Title>
                    <Card.Text>
                        Create marriage biodata in a couple of minutes for muslim community
                    </Card.Text>
                    <a className='link-tag' href='https://play.google.com/store/apps/details?id=com.softwebtechsol.muslimmarriagebiodata' target="_blank">View</a>
                </Card.Body>
            </Card>
        </div>
    </div>
};

export default ProductsSection;
