const features = [
  {
    title: "Free Delivery",
    description: "For all orders over $50 Lorem ipsum dolor sit amet consecuter.",
  },
  {
    title: "90 Days Return",
    description: "If goods have problems Lorem ipsum dolor sit amet consecuter.",
  },
  {
    title: "Secure Payment",
    description: "100% secure payment Lorem ipsum dolor sit amet consecuter.",
  },
];

const FeatureSection = () => (
  <div className="grid grid-cols-1 h-[350px] bg-[#FAF4F4] w-full md:flex md:justify-center items-center px-4 py-2 md:px-20 gap-10">
    {features.map((feature, index) => (
      <div key={index}>
        <h4 className=" text-xl md:text-3xl font-bold">{feature.title}</h4>
        <p className="text-slate-600 text-sm mt-2">{feature.description}</p>
      </div>
    ))}
  </div>
);

export default FeatureSection;
