import React from "react";
export const Table = ({
  data: { date, title, details, status, quantity, unitPrice, amount },
}) => {
  return (
    <>
      <tr className="hover:bg-green-100 cursor-pointer">
        <td className="p-2 hidden sm:inline-block">
          <input type="checkbox" name="" id="" />
        </td>
        <td className="p-2 hidden sm:inline-block">{date}</td>
        <td className="p-2">{title}</td>
        <td className="p-2 hidden lg:block">{details}</td>
        <td className="p-2">
          <span className="hidden sm:inline-block">{status}</span>{" "}
          <span
            className="ml-1"
            style={{
              ...statusIndicator,
              backgroundColor:
                status === "Alright"
                  ? "#44C776"
                  : status === "In Progress"
                  ? "#F58A28"
                  : "#F52828",
            }}
          ></span>{" "}
        </td>
        <td className="p-2">{quantity}</td>
        <td className="p-2 hidden lg:block">${unitPrice}</td>
        <td className="p-2 text-right">${amount}</td>
      </tr>
    </>
  );
};

let statusIndicator = {
  width: "10px",
  height: "10px",
  background: "#000",
  display: "inline-block",
  borderRadius: "50%",
};
