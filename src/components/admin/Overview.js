import React, { useState, useEffect } from "react";
import axios from "axios";
import { FidgetSpinner } from "react-loader-spinner";
import environment from "../../environment";
import Coupon from "./Coupon";

const Overview = () => {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    axios
      .get(`${environment[0]}/server/endpoints/coupon/all.php`)
      .then((response) => {
        console.log(response);
        if (response.data.code === 200) {
          setCoupons(response.data.coupons);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex mx-auto justify-center h-40 items-center">
        <FidgetSpinner
          visible={true}
          height="100"
          width="100"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#003e21", "#067242", "#098b54"]}
          backgroundColor="#f8d098"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-col my-2 px-2 flex-wrap">
      <div>
        <h1 className="text-3xl mb-3 mt-5 mx-2">
          Hej {localStorage.getItem("name")}
        </h1>
        {coupons.map((coupon) => {
          return <Coupon key={coupon.coupons_id} coupon={coupon} />;
        })}
      </div>
    </div>
  );
};

export default Overview;
