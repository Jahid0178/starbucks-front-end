import React from "react";
export const Table = (props) => {
  const { date, title, details, status, quantity, unitPrice, amount } =
    props.data;
  if (status === "Alright") {
    console.log("alright");
  } else if (status === "In Progress") {
    console.log("in progress");
  } else {
    console.log("out of stock");
  }
  return (
    <div>
      <ul className="grid grid-cols-[auto_1fr_1fr_2fr_1fr_1fr_1fr_1fr] items-center hover:bg-green-100 cursor-pointer">
        <li className="p-3">
          <input type="checkbox" name="" id="" />
        </li>
        <li className="p-2">{date}</li>
        <li className="p-2">{title}</li>
        <li className="p-2">{details}</li>
        <li className="p-2">{status}</li>
        <li className="p-2">{quantity}</li>
        <li className="p-2">{unitPrice}</li>
        <li className="p-2">{amount}</li>
      </ul>
    </div>
  );
};
