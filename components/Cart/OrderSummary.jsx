import React from "react";

const OrderSummary = ({ cartTotalPrice }) => {
  return (
    <div className="border p-4 rounded-md lg:w-[40%]">
      <div>
        <table className="w-full text-xl table-auto">
          <tbody>
            <tr>
              <td className="p-2">Original price</td>
              <td className="p-2 flex justify-end">{cartTotalPrice} $</td>
            </tr>
            <tr>
              <td className="p-2">Discount</td>
              <td className="p-2 flex justify-end text-green-400">00.00 $</td>
            </tr>
            <tr>
              <td className="p-2">Tax</td>
              <td className="p-2 flex justify-end">00.00 $</td>
            </tr>
            <hr />
            <tr className="font-bold">
              <td className="p-2 ">Total</td>
              <hr />
              <td className="p-2 flex justify-end">{cartTotalPrice} $</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderSummary;
