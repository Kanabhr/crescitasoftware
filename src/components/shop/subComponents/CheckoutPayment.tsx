import Image from 'next/image';
import Link from 'next/link';

const CheckoutPayment = () => {
    return (
        <div className="tp-checkout-payment">
            <div className="tp-checkout-payment-item">
                <input type="radio" id="back_transfer" name="payment" />
                <label htmlFor="back_transfer" data-bs-toggle="direct-bank-transfer">Direct Bank Transfer</label>
                <div className="tp-checkout-payment-desc direct-bank-transfer">
                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                </div>
            </div>
            <div className="tp-checkout-payment-item">
                <input type="radio" id="cheque_payment" name="payment" />
                <label htmlFor="cheque_payment">Cheque Payment</label>
                <div className="tp-checkout-payment-desc cheque-payment">
                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                </div>
            </div>
            <div className="tp-checkout-payment-item">
                <input type="radio" id="cod" name="payment" />
                <label htmlFor="cod">Cash on Delivery</label>
                <div className="tp-checkout-payment-desc cash-on-delivery">
                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                </div>
            </div>
            <div className="tp-checkout-payment-item paypal-payment">
                <input type="radio" id="paypal" name="payment" />
                <label htmlFor="paypal">PayPal <Image width={160} height={24} src="/assets/img/login/payment-option.png" alt="payment option" /> <Link href="#">What is PayPal?</Link></label>
            </div>
        </div>
    );
};

export default CheckoutPayment;