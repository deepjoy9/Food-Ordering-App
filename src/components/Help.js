import { useState } from "react";

const Section = (props) => {
  return (
    <div className=" my-4 border-b-2">
      <div className="flex justify-between">
        <h3 className=" text-lg">{props.title}</h3>
        {props.isVisible ? (
          <button
            className=" cursor-pointer border text-sm p-1 rounded-lg m-2"
            onClick={() => props.setIsVisible()}
          >
            Hide
          </button>
        ) : (
          <button
            className=" cursor-pointer border text-sm p-1 rounded-lg m-2"
            onClick={() => props.setIsVisible()}
          >
            Show
          </button>
        )}
      </div>

      {props.isVisible && <p className="m-2 my-1">{props.description}</p>}
    </div>
  );
};
const Help = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div className=" m-0 flex justify-center">
      <div className="w-3/5 h-auto p-10 bg-white my-5">
        <div className="heading text-3xl font-semibold font-serif my-5">
          FAQs
        </div>
        <div>
          <Section
            title={"How does the food ordering app work?"}
            description={
              "The food ordering app allows you to browse through a list of restaurants or food establishments, select the items you want to order, customize your order if necessary, and place the order. "
            }
            isVisible={visibleSection === "sec1"}
            setIsVisible={() =>
              setVisibleSection(visibleSection === "sec1" ? "" : "sec1")
            }
          />
          <Section
            title={" How can I pay for my food order?"}
            description={
              "Food ordering apps typically offer various payment options, including credit/debit card payments, digital wallets, and cash on delivery. You can choose the payment method that suits you best during the checkout process."
            }
            isVisible={visibleSection === "sec2"}
            setIsVisible={() =>
              setVisibleSection(visibleSection === "sec2" ? "" : "sec2")
            }
          />
          <Section
            title={"Is there a minimum order requirement?"}
            description={
              "Some restaurants may have a minimum order requirement for delivery, which means you must reach a certain total amount for the order to be eligible for delivery. This requirement varies from restaurant to restaurant, and the food ordering app will typically inform you if there is a minimum order limit."
            }
            isVisible={visibleSection === "sec3"}
            setIsVisible={() =>
              setVisibleSection(visibleSection === "sec3" ? "" : "sec3")
            }
          />
        </div>
      </div>
    </div>
  );
};
export default Help;
