const SectionTitle = ({ title, subTitle, classlight }) => {
  return (
    <div className="section__title">
      <span>{subTitle}</span>
      <h1 className="md_heading">{title}</h1>
    </div>
  );
};

export default SectionTitle;
