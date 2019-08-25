import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

class CartTotalsCheckout extends Component {
    render() {
        return (
            <div>
                <h4 className='text-uppercase my-auto'>Cart Totals</h4>
                <Card className='mt-3'>
                    <Card.Header>
                        {this.props.total} ITEMS
                    </Card.Header>
                    <Card.Body className='d-flex justify-content-between p-2 mt-3'>
                        <Card.Text>
                            Products Price
                        </Card.Text>
                        <Card.Text>
                            ${this.props.totalPrice}
                        </Card.Text>
                    </Card.Body>

                    <Card.Body className='d-flex justify-content-between p-2'>
                        <Card.Text>
                            Delivery
                        </Card.Text>
                        <Card.Text>
                            ${3.50}
                        </Card.Text>
                    </Card.Body>

                    <Card.Body className='d-flex justify-content-between p-2'>
                        <Card.Text>
                            Total
                        </Card.Text>
                        <Card.Text>
                            ${this.props.totalPrice + 3.50}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={this.props.handleNewOrder} variant='warning' block disabled={this.props.disabled}>
                            {this.props.buttonText}
                        </Button>
                        <h6 className='mt-3'>
                            WE ACCEPT:
                            <Image className="img-thumbnail" src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
                                   alt="payment options"/>
                        </h6>
                        <p style={{fontSize: '0.8em'}}>
                            Got a coupon code? Add it in the next step
                        </p>
                    </Card.Footer>
                </Card>

            </div>
        );
    }
}

export default CartTotalsCheckout;