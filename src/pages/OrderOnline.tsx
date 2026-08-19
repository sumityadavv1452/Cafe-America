import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShoppingBag, Trash2, Plus, Minus, ArrowLeft, CheckCircle, ExternalLink, Calendar, MapPin } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const deliveryPartners = [
  { name: "DoorDash", url: "https://www.doordash.com", color: "#FF3008" },
  { name: "Uber Eats", url: "https://www.ubereats.com", color: "#000000" },
  { name: "Caviar", url: "https://www.trycaviar.com", color: "#FF6600" }
];

export default function OrderOnline() {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  
  const [form, setForm] = useState({ name: "", phone: "", time: "15" });
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [completedOrderDetails, setCompletedOrderDetails] = useState<any>(null);

  const tax = cartTotal * 0.0825; // 8.25% CA Sales Tax
  const finalTotal = cartTotal + tax;

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", phone: "" };

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
      isValid = false;
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (form.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid 10-digit number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setCompletedOrderDetails({
        orderNumber: `CA-${Math.floor(100000 + Math.random() * 900000)}`,
        name: form.name,
        phone: form.phone,
        time: form.time,
        items: [...cart],
        total: finalTotal
      });
      setOrderComplete(true);
      clearCart();
    }, 1500);
  };

  if (orderComplete && completedOrderDetails) {
    return (
      <div className="flex flex-col w-full bg-[#FDFAF7] min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-2xl bg-white border border-[#E8DDD5] p-8 md:p-12 shadow-soft text-center mt-12 rounded-2xl">
          
          <div className="w-16 h-16 bg-[#7D8B69]/10 border border-[#7D8B69]/30 flex items-center justify-center text-[#7D8B69] rounded-full mx-auto mb-6">
            <CheckCircle className="w-8 h-8" />
          </div>

          <h2 className="text-3xl font-serif font-black uppercase text-[#3C2415] mb-2 tracking-tight">
            Order Confirmed!
          </h2>
          <p className="text-[#6B5B4E] text-sm font-light mb-8">
            Thank you for ordering. Your fresh items are being prepared by Chef Julian.
          </p>

          {/* Receipt details */}
          <div className="border border-[#E8DDD5] bg-[#FDFAF7] p-6 text-left space-y-4 mb-8 rounded-xl">
            <div className="flex justify-between border-b border-[#E8DDD5] pb-3 text-xs font-bold text-[#2D2926] uppercase tracking-wider">
              <span>Order Number</span>
              <span className="text-[#C17849] font-sans">{completedOrderDetails.orderNumber}</span>
            </div>
            
            <div className="space-y-2 border-b border-[#E8DDD5] pb-3">
              {completedOrderDetails.items.map((item: any) => (
                <div key={item.id} className="flex justify-between text-sm text-[#6B5B4E]">
                  <span>{item.quantity}x {item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-base font-bold text-[#3C2415]">
              <span>Amount Paid</span>
              <span>${completedOrderDetails.total.toFixed(2)}</span>
            </div>
          </div>

          {/* Pickup Directions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left border-t border-[#E8DDD5] pt-8 mb-8 text-sm">
            <div className="flex gap-3">
              <Calendar className="w-5 h-5 text-[#C17849] shrink-0" />
              <div>
                <h4 className="font-bold text-[#3C2415] uppercase text-xs tracking-wider mb-1">Pickup Time</h4>
                <p className="text-[#6B5B4E] font-light">In {completedOrderDetails.time} minutes ({new Date(Date.now() + parseInt(completedOrderDetails.time) * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })})</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-[#C17849] shrink-0" />
              <div>
                <h4 className="font-bold text-[#3C2415] uppercase text-xs tracking-wider mb-1">Pickup Address</h4>
                <p className="text-[#6B5B4E] font-light">12932 Newport Ave, Tustin, CA</p>
              </div>
            </div>
          </div>

          <Link href="/menu">
            <button className="px-8 py-3.5 bg-[#3C2415] hover:bg-[#C17849] text-white text-xs font-semibold tracking-widest uppercase transition-bounce hover:-translate-y-0.5 rounded-full cursor-pointer">
              Order Something Else
            </button>
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-[#FDFAF7] min-h-screen">
      
      {/* Page Header */}
      <div className="bg-[#3C2415] py-16 text-center text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-serif font-black uppercase tracking-tight mb-2 text-[#FDFAF7]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your Order Checkout
          </motion.h1>
          <p className="text-[#FDFAF7]/80 max-w-xl mx-auto text-xs md:text-sm font-light tracking-wide leading-relaxed">
            Fresh artisan coffees and organic kitchen plates ready in minutes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Cart Items and Details */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-white border border-[#E8DDD5] p-6 md:p-8 shadow-soft rounded-2xl">
              <div className="flex items-center gap-3 border-b border-[#E8DDD5] pb-5 mb-6">
                <ShoppingBag className="w-5 h-5 text-[#C17849]" />
                <h2 className="font-serif font-black text-xl text-[#3C2415] uppercase tracking-wide">
                  Order Summary
                </h2>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <p className="text-[#6B5B4E] font-light mb-6 text-sm">
                    Your shopping cart is currently empty.
                  </p>
                  <Link href="/menu">
                    <button className="px-8 py-3 bg-[#3C2415] hover:bg-[#C17849] text-white text-xs font-semibold tracking-widest uppercase transition-bounce hover:-translate-y-0.5 rounded-full cursor-pointer">
                      Browse The Menu
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-4 border-b border-[#E8DDD5] pb-5">
                      
                      {/* Product details */}
                      <div className="flex items-center gap-4 flex-1">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-14 h-14 object-cover border border-[#E8DDD5] rounded-xl flex-shrink-0"
                          />
                        )}
                        <div>
                          <h3 className="font-serif font-bold text-sm text-[#3C2415] uppercase tracking-wide">
                            {item.name}
                          </h3>
                          <span className="text-xs text-[#C17849] font-semibold block mt-1">
                            ${item.price.toFixed(2)} each
                          </span>
                        </div>
                      </div>

                      {/* Quantity Incrementor */}
                      <div className="flex items-center gap-2 border border-[#E8DDD5] px-3 py-1 rounded-full bg-[#FDFAF7]">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-[#6B5B4E] hover:text-[#C17849] cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center font-bold text-xs text-[#2D2926]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-[#6B5B4E] hover:text-[#C17849] cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-[#6B5B4E] hover:text-red-500 cursor-pointer transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4.5 h-4.5" />
                      </button>

                    </div>
                  ))}
                  
                  <Link href="/menu">
                    <button className="flex items-center gap-1.5 text-xs font-semibold text-[#C17849] hover:text-[#3C2415] uppercase tracking-widest transition-colors cursor-pointer mt-4">
                      <ArrowLeft className="w-3.5 h-3.5" /> Add more items
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {/* Delivery Platforms Secondary Panel */}
            <div className="bg-white border border-[#E8DDD5] p-6 md:p-8 shadow-soft rounded-2xl">
              <h3 className="font-serif font-black text-lg text-[#3C2415] uppercase tracking-wide mb-2">
                Need Delivery Instead?
              </h3>
              <p className="text-[#6B5B4E] text-xs font-light leading-relaxed mb-6">
                Online orders on this website are for **pickup only**. If you prefer delivery to your doorstep, order via our official delivery partners:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {deliveryPartners.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 border border-[#E8DDD5] hover:border-[#C17849] rounded-xl text-xs font-semibold uppercase tracking-wider text-[#2D2926] hover:bg-[#FDFAF7] transition-all"
                  >
                    <span>{platform.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#6B5B4E]" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Checkout Info */}
          <div className="bg-white border border-[#E8DDD5] p-6 md:p-8 shadow-soft rounded-2xl space-y-6">
            <h3 className="font-serif font-black text-lg text-[#3C2415] uppercase tracking-wide border-b border-[#E8DDD5] pb-3">
              Checkout Details
            </h3>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between font-light text-[#6B5B4E]">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-light text-[#6B5B4E]">
                <span>Sales Tax (8.25%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-[#3C2415] text-base pt-2 border-t border-[#E8DDD5]">
                <span>Total Amount</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Pickup Form */}
            <form onSubmit={handlePlaceOrder} className="space-y-4 pt-4 border-t border-[#E8DDD5]">
              <div className="space-y-1.5">
                <Label htmlFor="pickupName" className="text-xs font-semibold uppercase tracking-wider text-[#2D2926]">
                  Full Name
                </Label>
                <Input
                  id="pickupName"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  disabled={cart.length === 0}
                  className={`h-11 rounded-xl border-[#E8DDD5] bg-[#FDFAF7] text-[#2D2926] focus-visible:ring-[#C17849] ${
                    errors.name ? "border-red-500 focus-visible:ring-red-400" : ""
                  }`}
                />
                {errors.name && (
                  <span className="text-[10px] font-bold text-red-500 uppercase tracking-wide block mt-1">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="pickupPhone" className="text-xs font-semibold uppercase tracking-wider text-[#2D2926]">
                  Phone Number
                </Label>
                <Input
                  id="pickupPhone"
                  placeholder="e.g. 714-544-6961"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  disabled={cart.length === 0}
                  className={`h-11 rounded-xl border-[#E8DDD5] bg-[#FDFAF7] text-[#2D2926] focus-visible:ring-[#C17849] ${
                    errors.phone ? "border-red-500 focus-visible:ring-red-400" : ""
                  }`}
                />
                {errors.phone && (
                  <span className="text-[10px] font-bold text-red-500 uppercase tracking-wide block mt-1">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="pickupTime" className="text-xs font-semibold uppercase tracking-wider text-[#2D2926]">
                  Pickup In
                </Label>
                <select
                  id="pickupTime"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  disabled={cart.length === 0}
                  className="w-full h-11 px-3 border border-[#E8DDD5] outline-none focus:border-[#C17849] focus:ring-1 focus:ring-[#C17849] text-sm text-[#2D2926] bg-[#FDFAF7] rounded-xl"
                >
                  <option value="15">15 Minutes</option>
                  <option value="20">20 Minutes</option>
                  <option value="30">30 Minutes</option>
                  <option value="45">45 Minutes</option>
                </select>
              </div>

              {/* Order Button */}
              <button
                type="submit"
                disabled={cart.length === 0 || isSubmitting}
                className="w-full h-12 bg-[#3C2415] hover:bg-[#C17849] text-white font-sans font-semibold text-xs uppercase tracking-widest transition-bounce hover:-translate-y-0.5 rounded-full flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "PLACE PICKUP ORDER"
                )}
              </button>

            </form>
          </div>

        </div>
      </div>

    </div>
  );
}
