const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};
export default SectionHeader;