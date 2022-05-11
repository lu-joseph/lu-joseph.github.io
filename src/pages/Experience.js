import ExperienceEntry from "../components/ExperienceEntry";

const Experience = () => {
  const opentext_details = [
    { text: "Wrote code-based tests in groovy" },
    {
      text: "Learned to use custom selenium based framework for testing application",
    },
  ];

  const doxim_details = [
    { text: "Created Apache JMeter testing framework" },
    { text: "Wrote tests with the JMeter tool" },
  ];
  return (
    <div className="experience-list">
      <ExperienceEntry
        company="OpenText"
        role="QA Specialist"
        details={opentext_details}
      />
      <ExperienceEntry
        company="Doxim"
        role="QA Analyst"
        details={doxim_details}
      />
    </div>
  );
};

export default Experience;
