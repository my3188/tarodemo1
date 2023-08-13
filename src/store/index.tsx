import React, { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
// import { getHotelList } from "@/server/index";

function useMyList() {
  let [hotelList, setHotelList] = useState<string[]>([]);
  useEffect(() => {
    console.log("---useHotelList--->>>>>");
    setHotelList(['A1','A2','A3']);

  }, []);
  return hotelList;
}
// export default  useHotelList
const MyState = createContainer(useMyList);
export default MyState;
