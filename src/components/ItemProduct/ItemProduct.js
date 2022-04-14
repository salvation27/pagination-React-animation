import React from "react";
import { motion } from "framer-motion";

const ItemProduct = ({ item }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1,scale:1 }}
      initial={{ opacity: 0,scale:0 }}
      exit={{ opacity: 0 ,scale:0}}
      className="item_product"
    >
      <div className="item_product_img">
        <img
          src="https://brooklynstore.com.ua/content/images/15/basketbolnye-krossovki-lebron-xiii-written-in-the-stars-id-27783995038933.jpg"
          alt=""
        />
      </div>
      <div className="item_product_name">{item.title}</div>
    </motion.div>
  );
};

export default ItemProduct;
