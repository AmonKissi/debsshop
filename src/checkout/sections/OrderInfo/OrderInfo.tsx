import { DeliverySection } from "./DeliverySection";
import { PaymentSection } from "./PaymentSection";
import { Section } from "./Section";
import { Address } from "@/checkout/components/Address";
import { useOrder } from "@/checkout/hooks/useOrder";

export const OrderInfo = () => {
	const {
		order: { deliveryMethod, shippingAddress, billingAddress, userEmail },
	} = useOrder();

	return (
		<section className="mt-8">
			<PaymentSection />
			<DeliverySection deliveryMethod={deliveryMethod} />
			<Section title="Coordonnées">
				<p>{userEmail}</p>
			</Section>
			{shippingAddress && (
				<Section title="Adresse de livraison">
					<Address address={shippingAddress} />
				</Section>
			)}
			{billingAddress && (
				<Section title="Adresse de facturation">
					<Address address={billingAddress} />
				</Section>
			)}
		</section>
	);
};
