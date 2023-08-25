import React, { useState, useEffect } from "react";
import CardProduct from "../../components/CardProduct";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";


export default function CatalogSearch() {
  const products = useSelector((state) => state.product?.searchedProducts);

  const [sortedProducts, setSortedProducts] = useState(
    products?.findProduct || []
  );
  const sortLowToHigh = () => {
    const sorted = [...(products?.findProduct || [])].sort(
      (a, b) => a.price - b.price
    );
    setSortedProducts(sorted);
  };

  const sortHighToLow = () => {
    const sorted = [...(products?.findProduct || [])].sort(
      (a, b) => b.price - a.price
    );
    setSortedProducts(sorted);
  };
  useEffect(() => {
    setSortedProducts(products?.findProduct || []);
  }, [products]);

  var style = {
    height: '100%'
  };
  
  if (products?.totalProducts < 9) {
    style = {
      height: '100vh'
    };
  }

  return (
    <div className=" flex flex-col m-6 container mx-auto gap-4" style={style}>
      {products?.totalProducts === 0 ? (
        <div className=" flex flex-col items-center gap-10 justify-center">
          <span className="flex justify-center text-xl text-red-500 font-bold">
            Lỗi: Không tìm thấy sản phẩm cho từ khóa {" "}
            <b className="mx-1">'{products?.keyword}'</b>
          </span>
          
          <img src="/logo/small.png" alt="logo" className=" rounded-lg w-52 h-52 "/>
          <span className="flex justify-center text-xl text-black font-bold ">
            Opps Sorry! Không tìm thấy sản phẩm
          </span>
        </div>
      ) : (
        <span className="flex justify-center text-xl text-gray-500">
          Tìm thấy <b className="mx-1">{products?.totalProducts}</b> sản phẩm
          cho từ khóa <b className="mx-1">'{products?.keyword}'</b>
        </span>
      )}

      {products?.totalProducts > 0 && (
        <div className="flex flex-col gap-2 ml-8">
          <div className=" text-3xl text-gray-500 font-bold">Filter</div>
          <div>
            <div className=" flex gap-5 cursor-pointer">
              <p
                className=" flex justify-center items-center bg-slate-300 p-3 hover:bg-slate-400 hover:duration-200 rounded-xl gap-2"
                onClick={sortHighToLow}
              >
                <KeyboardDoubleArrowUpIcon sx={{ color: "blue" }} />
                Giá cao
              </p>
              <p
                className=" flex justify-center items-center bg-slate-300 p-3 hover:bg-slate-400 hover:duration-200 rounded-xl gap-2"
                onClick={sortLowToHigh}
              >
                <KeyboardDoubleArrowDownIcon sx={{ color: "blue" }} />
                Giá thấp
              </p>
            </div>
          </div>
        </div>
      )}

      {products?.totalProducts > 0 && (
        <div className=" flex flex-row p-4 flex-wrap gap-5">
          {sortedProducts.map((product) => (
            <div className=" w-[284px] xl:w-[296px] lg:w-[316px] md:w-[358px] sm:w-[294px] xsm:w-[270px]">
              <CardProduct
                key={product._id}
                id={product._id}
                name={product.title}
                price={product.price}
                brand={product.brand}
                thumbnail={product.thumbnail}
                description={product.description}
                slug={product.slug}
              />
            </div>
          ))}
        </div>
      )}
      {products?.totalProducts > 0 && (
        <div className=" flex items-center justify-center text-xl w-43 gap-2 bg-slate-300 p-4 hover:bg-slate-400 hover:duration-200 rounded-xl cursor-pointer self-center">
          <span>Xem thêm</span>
          <KeyboardArrowDownIcon />
        </div>
      )}
    </div>
  );
}


