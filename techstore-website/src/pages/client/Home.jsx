import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import ListCardProduct from "../../components/ListCardProduct";
import { useDispatch, useSelector } from "react-redux";
import Widget from "../../components/Widget";
import SkeletonProduct from "../../components/SkeletonProduct";

import {
  getLimitProducts,
  resetState,
} from "../../features/product/productSlice";
import { getCategoryBrands } from "../../features/pcategory/pcategorySlice";
export default function Home() {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  let { products, isLoading, isSuccess, isError } = productState;
  useEffect(() => {
    dispatch(resetState());
    if (products) {
      let params = {
        // limit: 200,
        // skip: 130,
      };
      dispatch(getCategoryBrands());
      dispatch(getLimitProducts(params));
    }
  }, []);
  let productsPhone = products.filter(
    (product) => product.category === "Phone"
  );
  let productsLaptop = products.filter(
    (product) => product.category === "Laptop"
  );
  let productsWatch = products.filter(
    (product) => product.category === "Watch"
  );
  let productsTablet = products.filter(
    (product) => product.category === "Tablet"
  );
  let productsHeadphone = products.filter(
    (product) => product.category === "Headphone"
  );
  let productsTV = products.filter((product) => product.category === "TV");
  let productsScreenPC = products.filter(
    (product) => product.category === "ScreenPC"
  );
  return (
    <div className=" flex flex-col gap-6">
      <Banner />
      {isLoading ? (
        <div className=" flex flex-col gap-6">
          <SkeletonProduct type={"ĐIỆN THOẠI"} />
          <SkeletonProduct type={"LAPTOP"} />
          <SkeletonProduct type={"ĐỒNG HỒ"} />
          <SkeletonProduct type={"TABLET"} />
          <SkeletonProduct type={"TAI NGHE"} />
          <SkeletonProduct type={"TIVI"} />
          <SkeletonProduct type={"MÀN HÌNH PC"} />
        </div>
      ) : (
        <div className=" flex flex-col gap-6">
          <ListCardProduct type={"ĐIỆN THOẠI"} productState={productsPhone} />
          <ListCardProduct type={"LAPTOP"} productState={productsLaptop} />
          <ListCardProduct type={"ĐỒNG HỒ"} productState={productsWatch} />
          <ListCardProduct type={"TABLET"} productState={productsTablet} />
          <ListCardProduct
            type={"TAI NGHE"}
            productState={productsHeadphone}
          />
          <ListCardProduct type={"TIVI"} productState={productsTV} />
          <ListCardProduct type={"MÀN HÌNH PC"} productState={productsScreenPC} />
        </div>
      )}

      <Widget />
    </div>
  );
}
