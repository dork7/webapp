import { useRouter } from "next/router";
import React from "react";

const Review = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      Review Details of product {productId}, ReviewId {reviewId}
    </div>
  );
};

export default Review;
