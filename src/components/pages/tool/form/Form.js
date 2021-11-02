import React, { useState, useEffect } from "react";
import "./index.scss";
import ContentEditable from "../../../elements/contentEditable";
import Education from "../component/education";
import Experience from "../component/experience";
import Skills from "../component/skills";
import SoftSkills from "../component/softSkill";
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
import rmfSettings from "./images/icons-image/rmf-settings.svg";
import rmfDeleteWhite from "./images/icons-image/rmf-delete-white.svg";
import dotsGroup from "./images/icons-image/rmf-dotsGroup.svg";
import rmfSport from "./images/icons-image/rmf-sport.svg"
import rmfTopDashed from "./images/icons-image/rmf-top-dashed.svg";
import rmfHash from "./images/icons-image/rmf-hash.svg"
import iconSettingCOnfig from "./images/icons-image/icon-setting-config.svg";
import rmfReference from "./images/icons-image/rmf-References.svg"
import rmfVolunteerExperience from "./images/icons-image/rmf-VolunteerExperience.svg"
import rmfProjectConference from "./images/icons-image/rmf-Projects-Conferences.svg"
import rmfPaperFolding from "./images/icons-image/rmf-paper-folding.svg";
import  rmfPatient from "./images/icons-image/rmf-patient.svg";
import rmfPublication from "./images/icons-image/rmf-publication.svg";
import rmfDown from "./images/icons-image/rmf-down.svg";
import rmfLangIntr from "./images/icons-image/rmf-lang-intr.svg";
import rmfTranslate from "./images/icons-image/rmf-trasnlate.svg";
import rmfBgPlus from "./images/icons-image/rmf-bg-plus.svg";
import rmfSoftSkills from "./images/icons-image/rmf-soft-skills.svg"
import rmfBgResumeSummary from "./images/icons-image/rmf-bg-Resume-Summary.svg";
import rmfPresentationLine from "./images/icons-image/rmf-presentation-line.svg";
import rmfNameOnCertificate from "./images/icons-image/rmf-nameoncertificate.svg";
import rmfCerifNo from "./images/icons-image/rmf-cerif-no.svg";
import rmfFiMapPin from "./images/icons-image/rmf-fi_map-pin.svg";
import rmfCalender from "./images/icons-image/rmf-calendar.svg";
import rmfOnceRif from "./images/icons-image/rmf-oncerifName.svg";
import LinkedIN from "./images/icons-image/rmf-LinkedinLogo.svg";
import FaceBook from "./images/icons-image/rmf-FacebookLogo.svg";
import userRectangle from "./images/icons-image/rmf-UserRectangle.svg";
import InstaGram from "./images/icons-image/rmf-InstagramLogo.svg";
import Twitter from "./images/icons-image/rmf-Twitter.svg";
import SocialDetails from "./images/icons-image/rmf-Social-Details.svg";
import starMarked from "./images/icons-image/rmf-star-marked.svg";
import rmfFileUpload from "./images/icons-image/rmf-file-upload.svg";
import rmfDelete from "./images/icons-image/rmf-delete.svg";
import rmfBgUser from "./images/icons-image/rmf-bg-user.svg";
import rmfFiUserName from "./images/icons-image/rmf-fi_users-last.svg";
import rmfFiPhoneCall from "./images/icons-image/rmf-fi_phone-call.svg";
import rmfFiMail from "./images/icons-image/rmf-fi_mail.svg";
import rmfArchway from "./images/icons-image/rmf-u_archway.svg";
import rmfGift from "./images/icons-image/rmf-gift.svg";
import rmfUAlign from "./images/icons-image/rmf-u_align-alt.svg";
import rmfAirplaneTakeOff from "./images/icons-image/rmf-AirplaneTakeoff.svg";
import pp2 from "./images/pp2.jpg";

