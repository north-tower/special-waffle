import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Beach",
    visitors: 3.5,
    revenues: "active",

  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Pepsi",
    visitors: 2.2,
    revenues: "active",
    
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Super Bowl",
    visitors: 2.1,
    revenues: "active",
 
  },
  // {
  //   logo: "/images/brand/brand-04.svg",
  //   name: "VW",
  //   visitors: 1.5,
  //   revenues: "active",
  
  // },
  // {
  //   logo: "/images/brand/brand-05.svg",
  //   name: "Milk",
  //   visitors: 3.5,
  //   revenues: "active",

  // },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    {/* Active Ads Section */}
    <div className="flex justify-between items-center">
      <h4 className="text-xl font-semibold text-black dark:text-white">Active Ads</h4>
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
        <span className="text-sm font-medium text-white">6</span>
      </div>
    </div>
  
    {/* Top Performing Ads Table Title */}
    <h4 className="mb-6 text-xl font-semibold text-black dark:text-white mt-6">
      Top Performing Ads
    </h4>
  
    {/* Table Header */}
    <div className="flex flex-col">
      <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4">
        <div className="p-2.5 xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">Name</h5>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">Category</h5>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <h5 className="text-sm font-medium uppercase xsm:text-base">Status</h5>
        </div>
      </div>
  
      {/* Table Content */}
      {brandData.map((brand, key) => (
        <div
          className={`grid grid-cols-3 ${
            key === brandData.length - 1 ? "" : "border-b border-stroke dark:border-strokedark"
          }`}
          key={key}
        >
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            {/* <div className="flex-shrink-0">
              <Image src={brand.logo} alt="Brand" width={48} height={48} />
            </div> */}
            <p className="hidden text-black dark:text-white sm:block">{brand.name}</p>
          </div>
  
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">{brand.visitors}</p>
          </div>
  
          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">{brand.revenues}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  
  );
};

export default TableOne;
