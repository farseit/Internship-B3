"use client";
import { useWishlistContext } from "@/context/WishlistContext";
import WishlistProductCard from "@/components/Wishlist/WishlistProductCard";

const WishList = () => {
  const { wishlist } = useWishlistContext();


  return (
    <div className="flex flex-col items-center px-[2%] py-[2%] gap-10">
      <div className="text-3xl font-bold">My WishList</div>
      {wishlist.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 w-full justify-center">
          {wishlist.map((item) => (
            <WishlistProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div className="text-xl">No products added</div>
      )}
    </div>
  );
};

export default WishList;
