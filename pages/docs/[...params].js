import { useRouter } from "next/router";
import React from "react";

const CatchAll = () => {
  const router = useRouter();
  return <div>CatchAll {JSON.stringify(router.query.params)}</div>;
};

export default CatchAll;
