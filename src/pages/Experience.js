import ExperienceEntry from "../components/ExperienceEntry";

const Experience = () => {
  const opentext_details = [
    {
      text: "Learned to use custom Selenium based framework for testing application",
    },
    { text: "Wrote code-based tests in groovy" },
    { text: "Created new reusable test steps for framework" },
  ];

  const doxim_details = [
    { text: "Created Apache JMeter testing framework" },
    { text: "Implemented test cases in JMeter to test software product" },
    { text: "Learned to use Git source control, Jira, and SQL" },
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
