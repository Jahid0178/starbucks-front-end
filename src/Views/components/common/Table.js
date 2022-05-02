import React from "react";
export const Table = ({
  data: { date, title, details, status, quantity, unitPrice, amount },
}) => {
  return (
    <>
      <tr className="hover:bg-green-100 cursor-pointer">
        <td className="p-2">
          <input type="checkbox" name="" id="" />
        </td>
        <td className="p-2">{date}</td>
        <td className="p-2">{title}</td>
        <td className="p-2">{details}</td>
        <td className="p-2">
          {status}{" "}
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
        <td className="p-2">${unitPrice}</td>
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
