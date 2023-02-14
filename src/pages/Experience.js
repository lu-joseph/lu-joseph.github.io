import ExperienceEntry from "../Components/ExperienceEntry";

const Experience = () => {
  const opgt_details = [
    {
      text: "Developed script to sync Oracle database with Team Foundation Server (TFS) using PL/SQL procedures and C# scripts in .NET framework",
    },
    {
      text: "Designed and edited SQL Server Reporting Services (SSRS) reports, fulfilling data requests of the analysts in the office",
    },
    {
      text: "Coded package procedures in PL/SQL to use in SSRS reports",
    }
  ];

  const opentext_details = [
    { text: "Programmed reusable test steps involving REST API calls written in Groovy for Selenium-based testing framework", },
    { text: "Optimized framework according to clean code principles by giving feedback in a written report" },
  ];

  const doxim_details = [
    { text: "Set up JMeter test automation framework to incorporate modular test steps and suites" },
    { text: "Implemented test cases in JMeter to test software product" },
    { text: "Learned to use Git source control, Jira, and SQL" },
  ];
  return (
    <div className="experience-list">
      <ExperienceEntry
        company="Ontario Ministry of the Attorney General"
        role="System Support Officer - Programmer"
        details={opgt_details}
        dates="September-December 2022"
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
