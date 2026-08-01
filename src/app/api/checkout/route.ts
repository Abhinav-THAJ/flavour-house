import { NextResponse } from "next/server";
import { api } from "@/lib/woocommerce";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formData, cart, paymentMethod, shippingFee, transactionId } = body;

    // WooCommerce requires first_name and last_name, so we split fullName if possible
    const nameParts = formData.fullName.trim().split(" ");
    const firstName = nameParts[0] || "Customer";
    const lastName = nameParts.slice(1).join(" ") || "";

    const isPaid = paymentMethod === "online";

    const orderData = {
      payment_method: isPaid ? "razorpay" : "cod",
      payment_method_title: paymentMethod === "cod" ? "Cash on Delivery" : "Razorpay (Online)",
      set_paid: isPaid,
      transaction_id: transactionId || "",
      billing: {
        first_name: firstName,
        last_name: lastName,
        address_1: formData.address,
        city: formData.city,
        state: formData.state,
        postcode: formData.pincode,
        country: "IN",
        email: formData.email,
        phone: formData.phone,
      },
      shipping: {
        first_name: firstName,
        last_name: lastName,
        address_1: formData.address,
        city: formData.city,
        state: formData.state,
        postcode: formData.pincode,
        country: "IN",
      },
      line_items: cart.map((item: any) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: shippingFee.toString(),
        },
      ],
    };

    if (!process.env.WC_STORE_URL || !process.env.WC_CONSUMER_KEY) {
      console.log("WooCommerce not configured, returning mock order.", orderData);
      return NextResponse.json({ id: "FH-MOCK-" + Math.floor(1000 + Math.random() * 9000) });
    }

    const response = await api.post("orders", orderData);
    
    return NextResponse.json({
      id: response.data.id,
      status: response.data.status,
    });
  } catch (error: any) {
    console.error("WooCommerce checkout error:", error.response?.data || error.message);
    return NextResponse.json(
      { error: "Failed to process order" },
      { status: 500 }
    );
  }
}
