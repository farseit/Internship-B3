"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { useState, useMemo } from "react";
import { Rate, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { useWishlistContext } from "@/context/WishlistContext";

//dummy product for wishlist
import productlist from "@/public/data/product.json";
import Review from "@/components/Review/Review";

export default function ProductPage() {
  // Get the dynamic ID from the route params
  const { id } = useParams();

  // Convert the `id` to a number since `useParams` returns strings by default
  const numericId = Number(id);

  // Find the product with the matching ID
  const product1 = productlist.find((item) => item.id === numericId);
  const { wishlist, handleWishlistClick } = useWishlistContext();
  const isInWishlist = wishlist.some((item) => item.id === product1.id);
  //dummy data
  const icons = useMemo(
    () => [
      { id: 1, src: "/img/icons/social/facebook.png" },
      { id: 2, src: "/img/icons/social/google.png" },
      { id: 3, src: "/img/icons/social/instagram.png" },
      { id: 4, src: "/img/icons/social/twitter.png" },
    ],
    []
  );

  const product = useMemo(
    () => [
      {
        id: 1,
        name: "Watch",
        colors: ["red", "black", "pink", "gray"],
        images: [
          "/img/Product/watch/watch1.jpg",
          "/img/Product/watch/watch2.jpg",
          "/img/Product/watch/watch3.jpg",
          "/img/Product/watch/watch4.jpg",
        ],
      },
    ],
    []
  );

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedImage, setSelectedImage] = useState(product[0].images[0]); // Default to the first image
  const [count, setCount] = useState(0);

  //magnifying prop
  const magnifierHeight = 300;
  const magnifierWidth = 300;
  const zoomLevel = 2;
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className=" flex items-center justify-center lg:h-[800px] mb-20 mx-auto container">
      <div className="lg:flex gap-2 px-2 sm:p-0">
        <div className="image-holder flex flex-col gap-3 ">
          {/* main image box */}
          <div className="main-image relative max-w-[520px] rounded-lg overflow-hidden bg-slate-500">
            <Image
              src={selectedImage}
              alt="alt"
              width={1800}
              height={1800}
              className="object-cover max-h-[650px] "
              onMouseEnter={(e) => {
                const elem = e.currentTarget;
                const { width, height } = elem.getBoundingClientRect();
                setImgWidth(width);
                setImgHeight(height);
                setShowMagnifier(true);
              }}
              onMouseMove={(e) => {
                const elem = e.currentTarget;
                const { top, left } = elem.getBoundingClientRect();
                const x = e.pageX - left - window.scrollX;
                const y = e.pageY - top - window.scrollY;
                setXY([x, y]);
              }}
              onMouseLeave={() => {
                setShowMagnifier(false);
              }}
            />
            {showMagnifier && (
              <div
                className="absolute lg:block hidden pointer-events-none border border-[#192a56] bg-white rounded-full"
                style={{
                  height: `${magnifierHeight}px`,
                  width: `${magnifierWidth}px`,
                  top: `${y - magnifierHeight / 2}px`,
                  left: `${x - magnifierWidth / 2}px`,
                  backgroundImage: `url('${selectedImage}')`,
                  backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel
                    }px`,
                  backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2
                    }px`,
                  backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2
                    }px`,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "opacity 0.3s ease",
                }}
              />
            )}
          </div>
          <div className=" absolute translate-y-10 flex items-center justify-center text-white font-bold w-12 h-12 bg-primary rounded-full">
            New
          </div>
          {/* image selector */}
          <button className="flex justify-between">
            {product[0].images.map((image, index) => (
              <Image
                key={index}
                src={image}
                onClick={() => setSelectedImage(image)}
                alt={`Product ${index + 1}`}
                width={400}
                height={400}
                className={`rounded-lg object-cover w-[22%] min-h-[100px] max-h-[100px] bg-white border-2 hover:border-2  border-gray-400/20 ${selectedImage === image
                    ? "disabled"
                    : "hover:border-yellow-400"
                  } ${selectedImage === image
                    ? "border-[#192a56] border-2 "
                    : "border-gray-400/20"
                  }`}
              />
            ))}
          </button>
        </div>
        <div className="info-holder flex flex-col gap-8 mt-4 lg:mt-0 bg-slate-400/10 p-5 rounded-lg lg:min-w-[550px] max-w-[550px] ">
          <div>
            <h1 className="text-xl font-semibold ">
              Apple 42 mm Smart Watches
            </h1>
            <span className="text-[0.9rem] text-gray-400">Smart Watches</span>
          </div>
          <div className="flex justify-between lg:items-center">
            <div>
              {/* {Review read only from antd} */}
              <Rate disabled defaultValue={4} />
              <div className="flex gap-2 items-center mb-2">
                <span className="text-xs">3 Reviews</span>
              </div>
              <Review />
            </div>
            <div className="flex md:gap-2 font-semibold md:text-[0.9rem] text-xs">
              <span className="px-3 lg:py-2 rounded-full flex items-center justify-center">
                Availablity
              </span>
              <span className="px-3 lg:py-2 bg-primary text-white rounded-full flex items-center justify-center">
                In stock
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400 text-sm pl-1">82 Available</span>
            <span className="text-2xl font-semibold text-yellow-500">
              $1,500.00
            </span>
          </div>
          <div className="text-sm flex flex-col gap-2">
            <span className="">
              This Apple 42 mm Smart Watch is a top-of-the-line wearable device
              that combines style and functionality. It features a sleek design,
              advanced health monitoring capabilities, and seamless integration
              with other Apple products. Whether you're tracking your fitness
              goals or staying connected on the go, this smart watch has you
              covered.
            </span>
            <span>
              <span className="font-bold ">SKU:</span> PWT116896718
            </span>
          </div>
          <div className="flex justify-between max-w-[22rem]">
            {/* {color selector} */}
            <div>
              <div className="flex p-2 gap-2 items-center ">
                <span className="font-bold ">Color:</span>
                <div className="flex space-x-2">
                  {product[0].colors.map((color) => (
                    <Tooltip title={color} key={color}>
                      <div
                        key={color}
                        className={`w-6 h-6 cursor-pointer border-2  ${selectedColor === color
                            ? "border-blue-800 border-2 border-glow"
                            : "border-gray-300"
                          }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setSelectedColor(color)}
                      ></div>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>
            <div className=" shadow-sm flex items-center gap-10 font-semibold bg-white text-xs md:text-base rounded-full">
              <button
                className=" px-3 py-1 border-r text-lg"
                onClick={handleDecrement}
              >
                -
              </button>
              <span>{count}</span>
              <button
                className=" px-3 py-1 border-l text-lg"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex gap-8">
            <button className="bg-primary shadow-sm text-white font-bold md:px-12 px-3 text-sm md:text-base py-2 rounded-full">
              Add to Cart
            </button>
            {/* <button>
              <FontAwesomeIcon icon={faSyncAlt} className="w-5 h-5 mr-2" />
              Compare
            </button> */}
            {/*on click a mainly product will the product pass,*/}
            <button
              onClick={() => handleWishlistClick(product1)}
              className="flex items-center gap-2"
            >
              {" "}
              <FontAwesomeIcon
                icon={isInWishlist ? solidHeart : regularHeart}
                className={`text-2xl ${isInWishlist ? "text-red-500" : "text-black"
                  }`}
              />
              Wishlist
            </button>
          </div>
          <div className="mt-10 flex gap-5">
            <span className="font-bold">Share</span>
            <div className="flex gap-8">
              {icons.map((icon, index) => {
                return (
                  <Link href={"/"} key={icon.id}>
                    <Image src={icon.src} alt="alt" width={20} height={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
