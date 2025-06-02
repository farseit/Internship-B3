"use client";

import { useState } from "react";
import Rating from "@mui/material/Rating";
import { MdVerifiedUser } from "react-icons/md";
import { BiSolidCommentEdit } from "react-icons/bi";

export default function Review({ userName }) {
  const [value, setValue] = useState(0);
  const [click, setClick] = useState(false);

  return (
    <>
      {!click ? (
        <div className="flex flex-col">
          <form className="flex flex-col gap-3">
            <div className="">
              <p className="text-lg font-semibold text-primary">
                Rate this product
              </p>
              <p className="text-xs">Tell others what you think</p>
            </div>
            <div className="flex justify-between items-center">
              <Rating
                name="star"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                sx={{
                  fontSize: "2.5rem",
                }}
              />
              <p className="text-[2rem] font-bold text-[rgba(0,128,0,0.5)]">
                {value}
              </p>
            </div>
            <p
              className="hover:text-[blue] text-[rgba(0,0,255,0.5)] cursor-pointer font-semibold w-fit px-[0.5rem] rounded-lg hover:bg-[rgba(0,0,0,0.07)]"
              onClick={() => {
                setClick(true);
              }}
            >
              Write a review
            </p>

            {click && (
              <input
                type="text"
                name="comment"
                className="pl-2 border-2 border-[blue] py-[1rem]"
                placeholder="Describe your brief thought..."
              />
            )}

            {click && (
              <button
                className="border bg-[rgba(0,128,0,0.2)] w-fit px-3 rounded-xl py-[0.5rem] font-bold text-[rgba(0,128,0,0.5)] hover:bg-white"
                type="button"
              >
                POST
              </button>
            )}
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <span className="">
            <Rating
              name="read-only"
              value={parseInt(value)}
              readOnly
              sx={{ fontSize: "1rem" }}
            />
            <div className="flex gap-1">
              <p className="text-xs font-semibold text-[rgba(0,128,0,0.7)]">
                {userName}
              </p>
              <span>
                <MdVerifiedUser color="rgba(0,128,0,0.5)" />
              </span>
              <p className="text-[0.65rem] font-extralight text-[blue]">
                Verified Customer
              </p>
            </div>
          </span>

          <div className="flex">
            <p className="w-[70%]">Amazing product!!!</p>
            <span className="flex justify-end w-[30%] items-center cursor-pointer">
              <BiSolidCommentEdit size={25} onClick={() => setClick(false)} />
            </span>
          </div>

          <form className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <Rating
                name="star_edit"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                sx={{
                  fontSize: "2.5rem",
                }}
              />
              <p className="text-[2rem] font-bold text-[rgba(0,128,0,0.5)]">
                {value}
              </p>
            </div>

            {click && (
              <input
                type="text"
                name="edit_comment"
                className="pl-2 border-2 border-[blue] py-[1rem]"
                placeholder="Describe your brief thought..."
              />
            )}

            {click && (
              <button
                className="border bg-[rgba(0,128,0,0.2)] w-fit px-3 rounded-xl py-[0.5rem] font-bold text-[rgba(0,128,0,0.5)] hover:bg-white"
                type="button"
              >
                UPDATE
              </button>
            )}
          </form>
        </div>
      )}
    </>
  );
}
