import React from "react";
import Image from "next/image";
import Link from "next/link";
const Post = ({ title, content, author }) => {
  return (
    <div className="w-full max-w-[500px]  mx-auto">
      <Link href="#vin" className="flex justify-start items-center gap-1 my-[10px] cursor-pointer">
        <Image
          className="rounded-full"
          src="https://cafefcdn.com/thumb_w/640/203337114487263232/2024/8/10/avatar1723282832833-17232828333211000667484.jpg"
          width="50"
          height="50"
          alt="image"
        />
        <h5 className="text-[14px] font-bold">Thiên thần nhỏ bé</h5>
      </Link>
      <Image
        className="rounded-lg "
        src="https://cafefcdn.com/thumb_w/640/203337114487263232/2024/8/10/avatar1723282832833-17232828333211000667484.jpg"
        width="500"
        height="400"
        alt="image"
      />
      <div className="flex gap-2 mt-[10px] px-[10px]">
        <div className="flex items-center">
          <i className="pi pi-heart" style={{ fontSize: "1.3rem" }}></i>
          <span className="px-[5px] text-[14px]">12+</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <i
            className="pi pi-comment flex items-center"
            style={{ fontSize: "1.3rem" }}
          ></i>
          <span className="px-[5px] text-[14px]">12+</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
