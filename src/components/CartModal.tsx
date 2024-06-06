"use client";

// import { useCartStore } from "@/hooks/useCartStore";
// import { media as wixMedia } from "@wix/sdk";
// import { useWixClient } from "@/hooks/useWixClient";
// import { currentCart } from "@wix/ecom";
import Image from "next/image";

const CartModal = () => {
  // TEMPORARY
  const cartItems = true;

  // const wixClient = useWixClient();
  // const { cart, isLoading, removeItem } = useCartStore();

  const handleCheckout = async () => {
    // try {
    //   const checkout =
    //     await wixClient.currentCart.createCheckoutFromCurrentCart({
    //       channelType: currentCart.ChannelType.WEB,
    //     });
    //
    //   const { redirectSession } =
    //     await wixClient.redirects.createRedirectSession({
    //       ecomCheckout: { checkoutId: checkout.checkoutId },
    //       callbacks: {
    //         postFlowUrl: window.location.origin,
    //         thankYouPageUrl: `${window.location.origin}/success`,
    //       },
    //     });
    //
    //   if (redirectSession?.fullUrl) {
    //     window.location.href = redirectSession.fullUrl;
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src={
                  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800"
                }
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">111</h3>
                    <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                      <div className="text-xs text-green-500">199 quantity</div>
                      100amount
                    </div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">status</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. quantity</span>
                  <span
                    className="text-blue-500"
                    // style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                    onClick={() => {}}
                  >
                    Remove
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$100000</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button
                className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                // disabled={isLoading}
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;