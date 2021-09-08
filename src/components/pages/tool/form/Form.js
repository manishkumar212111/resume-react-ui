import React, { useState, useEffect } from "react";
import "./index.scss";

import ContentEditable from "../../../elements/contentEditable";
import Education from "../component/education";
import Experience from "../component/experience";
import Skills from "../component/skills";
import DragAndDrop from "../component/elements/dragAndDrop";
import Awards from "../component/awards";
import Conference from "../component/conference";
import Achievement from "../component/achievement";
import Volunteer from "../component/volunteer";
import Custom_field from "../component/custom";
import Hobbies from "../component/hobbies";
import Languages from "../component/language";

import Certification from "../component/certificate";
import Training from "../component/training";
import Publication from "../component/publications";
import Patent from "../component/patent";
import Reference from "../component/reference";
import AddNew from "../component/elements/addNew";

import rmfEdit from "./images/icons-image/rmf-edit.svg";
import rmfDeleteWhite from "./images/icons-image/rmf-delete-white.svg";
import dotsGroup from "./images/icons-image/rmf-dotsGroup.svg";
import rmfTopDashed from "./images/icons-image/rmf-top-dashed.svg";
import rmfDown from "./images/icons-image/rmf-down.svg";
import rmfLangIntr from "./images/icons-image/rmf-lang-intr.svg";
import rmfTranslate from "./images/icons-image/rmf-trasnlate.svg";
import rmfBgPlus from "./images/icons-image/rmf-bg-plus.svg";
import rmfBgResumeSummary from "./images/icons-image/rmf-bg-Resume-Summary.svg";
import rmfPresentationLine from "./images/icons-image/rmf-presentation-line.svg";
import rmfNameOnCertificate from "./images/icons-image/rmf-nameoncertificate.svg";
import rmfCerifNo from "./images/icons-image/rmf-cerif-no.svg";
import rmfFiMapPin from "./images/icons-image/rmf-fi_map-pin.svg";
import rmfCalender from "./images/icons-image/rmf-calendar.svg";
import rmfOnceRif from "./images/icons-image/rmf-oncerifName.svg";
const Form = (props) => {
  const [basic_info, setBasicInfo] = useState({});
  const [activeEducation, setActiveEducation] = useState("");
  const [activeConference, setActiveConference] = useState("");
  const [activeAchievement, setActiveAchievement] = useState("");
  const [activeVolunteer, setActiveVolunteer] = useState("");
  const [activeCustom_field, setActiveCustom_field] = useState("");
  const [activeHobbies, setActiveHobbies] = useState("");
  const [activeLanguages, setActiveLanguages] = useState("");

  const [activeTrainings, setActiveTrainings] = useState("");
  const [activeCertifications, setActiveCertifications] = useState("");
  const [activePublications, setActivePublications] = useState("");
  const [activePatents, setActivePatents] = useState("");
  const [activeReferences, setActiveReferences] = useState("");

  const [activeExperience, setActiveExperience] = useState("");
  const [activeSkill, setActiveSkill] = useState("");
  const [activeAwards, setActiveAwards] = useState("");
  const [resume_detail, setResumeDetail] = useState(props.resume_detail);
  const [active, setActive] = useState("");

  useEffect(() => {
    setResumeDetail(props.resume_detail);
  }, [props.resume_detail]);

  useEffect(() => {
    setBasicInfo(props.basic_info);
  }, [props.basic_info]);

  const handleEducationClick = () => {
    let education = resume_detail.education;
    education.push({
      awards: [],
      courses: [],
      degree: "Study Program",
      degree_major: "",
      duration: { from: { mm: "12", yy: "12" }, to: { mm: "01", yy: "2022" } },
      institute_name: "Institute Name",
      location: "",
      marks: { value: "", type: "" },
      projects: [],
      thesis: [],
    });
    setResumeDetail((fld) => ({ ...fld, ...{ education: education } }));
    setActiveEducation(education.length - 1);
  };

  const handleEducationCB = (key, value, index) => {
    let education = resume_detail.education;
    education[index] = value;
    props.handleToolEvent(education, "education");
  };

  const handleExperienceClick = () => {
    let experience = resume_detail.employment_history;
    experience.push({
      title: "Job title",
      company: "Company Name",
      location: "",
      duration: {
        from: { mm: "", yy: "" },
        to: { mm: "", yy: "" },
      },
      achievements: "",
      description: "",
    });
    setResumeDetail((fld) => ({
      ...fld,
      ...{ employment_history: experience },
    }));
    setActiveExperience(experience.length - 1);
  };

  const handleExperienceCB = (key, value, index) => {
    let experience = resume_detail.employment_history;
    experience[index] = value;
    props.handleToolEvent(experience, "experience");
  };

  const handleSkillClick = (active) => {
    let skills = resume_detail.skills.skills;
    skills.push({ name: "" });
    setActiveSkill(skills.length - 1);
    setResumeDetail((fld) => ({
      ...fld,
      ...{ skills: { ...resume_detail.skills, skills: skills } },
    }));
  };

  const handleSkillsChange = (key, value, active) => {
    let skills = resume_detail.skills.skills;
    skills[active][key] = value;
    props.handleToolEvent(skills, "skills");
  };

  const handleAwardsClick = (active) => {
    let awards = resume_detail.awards;
    awards.push({ title: "" });
    setActiveAwards(awards.length - 1);
    setResumeDetail((fld) => ({ ...fld, ...{ awards: awards } }));
  };

  const handleAwardsChange = (key, value, active) => {
    let awards = resume_detail.awards;
    awards[active][key] = value;
    props.handleToolEvent(awards, "awards");
  };

  const handleConferenceCB = (key, value, index) => {
    console.log(value);
    let conferences = resume_detail.conferences;
    conferences[index] = value;
    props.handleToolEvent(conferences, "conference");
  };

  const handleConferenceClick = () => {
    let conferences = resume_detail.conferences;
    conferences.push({
      title: "Title",
      description: "Description",
      location: "",
      date: "",
    });
    setResumeDetail((fld) => ({ ...fld, ...{ conferences: conferences } }));
    setActiveConference(conferences.length - 1);
  };

  const handleAchievementCB = (key, value, index) => {
    console.log(value);
    let achievements = resume_detail.achievements;
    achievements[index] = value;
    props.handleToolEvent(achievements, "achievement");
  };

  const handleAchievementClick = () => {
    let achievements = resume_detail.achievements;
    achievements.push({
      title: "Title",
      description: "Description",
      location: "",
      date: "",
    });
    setResumeDetail((fld) => ({ ...fld, ...{ achievements: achievements } }));
    setActiveAchievement(achievements.length - 1);
  };

  const handleVolunteerCB = (key, value, index) => {
    console.log(value);
    let volunteers = resume_detail.volunteers;
    volunteers[index] = value;
    props.handleToolEvent(volunteers, "volunteer");
  };

  const handleVolunteerClick = () => {
    let volunteers = resume_detail.volunteers;
    volunteers.push({
      title: "Title",
      description: "Description",
      location: "",
      date: "",
    });
    setResumeDetail((fld) => ({ ...fld, ...{ volunteers: volunteers } }));
    setActiveVolunteer(volunteers.length - 1);
  };

  const handleCustom_fieldCB = (key, value, index) => {
    console.log(value);
    let custom_field = resume_detail.custom_field;
    custom_field[index] = value;
    props.handleToolEvent(custom_field, "custom_field");
  };

  const handleCustom_fieldClick = () => {
    let custom_field = resume_detail.custom_field;
    custom_field.push({
      title: "Title",
      description: "Description",
      location: "",
      date: "",
    });
    setResumeDetail((fld) => ({ ...fld, ...{ custom_field: custom_field } }));
    setActiveCustom_field(custom_field.length - 1);
  };

  const handleHobbiesChange = (key, value, index) => {
    console.log(value);
    let hobbies = resume_detail.hobbies;
    hobbies[index] = value;
    props.handleToolEvent(hobbies, "hobbies");
  };

  const handleHobbiesClick = () => {
    let hobbies = resume_detail.hobbies;
    hobbies.push("");
    setResumeDetail((fld) => ({ ...fld, ...{ hobbies: hobbies } }));
    setActiveHobbies(hobbies.length - 1);
  };

  const handleLanguagesChange = (key, value, index) => {
    console.log(value);
    let languages = resume_detail.languages;
    languages[index] = value;
    props.handleToolEvent(languages, "languages");
  };

  const handleLanguagesClick = () => {
    let languages = resume_detail.languages;
    languages.push("");
    setResumeDetail((fld) => ({ ...fld, ...{ languages: languages } }));
    setActiveLanguages(languages.length - 1);
  };

  const handleTrainingsChange = (key, value, index) => {
    console.log(value);
    let trainings = resume_detail.trainings;
    trainings[index] = value;
    props.handleToolEvent(trainings, "trainings");
  };

  const handleTrainingsClick = () => {
    let trainings = resume_detail.trainings;
    trainings.push({
      title: "Title",
      providers: "Training Providers and Location",
      date: "",
      description: "",
    });
    setResumeDetail((fld) => ({ ...fld, ...{ trainings: trainings } }));
    setActiveTrainings(trainings.length - 1);
  };

  const handleCertificationsChange = (key, value, index) => {
    console.log(value);
    let certifications = resume_detail.certifications;
    certifications[index] = value;
    props.handleToolEvent(certifications, "certifications");
  };

  const handleCertificationsClick = () => {
    let certifications = resume_detail.certifications;
    certifications.push({
      title: "Title",
      providers: "Training Providers and Location",
      date: "",
      location: "Location",
      certificate_no: "Certificate number",
    });
    setResumeDetail((fld) => ({
      ...fld,
      ...{ certifications: certifications },
    }));
    setActiveCertifications(certifications.length - 1);
  };

  const handlePublicationsChange = (key, value, index) => {
    console.log(value);
    let publications = resume_detail.publications;
    publications[index] = value;
    props.handleToolEvent(publications, "publications");
  };

  const handlePublicationsClick = () => {
    let publications = resume_detail.publications;
    publications.push({
      title: "Title",
      date: "",
      description: "Description",
    });
    setResumeDetail((fld) => ({ ...fld, ...{ publications: publications } }));
    setActivePublications(publications.length - 1);
  };

  const handlePatentsCB = (key, value, index) => {
    console.log(value);
    let patents = resume_detail.patents;
    patents[index] = value;
    props.handleToolEvent(patents, "patents");
  };

  const handlePatentsClick = () => {
    let patents = resume_detail.patents;
    patents.push({
      title: "Title",
      application_no: "Application number",
      date: "Date",
      location: "Location",
      url: "https://",
      description: "Description",
    });
    setResumeDetail((fld) => ({ ...fld, ...{ patents: patents } }));
    setActivePatents(patents.length - 1);
  };
  const handleReferencesCB = (key, value, index) => {
    console.log(value);
    let references = resume_detail.references;
    references[index] = value;
    props.handleToolEvent(references, "references");
  };

  const handleReferencesClick = () => {
    let references = resume_detail.references;
    references.push({
      title: "Title",
      company: "Company reference",
      location: "location",
      position: "Position of reference",
      phone: "",
      email: "",
    });
    setResumeDetail((fld) => ({ ...fld, ...{ references: references } }));
    setActiveReferences(references.length - 1);
  };

  const handleDelate = (active, key) => {
    switch (key) {
      case "education":
        let education = resume_detail.education;
        education.splice(active, 1);
        setActiveEducation("");
        props.handleToolEvent(education, "education");
        break;
      case "skills":
        let skills = resume_detail.skills.skills;
        skills.splice(active, 1);
        setActiveSkill("");
        props.handleToolEvent(skills, "skills");
        break;
      case "awards":
        let awards = resume_detail.awards;
        awards.splice(active, 1);
        setActiveAwards("");
        props.handleToolEvent(awards, "awards");
        break;
      case "experience":
        let experience = resume_detail.employment_history;
        experience.splice(active, 1);
        setActiveExperience("");
        props.handleToolEvent(experience, "experience");
        break;
      case "conference":
        let conferences = resume_detail.conferences;
        conferences.splice(active, 1);
        setActiveConference("");
        props.handleToolEvent(conferences, "conference");
        break;
      case "achievement":
        let achievements = resume_detail.achievements;
        achievements.splice(active, 1);
        setActiveAchievement("");
        props.handleToolEvent(achievements, "achievement");
        break;

      case "volunteer":
        let volunteers = resume_detail.volunteers;
        volunteers.splice(active, 1);
        setActiveVolunteer("");
        props.handleToolEvent(volunteers, "volunteer");
        break;
      case "custom_field":
        let custom_field = resume_detail.custom_field;
        custom_field.splice(active, 1);
        setActiveCustom_field("");
        props.handleToolEvent(custom_field, "custom_field");
        break;
      case "hobbies":
        let hobbies = resume_detail.hobbies;
        hobbies.splice(active, 1);
        setActiveHobbies("");
        props.handleToolEvent(hobbies, "hobbies");
        break;
      case "languages":
        let languages = resume_detail.languages;
        languages.splice(active, 1);
        // setActiveLanguages("");
        props.handleToolEvent(languages, "languages");
        break;

      case "trainings":
        let trainings = resume_detail.trainings;
        trainings.splice(active, 1);
        setActiveTrainings("");
        props.handleToolEvent(trainings, "trainings");
        break;

      case "certifications":
        let certifications = resume_detail.certifications;
        certifications.splice(active, 1);
        // setActiveCertifications("");
        props.handleToolEvent(certifications, "certifications");
        break;

      case "publications":
        let publications = resume_detail.publications;
        publications.splice(active, 1);
        setActivePublications("");
        props.handleToolEvent(publications, "publications");
        break;

      case "patents":
        let patents = resume_detail.patents;
        patents.splice(active, 1);
        setActivePatents("");
        props.handleToolEvent(patents, "patents");
        break;

      case "references":
        let references = resume_detail.references;
        references.splice(active, 1);
        setActiveReferences("");
        props.handleToolEvent(references, "references");
        break;
    }
  };

  console.log(activeSkill, "sdjkkdfjbkj", resume_detail);

  const renderSkill = () => {
    let h = [];
    resume_detail.skills &&
      resume_detail.skills.skills.map((itm, index) =>
        h.push(
          activeSkill !== index ? (
            <>
              <li onClick={() => setActiveSkill(index)}>
                <span className="resumeSkillsTitle">{itm.name}</span>
                <span className="resumeSkillsBar">
                  <span
                    className="leftTextSize"
                    style={{ width: itm.score ? itm.score : 0 }}
                  ></span>
                </span>
              </li>
            </>
          ) : (
            <Skills
              active={activeSkill}
              handleDone={() => setActiveSkill("")}
              handleSkillDelete={handleDelate}
              handleSkillsChange={handleSkillsChange}
              value={resume_detail.skills.skills[activeSkill]}
            />
          )
        )
      );

    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.skills ? resume_detail.skills.skills : []}
        keys="skills"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };

  const renderAwards = () => {
    let h = [];
    resume_detail.awards &&
      resume_detail.awards.map((itm, index) =>
        h.push(
          activeAwards !== index ? (
            <p
              className="resumeAwardRec"
              onClick={() => setActiveAwards(index)}
            >
              {itm.title}
            </p>
          ) : (
            <Awards
              active={activeAwards}
              handleDone={() => setActiveAwards("")}
              handleAwardsDelete={handleDelate}
              handleAwardsChange={handleAwardsChange}
              value={resume_detail.awards[activeAwards]}
            />
          )
        )
      );

    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.awards ? resume_detail.awards : []}
        keys="awards"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };

  const renderHobbies = () => {
    let h = [];
    resume_detail.hobbies &&
      resume_detail.hobbies.map((itm, index) =>
        h.push(
          activeHobbies !== index ? (
            <li onClick={() => setActiveHobbies(index)}>
              <span className="resumeSkillsTitle">{itm}</span>
            </li>
          ) : (
            <Hobbies
              active={activeHobbies}
              handleDone={() => setActiveHobbies("")}
              handleHobbiesDelete={handleDelate}
              handleHobbiesChange={handleHobbiesChange}
              value={resume_detail.hobbies[activeHobbies]}
            />
          )
        )
      );
    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.hobbies ? resume_detail.hobbies : []}
        keys="hobbies"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };

  const renderCertificate = () => {
    let h = [];
    resume_detail.certifications &&
      resume_detail.certifications.map((item, index) =>
        h.push(
          activeCertifications !== index ? (
            <div className="rmfPreFilledBox">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>
                  {item.title ? item.title : "Title"}
                  <span>
                    {item.providers ? item.providers : "Training providers"}{" "}
                    {item.date ? item.date : ""}
                  </span>
                </h4>
                <div className="rmfPreFilButton">
                  <button
                    className="rmfbuttom"
                    onClick={() => setActiveCertifications(index)}
                  >
                    <img src={rmfEdit} alt="" />
                    Edit/Update
                  </button>
                  <button
                    onClick={() => handleDelate(index, "certifications")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {activeCertifications !== "" && (
                <Certification
                  handleSave={() => setActiveCertifications("")}
                  handleCertificationsDelete={handleDelate}
                  active={activeCertifications}
                  certifications={
                    resume_detail.certifications[activeCertifications]
                  }
                  handleChange={handleCertificationsChange}
                />
              )}
            </div>
          )
        )
      );
    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.certifications ? resume_detail.certifications : []}
        keys="certifications"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };
  const renderLanguages = () => {
    let h = [];
    resume_detail.languages &&
      resume_detail.languages.map((itm, index) =>
        h.push(
          activeLanguages !== index ? (
            <div className="rmfPreFilledBox rmfPreFilledSmall">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>{itm}</h4>
                <div className="rmfPreFilButton">
                  <button
                    onClick={() => setActiveLanguages(index)}
                    className="rmfbuttom"
                  >
                    <img src={rmfEdit} alt="" />
                  </button>
                  <button
                    onClick={() => handleDelate(index, "languages")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Languages
              active={activeLanguages}
              handleDone={() => setActiveLanguages("")}
              handleLanguagesDelete={handleDelate}
              handleLanguagesChange={handleLanguagesChange}
              value={resume_detail.languages[activeLanguages]}
            />
          )
        )
      );
    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.languages ? resume_detail.languages : []}
        keys="languages"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };
  const renderTraining = () => {
    let h = [];
    resume_detail.trainings &&
      resume_detail.trainings.map((item, index) =>
        h.push(
          activeTrainings !== index ? (
            <div className="rmfPreFilledBox">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>
                  {item.title ? item.title : "Title"}
                  <span>
                    {item.providers ? item.providers : "Training providers"}{" "}
                    {item.date ? item.date : ""}
                  </span>
                </h4>
                <div className="rmfPreFilButton">
                  <button
                    className="rmfbuttom"
                    onClick={() => setActiveTrainings(index)}
                  >
                    <img src={rmfEdit} alt="" />
                    Edit/Update
                  </button>
                  <button
                    onClick={() => handleDelate(index, "trainings")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {activeTrainings !== "" && (
                <Training
                  handleSave={() => setActiveTrainings("")}
                  handleTrainingsDelete={handleDelate}
                  active={activeTrainings}
                  trainings={resume_detail.trainings[activeTrainings]}
                  handleChange={handleTrainingsChange}
                />
              )}
            </div>
          )
        )
      );
    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.trainings ? resume_detail.trainings : []}
        keys="trainings"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };

  return (
    <div className="rmfromwrpr">
      <div className="rmf_thin_scroll">
        <div className="rmfShadow rmfProfileBox">
          <div className="rmfImg">
            <span className="rmfImgIcon">
              <img src="./images/icons-image/rmf-star-marked.svg" alt="" />
            </span>
            <div className="rmfImgBox">
              <img src="images/pp2.jpg" alt="" />
            </div>
          </div>
          <div className="rmfImgSelect">
            <span className="rmfSelect">
              <img
                src="images/icons-image/rmf-file-upload.svg"
                alt=""
                width="24px"
                height="24px"
              />
            </span>
            <span className="rmfDelete">
              <img
                src="images/icons-image/rmf-delete.svg"
                alt=""
                width="24px"
                height="24px"
              />
            </span>
          </div>
          <div className="rmfTitleBox">
            <div className="rmfInputfiled">
              <label>
                <img
                  src="images/icons-image/rmf-UserRectangle.svg"
                  alt=""
                  width="18px"
                  height="18px"
                />
                Job Title / Professional Title
              </label>
              <ContentEditable
                value={
                  resume_detail.job_title
                    ? resume_detail.job_title
                    : "Enter Job Title"
                }
                onChange={(value) => props.handleToolEvent(value, "job_title")}
                className={"resumeAboutMe"}
              />
            </div>
          </div>
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon">
                <img src="images/icons-image/rmf-bg-user.svg" alt="" />
              </span>
              Personal Details
            </div>
            <div className="rmfAccContainer">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-UserRectangle.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your First Name
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_users-last.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your Last Name
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled rmfInputMobile m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_phone-call.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your Phone Number
                    </label>
                    <select className="rmCountryCode">
                      <option>+48</option>
                      <option>+91</option>
                      <option>+80</option>
                      <option>+81</option>
                    </select>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-6 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_mail.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your E-Mail Address
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-3 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src="images/icons-image/rmf-u_archway.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your City
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-4 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your Country
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-5 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map-pin.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your Address
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-4 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src="images/icons-image/rmf-gift.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Date of Birth
                    </label>
                    <input type="text" name="" placeholder="DD/MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-4 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src="images/icons-image/rmf-u_align-alt.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Date Format
                    </label>
                    <input type="text" name="" placeholder="DD/MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-4 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src="images/icons-image/rmf-AirplaneTakeoff.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Willing to Relocate?
                    </label>
                    <select>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Social Details HTML --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon">
                <img src="images/icons-image/rmf-Social-Details.svg" alt="" />
              </span>
              Social Details
            </div>
            <div className="rmfAccContainer">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-LinkedinLogo.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      LinkedIN
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-FacebookLogo.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Facebook
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-InstagramLogo.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Instagram
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_users-last.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Skype
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-Twitter.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Twitter
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-website.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Website/URL
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Resume Summary HTML --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon">
                <img src={rmfBgResumeSummary} alt="" />
              </span>
              Resume Summary
            </div>
            <div className="rmfAccContainer">
              <div className="row">
                <div className="col-12 col-md-12">
                  <div className="rmfInputfiled m24">
                    <ContentEditable
                      value={
                        resume_detail.summary
                          ? resume_detail.summary
                          : "Enter summary here"
                      }
                      onChange={(value) =>
                        props.handleToolEvent(value, "summary")
                      }
                      className={"resumeAboutMe"}
                    />
                    {/* <textarea rows="6"></textarea> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Work Experience  HTML --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon">
                <img src={rmfBgResumeSummary} alt="" />
              </span>
              Work Experience{" "}
              <span className="rmfAccIcon">
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            <div className="rmfAccContainer">
              <div className="rmfPreFilledBox">
                <span className="rmfPreDragDropIcon">
                  <img src={dotsGroup} alt="" />
                </span>
                <div className="rmfPreFilled">
                  <h4>
                    Business Analust{" "}
                    <span>
                      Google / New York, USA /08/202109/2021 -- 09/2021
                    </span>
                  </h4>
                  <div className="rmfPreFilButton">
                    <button className="rmfbuttom">
                      <img src={rmfEdit} alt="" />
                      Edit/Update
                    </button>
                    <button className="rmfDeletebutton">
                      <img src={rmfDeleteWhite} alt="" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-job-title.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Job Title/Position
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-city.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Company/Employer{" "}
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map-pin.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Location
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="rmfInputfiled m24">
                    <label>Start Date</label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="rmfInputfiled m24">
                    <label>End Date</label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-settings.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Area of Work/Industry
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-job-disp.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Job Description{" "}
                    </label>
                    <textarea rows="6">E.g. Finance or IT</textarea>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <button className="rmfbuttom">
                    <img src={rmfBgPlus} alt="" />
                    Add Work Experience{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Work Experience  HTML --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon">
                <img src={rmfBgResumeSummary} alt="" />
              </span>
              Education{" "}
              <span className="rmfAccIcon">
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            <div className="rmfAccContainer">
              <div className="rmfPreFilledBox">
                <span className="rmfPreDragDropIcon">
                  <img src={dotsGroup} alt="" />
                </span>
                <div className="rmfPreFilled">
                  <h4>
                    Bachlors of Engineering
                    <span>
                      Information Technology /08/202109/2021 -- 09/2021
                    </span>
                  </h4>
                  <div className="rmfPreFilButton">
                    <button className="rmfbuttom">
                      <img src={rmfEdit} alt="" />
                      Edit/Update
                    </button>
                    <button className="rmfDeletebutton">
                      <img src={rmfDeleteWhite} alt="" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-degree-name.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Degree Name
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Bachlors/Masters"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-degree-major.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Degree Major
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Finance, Electronic "
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map-pin.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Location
                    </label>
                    <input type="text" name="" placeholder="City, Country" />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="rmfInputfiled m24">
                    <label>Start Date</label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="rmfInputfiled rmfInputwitCheck m24">
                    <label>
                      End Date
                      <label className="rmf_control rmf_checkbox">
                        Present
                        <input type="checkbox" />
                        <span className="rmf_control__indicator"></span>
                      </label>
                    </label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-school-building.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      School/College/University
                    </label>
                    <input type="text" name="" placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-job-disp.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Description
                    </label>
                    <textarea rows="6">
                      Cources/Projects/Thesis/GPA/CGPA/Percentage/Grades
                    </textarea>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <button className="rmfbuttom">
                    <img src={rmfBgPlus} alt="" />
                    Add Work Experience{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Skills HTML --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img src="images/icons-image/rmf-hash.svg" alt="" />
              </span>
              Skills
              <span className="rmfAccIcon">
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            <div className="rmfAccContainer">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="rmfInputfiled rmfInputwitCheck m24">
                        <label>
                          <img
                            src="images/icons-image/rmf-settings.svg"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                          Skills
                          <label className="rmf_control rmf_checkbox">
                            Present
                            <input type="checkbox" />
                            <span className="rmf_control__indicator"></span>
                          </label>
                        </label>
                        <div className="rmfPreFilledBox rmfPreFilledSmall">
                          <span className="rmfPreDragDropIcon">
                            <img src={dotsGroup} alt="" />
                          </span>
                          <div className="rmfPreFilled">
                            <h4>SQL</h4>
                            <div className="rmfPreFilButton">
                              <button className="rmfbuttom">
                                <img src={rmfEdit} alt="" />
                              </button>
                              <button className="rmfDeletebutton">
                                <img src={rmfDeleteWhite} alt="" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <div className="rmfInputfiled rmfInputwitCheck m24">
                        <input type="text" name="" placeholder="" />
                      </div>
                    </div>
                    <div className="col-12 col-md-12 m24">
                      <div className="range-slider-group range-slider-group-blue">
                        <input
                          type="range"
                          min="0"
                          max="255"
                          value="121"
                          data-color="#00f"
                          className="range-slider range-slider-blue"
                          id="range-slider-blue"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <button className="rmfbuttom">
                        <img src={rmfBgPlus} alt="" />
                        Add Skills
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="rmfInputfiled rmfInputwitCheck m24">
                        <label>
                          <img
                            src="images/icons-image/rmf-soft-skills.svg"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                          Soft Skills
                          <label className="rmf_control rmf_checkbox">
                            Present
                            <input type="checkbox" />
                            <span className="rmf_control__indicator"></span>
                          </label>
                        </label>
                        <div className="rmfPreFilledBox rmfPreFilledSmall">
                          <span className="rmfPreDragDropIcon">
                            <img src={dotsGroup} alt="" />
                          </span>
                          <div className="rmfPreFilled">
                            <h4>Cross Culture Communication</h4>
                            <div className="rmfPreFilButton">
                              <button className="rmfbuttom">
                                <img src={rmfEdit} alt="" />
                              </button>
                              <button className="rmfDeletebutton">
                                <img src={rmfDeleteWhite} alt="" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <div className="rmfInputfiled rmfInputwitCheck m24">
                        <input type="text" name="" placeholder="" />
                      </div>
                    </div>
                    <div className="col-12 col-md-12 m24">
                      <div className="range-slider-group range-slider-group-blue">
                        <input
                          type="range"
                          min="0"
                          max="255"
                          value="121"
                          data-color="#00f"
                          className="range-slider range-slider-blue"
                          id="range-slider-blue"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <button className="rmfbuttom">
                        <img src={rmfBgPlus} alt="" />
                        Add Soft Skills
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Skills HTML --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img src={rmfLangIntr} alt="" />
              </span>
              Languages and Interests{" "}
              <span className="rmfAccIcon">
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            <div className="rmfAccContainer">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="rmfInputfiled rmfInputwitCheck m24">
                        <label>
                          <img
                            src={rmfTranslate}
                            alt=""
                            width="18px"
                            height="18px"
                          />
                          Languages
                          <label className="rmf_control rmf_checkbox">
                            Present
                            <input type="checkbox" />
                            <span className="rmf_control__indicator"></span>
                          </label>
                        </label>
                        {renderLanguages()}
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <button
                        className="rmfbuttom"
                        onClick={() => handleLanguagesClick(activeLanguages)}
                      >
                        <img src={rmfBgPlus} alt="" />
                        Add Language
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="rmfInputfiled rmfInputwitCheck m24">
                        <label>
                          <img
                            src="images/icons-image/rmf-sport.svg"
                            alt=""
                            width="18px"
                            height="18px"
                          />
                          Interests
                          <label className="rmf_control rmf_checkbox">
                            Present
                            <input type="checkbox" />
                            <span className="rmf_control__indicator"></span>
                          </label>
                        </label>
                        <div className="rmfPreFilledBox rmfPreFilledSmall">
                          <span className="rmfPreDragDropIcon">
                            <img
                              src={dotsGroup}
                              alt=""
                            />
                          </span>
                          <div className="rmfPreFilled">
                            <h4></h4>
                            <div className="rmfPreFilButton">
                              <button className="rmfbuttom">
                                <img
                                  src={rmfEdit}
                                  alt=""
                                />
                              </button>
                              <button className="rmfDeletebutton">
                                <img
                                  src={rmfDeleteWhite}
                                  alt=""
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <div className="rmfInputfiled rmfInputwitCheck m24">
                        <input type="text" name="" placeholder="" />
                      </div>
                    </div>
                    <div className="col-12 col-md-12 m24">
                      <div className="range-slider-group range-slider-group-blue">
                        <input
                          type="range"
                          min="0"
                          max="255"
                          value="121"
                          data-color="#00f"
                          className="range-slider range-slider-blue"
                          id="range-slider-blue"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <button className="rmfbuttom">
                        <img src={rmfBgPlus} alt="" />
                        Add Interests
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Certificates & Licences  --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon">
                <img src={rmfBgResumeSummary} alt="" />
              </span>
              Certificates & Licences{" "}
              <span className="rmfAccIcon" style={{transform:  active == "certificate" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "certificate" ? "" : "certificate")}>
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            {active == "certificate" && <div className="rmfAccContainer">
              {renderCertificate()}
              <div className="row">
                <div className="col-12 col-md-12">
                  <button
                    className="rmfbuttom"
                    onClick={() =>
                      handleCertificationsClick(activeCertifications)
                    }
                  >
                    <img src={rmfBgPlus} alt="" />
                    Add Certificate
                  </button>
                </div>
              </div>
            </div>}
          </div>
        </div>

        {/* <!-- Trainings   --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img src={rmfPresentationLine} alt="" />
              </span>
              Trainings
              <span className="rmfAccIcon" style={{transform:  active == "training" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "training" ? "" : "training")}>
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            {active == "training" && <div className="rmfAccContainer">
              {renderTraining()}
              <div className="row">
                <div className="col-12 col-md-12">
                  <button
                    className="rmfbuttom"
                    onClick={() => handleTrainingsClick(activeTrainings)}
                  >
                    <img src={rmfBgPlus} alt="" />
                    Add Training
                  </button>
                </div>
              </div>
            </div>}
          </div>
        </div>

        {/* <!-- Patents and Publications --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img src="images/icons-image/rmf-paper-folding.svg" alt="" />
              </span>
              Patents and Publications
              <span className="rmfAccIcon">
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            <div className="rmfAccContainer">
              {/* <!-- Patents HTML --> */}
              <div className="rmfAccTopTitle">
                <img
                  src="images/icons-image/rmf-patient.svg"
                  alt=""
                  width="18px"
                  height="18px"
                />
                Patents
              </div>
              <div className="rmfPreFilledBox">
                <span className="rmfPreDragDropIcon">
                  <img src={dotsGroup} alt="" />
                </span>
                <div className="rmfPreFilled">
                  <h4>
                    Certified Ethical hacker
                    <span>EC-Council 08/202109/2021 -- 09/2021</span>
                  </h4>
                  <div className="rmfPreFilButton">
                    <button className="rmfbuttom">
                      <img src={rmfEdit} alt="" />
                      Edit/Update
                    </button>
                    <button className="rmfDeletebutton">
                      <img src={rmfDeleteWhite} alt="" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-patient.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Patent Name
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Bachlors/Masters"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-cerif-no.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Application Number
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Finance, Electronic "
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map-pin.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Location
                    </label>
                    <input type="text" name="" placeholder="City, Country" />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="rmfInputfiled m24">
                    <label>Filing Date</label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-job-disp.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Description
                    </label>
                    <textarea rows="6"></textarea>
                  </div>
                </div>
                <div className="col-12 col-md-12 m60">
                  <button className="rmfbuttom">
                    <img src={rmfBgPlus} alt="" />
                    Add Patent
                  </button>
                </div>
              </div>

              {/* <!-- Publication HTML --> */}
              <div className="rmfAccTopTitle">
                <img
                  src="images/icons-image/rmf-publication.svg"
                  alt=""
                  width="18px"
                  height="18px"
                />
                Publication
              </div>
              <div className="rmfPreFilledBox">
                <span className="rmfPreDragDropIcon">
                  <img src={dotsGroup} alt="" />
                </span>
                <div className="rmfPreFilled">
                  <h4>
                    Certified Ethical hacker
                    <span>EC-Council 08/202109/2021 -- 09/2021</span>
                  </h4>
                  <div className="rmfPreFilButton">
                    <button className="rmfbuttom">
                      <img src={rmfEdit} alt="" />
                      Edit/Update
                    </button>
                    <button className="rmfDeletebutton">
                      <img src={rmfDeleteWhite} alt="" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-edit-line.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Title
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Bachlors/Masters"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-organization.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Publisher
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Finance, Electronic "
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map-pin.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Location
                    </label>
                    <input type="text" name="" placeholder="City, Country" />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="rmfInputfiled m24">
                    <label>Publication date</label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-job-disp.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Description
                    </label>
                    <textarea rows="6"></textarea>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <button className="rmfbuttom">
                    <img src={rmfBgPlus} alt="" />
                    Add Publication
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Achievements and Awards --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img src="images/icons-image/rmf-paper-folding.svg" alt="" />
              </span>
              Achievements and Awards
              <span className="rmfAccIcon">
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            <div className="rmfAccContainer">
              {/* <!-- Achievements HTML --> */}
              <div className="rmfAccTopTitle">
                <img
                  src="images/icons-image/rmf-patient.svg"
                  alt=""
                  width="18px"
                  height="18px"
                />
                Achievements
              </div>
              <div className="rmfPreFilledBox">
                <span className="rmfPreDragDropIcon">
                  <img src={dotsGroup} alt="" />
                </span>
                <div className="rmfPreFilled">
                  <h4>
                    Certified Ethical hacker
                    <span>EC-Council 08/202109/2021 -- 09/2021</span>
                  </h4>
                  <div className="rmfPreFilButton">
                    <button className="rmfbuttom">
                      <img src={rmfEdit} alt="" />
                      Edit/Update
                    </button>
                    <button className="rmfDeletebutton">
                      <img src={rmfDeleteWhite} alt="" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-patient.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Title
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Bachlors/Masters"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-cerif-no.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Associated with
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Finance, Electronic "
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map-pin.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Location
                    </label>
                    <input type="text" name="" placeholder="City, Country" />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="rmfInputfiled m24">
                    <label>Date</label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-job-disp.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Description
                    </label>
                    <textarea rows="6"></textarea>
                  </div>
                </div>
                <div className="col-12 col-md-12 m60">
                  <button className="rmfbuttom">
                    <img src={rmfBgPlus} alt="" />
                    Add Achievements
                  </button>
                </div>
              </div>

              {/* <!-- Awards HTML --> */}
              <div className="rmfAccTopTitle">
                <img
                  src="images/icons-image/rmf-publication.svg"
                  alt=""
                  width="18px"
                  height="18px"
                />
                Awards
              </div>
              <div className="rmfPreFilledBox">
                <span className="rmfPreDragDropIcon">
                  <img src={dotsGroup} alt="" />
                </span>
                <div className="rmfPreFilled">
                  <h4>
                    Certified Ethical hacker
                    <span>EC-Council 08/202109/2021 -- 09/2021</span>
                  </h4>
                  <div className="rmfPreFilButton">
                    <button className="rmfbuttom">
                      <img src={rmfEdit} alt="" />
                      Edit/Update
                    </button>
                    <button className="rmfDeletebutton">
                      <img src={rmfDeleteWhite} alt="" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-edit-line.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Title
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Bachlors/Masters"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-organization.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Issuer
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Finance, Electronic "
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map-pin.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Location
                    </label>
                    <input type="text" name="" placeholder="City, Country" />
                  </div>
                </div>
                <div className="col-12 col-md-3">
                  <div className="rmfInputfiled m24">
                    <label>Publication date</label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-job-disp.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Description
                    </label>
                    <textarea rows="6"></textarea>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <button className="rmfbuttom">
                    <img src={rmfBgPlus} alt="" />
                    Add Award
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Projects and Conferences --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img
                  src="images/icons-image/rmf-Projects-Conferences.svg"
                  alt=""
                />
              </span>
              Projects and Conferences
              <span className="rmfAccIcon">
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            <div className="rmfAccContainer">
              {/* <!-- Projects HTML --> */}
              <div className="rmfAccTopTitle">
                <img
                  src="images/icons-image/rmf-project.svg"
                  alt=""
                  width="18px"
                  height="18px"
                />
                Projects
              </div>
              <div className="rmfPreFilledBox">
                <span className="rmfPreDragDropIcon">
                  <img src={dotsGroup} alt="" />
                </span>
                <div className="rmfPreFilled">
                  <h4>
                    Certified Ethical hacker
                    <span>EC-Council 08/202109/2021 -- 09/2021</span>
                  </h4>
                  <div className="rmfPreFilButton">
                    <button className="rmfbuttom">
                      <img src={rmfEdit} alt="" />
                      Edit/Update
                    </button>
                    <button className="rmfDeletebutton">
                      <img src={rmfDeleteWhite} alt="" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-edit-line.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Project Name
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Bachlors/Masters"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>Date</label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map-pin.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Location
                    </label>
                    <input type="text" name="" placeholder="City, Country" />
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-job-disp.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Description
                    </label>
                    <textarea rows="6"></textarea>
                  </div>
                </div>
                <div className="col-12 col-md-12 m60">
                  <button className="rmfbuttom">
                    <img src={rmfBgPlus} alt="" />
                    Add Project
                  </button>
                </div>
              </div>

              {/* <!-- Conferences HTML --> */}
              <div className="rmfAccTopTitle">
                <img
                  src="images/icons-image/rmf-publication.svg"
                  alt=""
                  width="18px"
                  height="18px"
                />
                Conferences
              </div>
              <div className="rmfPreFilledBox">
                <span className="rmfPreDragDropIcon">
                  <img src={dotsGroup} alt="" />
                </span>
                <div className="rmfPreFilled">
                  <h4>
                    Certified Ethical hacker
                    <span>EC-Council 08/202109/2021 -- 09/2021</span>
                  </h4>
                  <div className="rmfPreFilButton">
                    <button className="rmfbuttom">
                      <img src={rmfEdit} alt="" />
                      Edit/Update
                    </button>
                    <button className="rmfDeletebutton">
                      <img src={rmfDeleteWhite} alt="" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-edit-line.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Topic Name
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Bachlors/Masters"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>Date</label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map-pin.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Location
                    </label>
                    <input type="text" name="" placeholder="City, Country" />
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-job-disp.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Description
                    </label>
                    <textarea rows="6"></textarea>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <button className="rmfbuttom">
                    <img src={rmfBgPlus} alt="" />
                    Add Conferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Projects and Conferences --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img
                  src="images/icons-image/rmf-VolunteerExperience.svg"
                  alt=""
                />
              </span>
              Volunteer Experience
              <span className="rmfAccIcon">
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            <div className="rmfAccContainer">
              <div className="rmfPreFilledBox">
                <span className="rmfPreDragDropIcon">
                  <img src={dotsGroup} alt="" />
                </span>
                <div className="rmfPreFilled">
                  <h4>
                    Certified Ethical hacker
                    <span>EC-Council 08/202109/2021 -- 09/2021</span>
                  </h4>
                  <div className="rmfPreFilButton">
                    <button className="rmfbuttom">
                      <img src={rmfEdit} alt="" />
                      Edit/Update
                    </button>
                    <button className="rmfDeletebutton">
                      <img src={rmfDeleteWhite} alt="" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-training-prov.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Organization Name
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Bachlors/Masters"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <div className="rmfInputfiled m24">
                    <label>Start Date</label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-2">
                  <div className="rmfInputfiled rmfInputwitCheck m24">
                    <label>
                      End Date
                      <label className="rmf_control rmf_checkbox">
                        Present
                        <input type="checkbox" />
                        <span className="rmf_control__indicator"></span>
                      </label>
                    </label>
                    <span className="rmf-calendar-icon">
                      <img src={rmfCalender} alt="" />
                    </span>
                    <input type="text" name="" placeholder="MM/YYY" />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map-pin.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Location
                    </label>
                    <input type="text" name="" placeholder="City, Country" />
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-job-disp.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Description
                    </label>
                    <textarea rows="6"></textarea>
                  </div>
                </div>
                <div className="col-12 col-md-12 m60 rmfButtonWrpr">
                  <button className="rmfbuttom">
                    <img src={rmfBgPlus} alt="" />
                    Add Volenteer Experience
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- References --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img src="images/icons-image/rmf-References.svg" alt="" />
              </span>
              References
              <span className="rmfAccIcon">
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            <div className="rmfAccContainer">
              <div className="rmfPreFilledBox">
                <span className="rmfPreDragDropIcon">
                  <img src={dotsGroup} alt="" />
                </span>
                <div className="rmfPreFilled">
                  <h4>
                    Certified Ethical hacker
                    <span>EC-Council 08/202109/2021 -- 09/2021</span>
                  </h4>
                  <div className="rmfPreFilButton">
                    <button className="rmfbuttom">
                      <img src={rmfEdit} alt="" />
                      Edit/Update
                    </button>
                    <button className="rmfDeletebutton">
                      <img src={rmfDeleteWhite} alt="" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_user.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Person Name
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Bachlors/Masters"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-city.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Company Name
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Bachlors/Masters"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map-pin.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Location
                    </label>
                    <input type="text" name="" placeholder="City, Country" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-Position-Refrence.svg"
                        alt=""
                        width="14px"
                        height="14px"
                      />
                      Position of Refrence
                    </label>
                    <input type="text" name="" placeholder="City, Country" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_mail.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Contact Details
                    </label>
                    <input type="text" name="" placeholder="City, Country" />
                  </div>
                </div>
                <div className="col-12 col-md-12 m60 rmfButtonWrpr">
                  <button className="rmfbuttom">
                    <img src={rmfBgPlus} alt="" />
                    Add Reference
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Custom Section --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img src="images/icons-image/icon-setting-config.svg" alt="" />
              </span>
              Custom Section
              <span className="rmfAccIcon">
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            <div className="rmfAccContainer">
              <div className="rmfPreFilledBox">
                <span className="rmfPreDragDropIcon">
                  <img src={dotsGroup} alt="" />
                </span>
                <div className="rmfPreFilled">
                  <h4>
                    Certified Ethical hacker
                    <span>EC-Council 08/202109/2021 -- 09/2021</span>
                  </h4>
                  <div className="rmfPreFilButton">
                    <button className="rmfbuttom">
                      <img src={rmfEdit} alt="" />
                      Edit/Update
                    </button>
                    <button className="rmfDeletebutton">
                      <img src={rmfDeleteWhite} alt="" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-edit-line.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Title
                    </label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Bachlors/Masters"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>Date</label>
                    <input
                      type="text"
                      name=""
                      placeholder="E. g. Bachlors/Masters"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-fi_map-pin.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Location
                    </label>
                    <input type="text" name="" placeholder="City, Country" />
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src="images/icons-image/rmf-job-disp.svg"
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Description
                    </label>
                    <textarea rows="6"></textarea>
                  </div>
                </div>
                <div className="col-12 col-md-12 m60 rmfButtonWrpr">
                  <button className="rmfbuttom">
                    <img src={rmfBgPlus} alt="" />
                    Add Custom Section
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
