import Radio from "../components/radio";
import {useState} from "react";

export default function RadioDemo() {
    const [selected, setSelected] = useState("credit");
  return (
    <div className="p-4 space-y-4">
      <Radio
        id="credit"
        name="payment"
        value="credit"
        label="Credit Card"
        checked={selected === "credit"}
        onChange={setSelected}
        description="Pay with VISA, MasterCard, etc."
      />

      <Radio
        id="paypal"
        name="payment"
        value="paypal"
        label="PayPal"
        checked={selected === "paypal"}
        onChange={setSelected}
        description="Use your PayPal account."
      />

      <Radio
        id="cod"
        name="payment"
        value="cod"
        label="Cash on Delivery"
        checked={selected === "cod"}
        onChange={setSelected}
        description="Pay in cash when your order arrives."
        
      />
    </div>
  );
}