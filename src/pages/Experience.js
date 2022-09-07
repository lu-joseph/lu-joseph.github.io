import ExperienceEntry from "../Components/ExperienceEntry";

const Experience = () => {
  const opgt_details = [

  ];

  const opentext_details = [
    {
      text: "Learned to use custom Selenium based framework for testing application",
    },
    { text: "Wrote code-based tests in groovy" },
    { text: "Created new reusable test steps for framework involving REST API calls" },
  ];

  const doxim_details = [
    { text: "Created Apache JMeter testing framework" },
    { text: "Implemented test cases in JMeter to test software product" },
    { text: "Learned to use Git source control, Jira, and SQL" },
  ];
  return (
    <div className="experience-list">
      <ExperienceEntry
        company="Ontario Ministry of the Attorney General"
        role="System Support Officer - Programmer"
        details={opgt_details}
        dates="(Upcoming) September-December 2022"
      />
      <ExperienceEntry
        company="OpenText"
        role="QA Specialist"
        details={opentext_details}
        dates="January-April 2022"
      />
      <ExperienceEntry
        company="Doxim"
        role="QA Analyst"
        details={doxim_details}
        dates="May-August 2021"
      />
    </div>
  );
};

export default Experience;