const socialUrl = [
  { name: "LinkedIN", value : "linkedin", imgUrl : LinkedIN },
  { name: "Facebook", value : "facebook", imgUrl : FaceBook },
  { name: "Instagram", value : "instagram", imgUrl : InstaGram },
  { name: "Twitter", value : "twitter", imgUrl : Twitter },
  { name: "GitLab", value : "gitlab", imgUrl : Twitter },
  { name: "GitHub", value : "github", imgUrl : Twitter },
]
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
  const [activeSoftSkill, setActiveSoftSkill] = useState("");
  const [activeAwards, setActiveAwards] = useState("");
  const [resume_detail, setResumeDetail] = useState(props.resume_detail);
  const [active, setActive] = useState("");

  useEffect(() => {
    setResumeDetail(props.resume_detail);
  }, [props.resume_detail]);

  useEffect(() => {
    setBasicInfo(props.basic_info);
  }, [props.basic_info]);

  const handleFileUpload = (e) => {
    props.updateUserProfileImage(resume_detail.id, e.target.files[0]);
  };
  const handleFileDelete = (e) => {
    props.updateUserProfileImage(resume_detail.id, '');
  };

  const handleBasicInfoChange = (type , value) => {
    let basicInfo = basic_info.social_account;

    let basic =  basicInfo.map(itm => { 
      if(itm.type == type){
        itm.url = value;
      }
      return itm;
      }
    )

    setBasicInfo(itm => ({...itm , social_account : basic}));

    props.handleToolEvent(basic , "social_account" )
  }

  const handleBasicInfoChangePersonal = (type , val, subObject) => {

    if(subObject){
      let basicInfo = basic_info[subObject];
      if(type == "address"){
        console.log(basicInfo[type] , type, val)
        basicInfo["address"] = val;
        setBasicInfo(itm => ({...itm , [subObject] : basicInfo }));
      } else{
        basicInfo[type].value = val;
        setBasicInfo(itm => ({...itm , [subObject] : basicInfo }));  
      }
      props.handleToolEvent({...basic_info , [subObject] : basicInfo } , "basic_info")
  
    } else{
      console.log(val , type)
      setBasicInfo(itm => ({...itm , [type] : val }));
      if(type == "dob"){
        val = new Date(val).toISOString()
      }
      props.handleToolEvent({...basic_info , [type] : val } , "basic_info")
  
    }
  }
  
  const handleEducationClick = () => {
    let education = resume_detail.education;
    education.push({
      awards: [],
      courses: [],
      degree: "",
      degree_major: "",
      startDate: "",
      endDate: "",
      institute_name: "",
      location: "",
      marks: { value: "", type: "" },
      projects: [],
      thesis: [],
      description: ""
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
      title: "",
      company: "",
      location: "",
      duration: {
        from: "",
        to: "",
      },
      achievements: "",
      description: "",
      areaOfWork:"",
      currentCompany: false
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

  const handleSoftSkillClick = (active) => {
    let softSkills = resume_detail.skills.softSkills;
    softSkills.push({ name: "" });
    setActiveSoftSkill(softSkills.length - 1);
    setResumeDetail((fld) => ({
      ...fld,
       skills: { ...resume_detail.skills, softSkills: softSkills } ,
    }));
  };

  const handleSoftSkillsChange = (key, value, active) => {
    let softSkills = resume_detail.skills.softSkills;
    softSkills[active][key] = value;
    props.handleToolEvent(softSkills, "softSkills");
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
      title: "",
      description: "",
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
    props.handleToolEvent(achievements, "achievements");
  };

  const handleAchievementClick = () => {
    let achievements = resume_detail.achievements;
    achievements.push({
      title: "",
      description: "",
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
      title: "",
      description: "",
      location: "",
      startDate: "",
      endDate: "",
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
      title: "",
      description: "",
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
      title: "",
      providers: "",
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
      title: "",
      providers: "",
      date: "",
      location: "",
      certificate_no: "",
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
      title: "",
      date: "",
      description: "",
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
      title: "",
      application_no: "",
      date: "",
      location: "",
      url: "",
      description: "",
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
      name: "",
      company: "",
      location: "",
      position: "",
      contact: "",
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
      case "softSkills":
        let softSkills = resume_detail.skills.softSkills;
        softSkills.splice(active, 1);
        setActiveSoftSkill("");
        props.handleToolEvent(softSkills, "softSkills");
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
        props.handleToolEvent(achievements, "achievements");
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


  const renderSkill = () => {
    let h = [];
    resume_detail.skills &&
      resume_detail.skills.skills.map((itm, index) =>
        h.push(
          activeSkill !== index ? (
            <>
              <div className="rmfPreFilledBox rmfPreFilledSmall">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>{itm.name}</h4>
                <div className="rmfPreFilButton">
                  <button
                    onClick={() => setActiveSkill(index)}
                    className="rmfbuttom"
                  >
                    <img src={rmfEdit} alt="" />
                  </button>
                  <button
                    onClick={() => handleDelate(index, "skills")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                  </button>
                </div>
              </div>
            </div>
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

  const renderSoftSkill = () => {
    let h = [];
    resume_detail.skills &&
      resume_detail.skills.softSkills.map((itm, index) =>
        h.push(
          activeSoftSkill !== index ? (
            <>
              <div className="rmfPreFilledBox rmfPreFilledSmall">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>{itm.name}</h4>
                <div className="rmfPreFilButton">
                  <button
                    onClick={() => setActiveSoftSkill(index)}
                    className="rmfbuttom"
                  >
                    <img src={rmfEdit} alt="" />
                  </button>
                  <button
                    onClick={() => handleDelate(index, "softSkills")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                  </button>
                </div>
              </div>
            </div>
            </>
          ) : (
            <SoftSkills
              active={activeSoftSkill}
              handleDone={() => setActiveSoftSkill("")}
              handleSoftSkillDelete={handleDelate}
              handleSoftSkillsChange={handleSoftSkillsChange}
              value={resume_detail.skills.softSkills[activeSoftSkill]}
            />
          )
        )
      );

    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.skills ? resume_detail.skills.softSkills : []}
        keys="softSkills"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };

  const renderEducation = () => {
    let h = [];
    resume_detail.education &&
      resume_detail.education.map((itm, index) =>
        h.push(
          activeEducation !== index ? (
            <>
            <div className="rmfPreFilledBox">
                <span className="rmfPreDragDropIcon">
                  <img src={dotsGroup} alt="" />
                </span>
                <div className="rmfPreFilled">
                  <h4>
                    {itm.degree}
                    <span>
                      {itm.institute_name} {itm.startDate} -- {itm.endDate}
                    </span>
                  </h4>
                  <div className="rmfPreFilButton">
                    <button className="rmfbuttom" onClick={() => setActiveEducation(index)}>
                      <img src={rmfEdit} alt="" />
                      
                    </button>
                    <button className="rmfDeletebutton" onClick={() => handleDelate(index, "education")}>
                      <img src={rmfDeleteWhite} alt="" />
                      
                    </button>
                  </div>
                </div>
              </div>
              
            </>
          ) : (
            <Education
              active={activeEducation}
              handleSave={() => setActiveEducation("")}
              handleEducationDelete={handleDelate}
              handleEducationsChange={handleEducationCB}
              education={resume_detail.education[activeEducation]}
            />
          )
        )
      );

    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.education ? resume_detail.education : []}
        keys="education"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };
  console.log(resume_detail)
  const renderExperience = () => {
    let h = [];
    resume_detail.employment_history &&
      resume_detail.employment_history.map((itm, index) =>
        h.push(
          activeExperience !== index ? (
            <>
            <div className="rmfPreFilledBox">
                <span className="rmfPreDragDropIcon">
                  <img src={dotsGroup} alt="" />
                </span>
                <div className="rmfPreFilled">
                  <h4>
                    {itm.title}
                    <span>
                      {itm.company} {itm.duration.from.mm}/{itm.duration.from.yy} -- {itm.duration.to.mm}/{itm.duration.to.yy}
                    </span>
                  </h4>
                  <div className="rmfPreFilButton">
                    <button className="rmfbuttom" onClick={() => setActiveExperience(index)}>
                      <img src={rmfEdit} alt="" />
                      
                    </button>
                    <button className="rmfDeletebutton" onClick={() => handleDelate(index, "experience")}>
                      <img src={rmfDeleteWhite} alt="" />
                      
                    </button>
                  </div>
                </div>
              </div>
              
            </>
          ) : (
            <Experience
              active={activeExperience}
              handleSave={() => setActiveExperience("")}
              handleExperienceDelete={handleDelate}
              handleExperiencesChange={handleExperienceCB}
              experience={resume_detail.employment_history[activeExperience]}
            />
          )
        )
      );

    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.employment_history ? resume_detail.employment_history : []}
        keys="employment_history"
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
            <div className="rmfPreFilledBox rmfPreFilledSmall">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>{itm.title}</h4>
                <div className="rmfPreFilButton">
                  <button
                    onClick={() => setActiveAwards(index)}
                    className="rmfbuttom"
                  >
                    <img src={rmfEdit} alt="" />
                  </button>
                  <button
                    onClick={() => handleDelate(index, "awards")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                  </button>
                </div>
              </div>
            </div>
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
            <div className="rmfPreFilledBox rmfPreFilledSmall">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>{itm}</h4>
                <div className="rmfPreFilButton">
                  <button
                    onClick={() => setActiveHobbies(index)}
                    className="rmfbuttom"
                  >
                    <img src={rmfEdit} alt="" />
                  </button>
                  <button
                    onClick={() => handleDelate(index, "hobbies")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Hobbies
              active={activeHobbies}
              handleDone={() => setActiveHobbies("")}
              handleHobbiesDelete={handleDelate}
              handleHobbiessChange={handleHobbiesChange}
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
                    
                  </button>
                  <button
                    onClick={() => handleDelate(index, "certifications")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                    
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
                  value={
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

  const renderConference = () => {
    let h = [];
    resume_detail.conferences &&
      resume_detail.conferences.map((item, index) =>
        h.push(
          activeConference !== index ? (
            <div className="rmfPreFilledBox">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>
                  {item.title ? item.title : "Title"}
                  <span>
                    {item.location ? item.location : ""}{" "}
                    {item.date ? item.date : ""}
                  </span>
                </h4>
                <div className="rmfPreFilButton">
                  <button
                    className="rmfbuttom"
                    onClick={() => setActiveConference(index)}
                  >
                    <img src={rmfEdit} alt="" />
                    
                  </button>
                  <button
                    onClick={() => handleDelate(index, "conference")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                    
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {activeConference !== "" && (
                <Conference
                  handleSave={() => setActiveConference("")}
                  handleConferencesDelete={handleDelate}
                  active={activeConference}
                  value={
                    resume_detail.conferences[activeConference]
                  }
                  handleChange={handleConferenceCB}
                />
              )}
            </div>
          )
        )
      );
    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.conferences ? resume_detail.conferences : []}
        keys="conferences"
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
                    
                  </button>
                  <button
                    onClick={() => handleDelate(index, "trainings")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                    
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
                  value={resume_detail.trainings[activeTrainings]}
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

  const renderPatents = () => {
    let h = [];
    resume_detail.patents &&
      resume_detail.patents.map((item, index) =>
        h.push(
          activePatents !== index ? (
            <div className="rmfPreFilledBox">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>
                  {item.title ? item.title : "Title"}
                  <span>
                    {item.application_no ? item.application_no : "App No"}{" "}
                    {item.date ? item.date : ""}
                  </span>
                </h4>
                <div className="rmfPreFilButton">
                  <button
                    className="rmfbuttom"
                    onClick={() => setActivePatents(index)}
                  >
                    <img src={rmfEdit} alt="" />
                    
                  </button>
                  <button
                    onClick={() => handleDelate(index, "patents")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                    
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {activePatents !== "" && (
                <Patent
                  handleSave={() => setActivePatents("")}
                  handlePatentsDelete={handleDelate}
                  active={activePatents}
                  value={resume_detail.patents[activePatents]}
                  handleChange={handlePatentsCB}
                />
              )}
            </div>
          )
        )
      );
    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.patents ? resume_detail.patents : []}
        keys="patents"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };

  const renderAchievements = () => {
    let h = [];
    resume_detail.achievements &&
      resume_detail.achievements.map((item, index) =>
        h.push(
          activeAchievement !== index ? (
            <div className="rmfPreFilledBox">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>
                  {item.title ? item.title : "Title"}
                  <span>
                    {item.location ? item.location : "Location"}
                    {item.date ? item.date : ""}
                  </span>
                </h4>
                <div className="rmfPreFilButton">
                  <button
                    className="rmfbuttom"
                    onClick={() => setActiveAchievement(index)}
                  >
                    <img src={rmfEdit} alt="" />
                    
                  </button>
                  <button
                    onClick={() => handleDelate(index, "achievement")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                    
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {activeAchievement !== "" && (
                <Achievement
                  handleSave={() => setActiveAchievement("")}
                  handleAchievementsDelete={handleDelate}
                  active={activeAchievement}
                  value={resume_detail.achievements[activeAchievement]}
                  handleChange={handleAchievementCB}
                />
              )}
            </div>
          )
        )
      );
    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.achievements ? resume_detail.achievements : []}
        keys="achievements"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };

  const renderPublications = () => {
    let h = [];
    resume_detail.publications &&
      resume_detail.publications.map((item, index) =>
        h.push(
          activePublications !== index ? (
            <div className="rmfPreFilledBox">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>
                  {item.title ? item.title : "Title"}
                  <span>
                    {/* {item.location ? item.application_no : "App No"}{" "} */}
                    {item.date ? item.date : ""}
                  </span>
                </h4>
                <div className="rmfPreFilButton">
                  <button
                    className="rmfbuttom"
                    onClick={() => setActivePublications(index)}
                  >
                    <img src={rmfEdit} alt="" />
                    
                  </button>
                  <button
                    onClick={() => handleDelate(index, "publications")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                    
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {activePublications !== "" && (
                <Publication
                  handleSave={() => setActivePublications("")}
                  handlePublicationsDelete={handleDelate}
                  active={activePublications}
                  value={resume_detail.publications[activePublications]}
                  handleChange={handlePublicationsChange}
                />
              )}
            </div>
          )
        )
      );
    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.publications ? resume_detail.publications : []}
        keys="publications"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };

  const renderCustomField = () => {
    let h = [];
    resume_detail.custom_field &&
      resume_detail.custom_field.map((item, index) =>
        h.push(
          activeCustom_field !== index ? (
            <div className="rmfPreFilledBox">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>
                  {item.title ? item.title : "Title"}
                  <span>
                    {item.date ? item.date : ""}
                  </span>
                </h4>
                <div className="rmfPreFilButton">
                  <button
                    className="rmfbuttom"
                    onClick={() => setActiveCustom_field(index)}
                  >
                    <img src={rmfEdit} alt="" />
                    
                  </button>
                  <button
                    onClick={() => handleDelate(index, "custom_field")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                    
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {activeCustom_field !== "" && (
                <Custom_field
                  handleSave={() => setActiveCustom_field("")}
                  handleCustom_fieldsDelete={handleDelate}
                  active={activeCustom_field}
                  value={resume_detail.custom_field[activeCustom_field]}
                  handleChange={handleCustom_fieldCB}
                />
              )}
            </div>
          )
        )
      );
    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.custom_field ? resume_detail.custom_field : []}
        keys="custom_field"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };

  const renderVolunteer = () => {
    let h = [];
    resume_detail.volunteers &&
      resume_detail.volunteers.map((item, index) =>
        h.push(
          activeVolunteer !== index ? (
            <div className="rmfPreFilledBox">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>
                  {item.title ? item.title : "Title"}
                  <span>
                    {item.location ? item.location : ""}{" "}
                    {item.startDate ? item.startDate : ""} to {item.endDate ? item.endDate : ""}
                  </span>
                </h4>
                <div className="rmfPreFilButton">
                  <button
                    className="rmfbuttom"
                    onClick={() => setActiveVolunteer(index)}
                  >
                    <img src={rmfEdit} alt="" />
                    
                  </button>
                  <button
                    onClick={() => handleDelate(index, "volunteer")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                    
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {activeVolunteer !== "" && (
                <Volunteer
                  handleSave={() => setActiveVolunteer("")}
                  handleVolunteersDelete={handleDelate}
                  active={activeVolunteer}
                  value={
                    resume_detail.volunteers[activeVolunteer]
                  }
                  handleChange={handleVolunteerCB}
                />
              )}
            </div>
          )
        )
      );
    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.volunteers ? resume_detail.volunteers : []}
        keys="volunteers"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };

  const renderReference = () => {
    let h = [];
    resume_detail.references &&
      resume_detail.references.map((item, index) =>
        h.push(
          activeReferences !== index ? (
            <div className="rmfPreFilledBox">
              <span className="rmfPreDragDropIcon">
                <img src={dotsGroup} alt="" />
              </span>
              <div className="rmfPreFilled">
                <h4>
                  {item.name ? item.name : "Title"}
                  <span>
                    {item.company ? item.company : ""}{" "}
                    {item.position ? item.position : ""}  {item.contact ? item.contact : ""}
                  </span>
                </h4>
                <div className="rmfPreFilButton">
                  <button
                    className="rmfbuttom"
                    onClick={() => setActiveReferences(index)}
                  >
                    <img src={rmfEdit} alt="" />
                    
                  </button>
                  <button
                    onClick={() => handleDelate(index, "references")}
                    className="rmfDeletebutton"
                  >
                    <img src={rmfDeleteWhite} alt="" />
                    
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {activeReferences !== "" && (
                <Reference
                  handleSave={() => setActiveReferences("")}
                  handleReferencesDelete={handleDelate}
                  active={activeReferences}
                  value={
                    resume_detail.references[activeReferences]
                  }
                  handleChange={handleReferencesCB}
                />
              )}
            </div>
          )
        )
      );
    return (
      <DragAndDrop
        htmlContent={h}
        items={resume_detail.references ? resume_detail.references : []}
        keys="references"
        handleToolEvent={(value, key) => props.handleToolEvent(value, key)}
      />
    );
  };
  console.log(basic_info, "Basic info")
  return (
    <div className="rmfromwrpr">
      <div className="rmf_thin_scroll">
        <div className="rmfShadow rmfProfileBox">
          <div className="rmfImg">
            <span className="rmfImgIcon">
              <img src={starMarked} alt="" />
            </span>
            <div className="rmfImgBox">
              <img src={resume_detail.profileImage ? resume_detail.profileImage: pp2} alt="" />
            </div>
          </div>
          <div className="rmfImgSelect" >
            <input type="file" style={{display: "none"}} onChange={(e) => handleFileUpload(e)} id="flUpload"/>
            <span onClick={() => {document.getElementById("flUpload").click()}} className="rmfSelect">
              <img
                src={rmfFileUpload}
                alt=""
                width="24px"
                height="24px"
              />
            </span>
            <span onClick={() => handleFileDelete()} className="rmfDelete">
              <img
                src={rmfDelete}
                alt=""
                width="24px"
                height="24px"
              />
            </span>
          </div>
          <div class="rmfTitleBox">
              <div class="rmfInputfiled">
                  <label><img src={userRectangle} width="18px" height="18px" />Job Title / Professional Title</label>
                  <input 
                    type="text"
                    name="job_title"
                    value={
                      resume_detail.job_title
                        ? resume_detail.job_title
                        : "Enter Job Title"
                    }

                    placeholder="Job Title"
                    onChange={(e) => props.handleToolEvent(e.target.value, "job_title")}      
                    />
              </div>
          </div>
          
          {/* <div className="rmfTitleBox">
            <div className="rmfInputfiled">
              <label>
                <img
                  src={userRectangle}
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
          </div> */}
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon">
                <img src={rmfBgUser} alt="" />
              </span>
              Personal Details
              <span className="rmfAccIcon" style={{transform:  active == "personal" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "personal" ? "" : "personal")}>
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            {active =="personal" && <div className="rmfAccContainer">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src={userRectangle}
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your First Name
                    </label>
                    <input type="text" value={basic_info.first_name} onChange={(e) => handleBasicInfoChangePersonal("first_name" , e.target.value)} placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled m24">
                    <label>
                      <img
                        src={rmfFiUserName}
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your Last Name
                    </label>
                    <input type="text" value={basic_info.last_name} onChange={(e) => handleBasicInfoChangePersonal("last_name" , e.target.value)} placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="rmfInputfiled rmfInputMobile m24">
                    <label>
                      <img
                        src={rmfFiPhoneCall}
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your Phone Number
                    </label>
                    <select className="rmCountryCode" value={basic_info.ccode} onChange={(e) => handleBasicInfoChangePersonal("ccode" , e.target.value)} >
                      <option>+48</option>
                      <option>+91</option>
                      <option>+80</option>
                      <option>+81</option>
                    </select>
                    <input type="text" value={basic_info.contact} onChange={(e) => handleBasicInfoChangePersonal("contact" , e.target.value)} placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-6 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src={rmfFiMail}
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your E-Mail Address
                    </label>
                    <input type="text" value={basic_info.email} onChange={(e) => handleBasicInfoChangePersonal("email" , e.target.value)} placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-3 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src={rmfArchway}
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your City
                    </label>
                    <input type="text" value={basic_info.address.city.value} onChange={(e) => handleBasicInfoChangePersonal("city" , e.target.value , "address" )} placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-4 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src={rmfFiMapPin}
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your Country
                    </label>
                    <input type="text" value={basic_info.address.country.value} onChange={(e) => handleBasicInfoChangePersonal("country" , e.target.value , "address" )} placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-5 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src={rmfFiMapPin}
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Your Address
                    </label>
                    <input type="text" value={basic_info.address.address} onChange={(e) => handleBasicInfoChangePersonal("address" , e.target.value , "address" )} placeholder="" />
                  </div>
                </div>
                <div className="col-12 col-md-4 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src={rmfGift}
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Date of Birth
                    </label>
                    {/* <label class="rmf_control rmf_checkbox">Present
                        <input type="checkbox" checked={!(basic_info.dob == null)} onChange={() => handleBasicInfoChangePersonal("dob" , null)}/>
                        <span class="rmf_control__indicator"></span>
                    </label> */}
                    <input type="date" value={basic_info.dob ? basic_info.dob.split("T")[0] : null} onChange={(e) => handleBasicInfoChangePersonal("dob" , e.target.value)} placeholder="DD/MM/YYY" />
                    
                  </div>
                </div>
                {/* <div className="col-12 col-md-4 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src={rmfUAlign}
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Date Format
                    </label>
                    <input type="text" name="" placeholder="DD/MM/YYY" />
                  </div>
                </div> */}
                <div className="col-12 col-md-4 m24">
                  <div className="rmfInputfiled">
                    <label>
                      <img
                        src={rmfAirplaneTakeOff}
                        alt=""
                        width="18px"
                        height="18px"
                      />
                      Willing to Relocate?
                    </label>
                    <select value={basic_info.willing_to_relocate} onChange={(e) => handleBasicInfoChangePersonal("willing_to_relocate" , e.target.value)}>
                      <option value={true}>Yes</option>
                      <option value={false}>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          }</div>
        </div>

        {/* <!-- Social Details HTML --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon">
                <img src={SocialDetails} alt="" />
              </span>
              Social Details
              <span className="rmfAccIcon" style={{transform:  active == "socialUrl" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "socialUrl" ? "" : "socialUrl")}>
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
          { active == "socialUrl" && <div className="rmfAccContainer">
              <div className="row">
                {
                  socialUrl.map((itm) => (
                    <div className="col-12 col-md-6">
                      <div className="rmfInputfiled m24">
                        <label>
                          <img
                            src={itm.imgUrl}
                            alt=""
                            width="18px"
                            height="18px"
                          />
                          {itm.name}
                        </label>
                        <input type="text" onChange= {(e) => handleBasicInfoChange(basic_info?.social_account?.filter(item => (item.type == itm.value))[0].type , e.target.value )} value={basic_info?.social_account?.filter(item => (item.type == itm.value))[0].url} name={basic_info?.social_account?.filter(item => (item.type == itm.value))[0].type} placeholder="Enter Url" />
                      </div>
                  </div>
                  ))
                }
              </div>
            </div>
          }</div>
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
              <span className="rmfAccIcon" style={{transform:  active == "experience" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "experience" ? "" : "experience")}>
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
          {active == "experience" && <div className="rmfAccContainer">
              {renderExperience()}
              <div className="row">
                <div className="col-12 col-md-12">
                  <button className="rmfbuttom" onClick={handleExperienceClick}>
                    <img src={rmfBgPlus} alt="" />
                    Add Work Experience{" "}
                  </button>
                </div>
              </div>
            </div>
          }</div>
        </div>

        {/* <!-- Work Experience  HTML --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon">
                <img src={rmfBgResumeSummary} alt="" />
              </span>
              Education{" "}
              <span className="rmfAccIcon" style={{transform:  active == "education" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "education" ? "" : "education")}>
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
          {active == "education" &&  <div className="rmfAccContainer">
              {renderEducation()}
              <div className="row">
                <div className="col-12 col-md-12">
                  <button className="rmfbuttom" onClick={handleEducationClick}>
                    <img src={rmfBgPlus} alt="" />
                    Add Education{" "}
                  </button>
                </div>
              </div>
            </div>
          }</div>
        </div>

        {/* <!-- Skills HTML --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img src={rmfHash} alt="" />
              </span>
              Skills
              <span className="rmfAccIcon" style={{transform:  active == "skills" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "skills" ? "" : "skills")}>
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
          { active == "skills" && <div className="rmfAccContainer">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="rmfInputfiled rmfInputwitCheck m24">
                        <label>
                          <img
                            src={rmfSettings}
                            alt=""
                            width="18px"
                            height="18px"
                          />
                          Skills
                        </label>
                    {renderSkill()}
                        
                      </div>
                    </div>
                    {/* <div className="col-12 col-md-12 m24">
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
                    </div> */}
                    <div className="col-12 col-md-12">
                      <button className="rmfbuttom" onClick={handleSkillClick}>
                        <img src={rmfBgPlus} alt=""  />
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
                            src={rmfSoftSkills}
                            alt=""
                            width="18px"
                            height="18px"
                          />
                          Soft Skills
                        </label>
                        {renderSoftSkill()}
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <button className="rmfbuttom" onClick={handleSoftSkillClick}>
                        <img src={rmfBgPlus} alt="" />
                        Add Soft Skills
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }</div>
        </div>

        {/* <!-- Skills HTML --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img src={rmfLangIntr} alt="" />
              </span>
              Languages and Interests
              <span className="rmfAccIcon" style={{transform:  active == "language" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "language" ? "" : "language")}>
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            {active== "language" && <div className="rmfAccContainer">
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
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="rmfInputfiled rmfInputwitCheck m24">
                        <label>
                          <img
                            src={rmfSport}
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
                        {renderHobbies()}
                      </div>
                    </div>
                    <div className="col-12 col-md-12">
                      <button className="rmfbuttom" onClick={() => handleHobbiesClick(activeHobbies)}>
                        <img src={rmfBgPlus} alt="" />
                        Add Interests
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }</div>
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
                <img src={rmfPaperFolding} alt="" />
              </span>
              Patents and Publications
              <span className="rmfAccIcon"  style={{transform:  active == "publication" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "publication" ? "" : "publication")}>
                <img src={rmfTopDashed} alt=""/>
              </span>
            </div>
            {active == "publication" && <div className="rmfAccContainer">
              <div className="rmfAccTopTitle">
                <img
                  src={rmfPatient}
                  alt=""
                  width="18px"
                  height="18px"
                />
                Patents
              </div>
              {renderPatents()}
              <div className="row">
                <div className="col-12 col-md-12 m60">
                  <button className="rmfbuttom" onClick={() => handlePatentsClick(activePatents)}>
                    <img src={rmfBgPlus} alt="" />
                    Add Patent
                  </button>
                </div>
              </div>

              <div className="rmfAccTopTitle">
                <img
                  src={rmfPublication}
                  alt=""
                  width="18px"
                  height="18px"
                />
                Publication
              </div>
              {renderPublications()}
              <div className="row">
                <div className="col-12 col-md-12">
                  <button className="rmfbuttom" onClick={() => handlePublicationsClick(activePublications)}>
                    <img src={rmfBgPlus} alt="" />
                    Add Publication
                  </button>
                </div>
              </div>
              </div>
          }</div>
        </div>

        {/* <!-- Achievements and Awards --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img src={rmfPaperFolding} alt="" />
              </span>
              Achievements and Awards
              <span className="rmfAccIcon" style={{transform:  active == "achievement" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "achievement" ? "" : "achievement")}>
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
          {active === "achievement" &&  <div className="rmfAccContainer">
              <div className="rmfAccTopTitle">
                <img
                  src={rmfPatient}
                  alt=""
                  width="18px"
                  height="18px"
                />
                Achievements
              </div>
              {renderAchievements()}
              <div className="row">
                <div className="col-12 col-md-12 m60">
                  <button className="rmfbuttom" onClick={() => handleAchievementClick(activeAchievement)}>
                    <img src={rmfBgPlus} alt="" />
                    Add Achievements
                  </button>
                </div>
              </div>

              {/* <!-- Awards HTML --> */}
              <div className="rmfAccTopTitle">
                <img
                  src={rmfPublication}
                  alt=""
                  width="18px"
                  height="18px"
                />
                Awards
              </div>
                {renderAwards()}
                <div className="col-12 col-md-12">
                  <button className="rmfbuttom" onClick={() => handleAwardsClick(activeAwards)}>
                    <img src={rmfBgPlus} alt="" />
                    Add Award
                  </button>
              </div>
            </div>
          }</div>
        </div>

        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img
                  src={rmfProjectConference}
                  alt=""
                />
              </span>
              Projects and Conferences
              <span className="rmfAccIcon" style={{transform:  active == "conference" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "conference" ? "" : "conference")}>
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
          {active == "conference" && <div className="rmfAccContainer">
              {/* <!-- Projects HTML --> */}
              {renderConference()}
              <div className="row">
                <div className="col-12 col-md-12 m60">
                  <button className="rmfbuttom" onClick={() => handleConferenceClick(activeAwards)}>
                    <img src={rmfBgPlus} alt="" />
                    Add New
                  </button>
                </div>
              </div>
            </div>
          }</div>
        </div>

        {/* <!-- Projects and Conferences --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img
                  src={rmfVolunteerExperience}
                  alt=""
                />
              </span>
              Volunteer Experience
              <span className="rmfAccIcon" style={{transform:  active == "volunteer" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "volunteer" ? "" : "volunteer")}>
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
          {active == "volunteer" &&  <div className="rmfAccContainer">
              {renderVolunteer()}
              <div className="row">
                <div className="col-12 col-md-12 m60 rmfButtonWrpr">
                  <button className="rmfbuttom" onClick={() => handleVolunteerClick()}>
                    <img src={rmfBgPlus} alt="" />
                    Add Volenteer Experience
                  </button>
                </div>
              </div>
            </div>
          }</div>
        </div>

        {/* <!-- References --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img src={rmfReference} alt="" />
              </span>
              References
              <span className="rmfAccIcon" style={{transform:  active == "reference" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "reference" ? "" : "reference")}>
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
            {active == "reference" && <div className="rmfAccContainer">
              {renderReference()}
              
              <div className="row">
                <div className="col-12 col-md-12 m60 rmfButtonWrpr">
                  <button className="rmfbuttom" onClick={() => handleReferencesClick()}>
                    <img src={rmfBgPlus} alt="" />
                    Add Reference
                  </button>
                </div>
              </div>
            </div>}
          </div>
        </div>

        {/* <!-- Custom Section --> */}
        <div className="rmfShadow">
          <div className="rmfShadowBrdr rmfOpenAcc">
            <div className="rmfAccHeader">
              <span className="icon softSkillsIcon">
                <img src={iconSettingCOnfig} alt="" />
              </span>
              Custom Section
              <span className="rmfAccIcon" style={{transform:  active == "custom" ? "none": "rotate(180deg)"}} onClick={() => setActive(active == "custom" ? "" : "custom")}>
                <img src={rmfTopDashed} alt="" />
              </span>
            </div>
          {active == "custom" &&  <div className="rmfAccContainer">
            {renderCustomField()}
              <div className="row">
                <div className="col-12 col-md-12 m60 rmfButtonWrpr">
                  <button className="rmfbuttom" onClick={handleCustom_fieldClick}>
                    <img src={rmfBgPlus} alt="" />
                    Add Custom Section
                  </button>
                </div>
              </div>
            </div>
          }</div>
        </div>
      </div>
    </div>
  );
};

export default Form;
