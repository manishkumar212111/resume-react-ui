import React, { useEffect, useState } from "react";
import "./index.scss";
import "./icons.scss";
import Img from "./images/pp.jpg";

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const defaultProps = {
  sideBarCb: () => {},
  handleToolEvent: () => {},
};

const Index = (props) => {
  const [basic_info, setBasicInfo] = useState({});

  const [resume_detail, setResumeDetail] = useState(props.resume_detail);

  useEffect(() => {
    setResumeDetail(props.resume_detail);
  }, [props.resume_detail]);

  useEffect(() => {
    setBasicInfo(props.basic_info);
  }, [props.basic_info]);

  const renderSkill = () => {
    let h = [];
    resume_detail.skills &&
      resume_detail.skills.skills.map((itm, index) =>
        h.push(
          <li>
            <span className="resumeSkillsTitle">{itm.name}</span>
            <span className="resumeSkillsBar">
              <span
                className="leftTextSize"
                style={{ width: itm.score ? itm.score : 0 }}
              ></span>
            </span>
          </li>
        )
      );
    return h;
  };

  const renderAwards = () => {
    let h = [];
    resume_detail.awards &&
      resume_detail.awards.map((itm, index) =>
        h.push(<p className="resumeAwardRec">{itm.title}</p>)
      );
    return h;
  };

  const renderHobbies = () => {
    let h = [];
    resume_detail.hobbies &&
      resume_detail.hobbies.map((itm, index) =>
        h.push(
          <li>
            <span className="resumeSkillsTitle">{itm}</span>
          </li>
        )
      );
    return h;
  };

  const renderLanguages = () => {
    let h = [];
    resume_detail.languages &&
      resume_detail.languages.map((itm, index) =>
        h.push(
          <li>
            <span className="resumeSkillsTitle">{itm}</span>
          </li>
        )
      );
    return h;
  };

  return (
    <main
      class={`${props.downloads ? "downloadMain" : ""} resumeMain ${
        resume_detail.style.fontSize == 12
          ? "smallTxt"
          : resume_detail.style.fontSize == 14
          ? "mediumTxt"
          : resume_detail.style.fontSize == 16
          ? "largeTxt"
          : "extraLargeTxt"
      }`}
      style={{
        backgroundColor: resume_detail?.style?.background,
        color: resume_detail?.style?.text_color,
        fontFamily: resume_detail?.style?.fontType || 'Arial, sans-serif'
      }}
    >
      <div className="resumeLeft">
        <div className="resumeProfile">
          {resume_detail.profileImage && (
            <div className="resumePP">
              <img src={resume_detail.profileImage} alt="" />
            </div>
          )}
          <ul>
            <li>
              <i className="icon-Vector"></i>
              {basic_info ? basic_info.ccode + basic_info.contact : ""}{" "}
            </li>
            <li>
              <i className="icon-mail"></i>
              {basic_info.email ? basic_info.email : ""}
            </li>
            {/* <li><i className="icon-linkedin"></i>linkedin.com/username</li> */}
            {basic_info.address && (
              <li>
                <i className="icon-home"></i>
                {basic_info.address.address}
              </li>
            )}
          </ul>
        </div>
        {/* <div className="resumeSortBio">
                <ul>
                    <li><i className="icon-expend"></i>oswaldgemi@gmail.com</li>
                    <li><i className="icon-calendar"></i>linkedin.com/username</li>
                    <li><i className="icon-location1"></i>123 Street no, Locailty, City, Country</li>
                </ul>
            </div> */}
        <div className="resumEducation">
          <h4>EDUCATION</h4>
          {resume_detail.education &&
            resume_detail.education.map((item, index) => (
              <div className="resumEducationInfo">
                <span className="resumeDegree">
                  {item.degree ? item.degree : "Program"}/
                  {item.institute_name ? item.institute_name : "Institute Name"}
                </span>
                <span className="resumeUniName">
                  {item.startDate} to {item.endDate}
                </span>
                <span className="resumelocation">
                  {item.location ? item.location : ""}
                </span>
              </div>
            ))}
        </div>
        {resume_detail.sample_map && resume_detail.sample_map.skills && (
          <ul className="resumeSkills">
            <h4>SKILLS</h4>
            {renderSkill()}
          </ul>
        )}
        {resume_detail.sample_map && resume_detail.sample_map.languages && (
          <ul className="resumeSkills resumeLangSpoke">
            <h4>LANGUAGES</h4>
            {renderLanguages()}
          </ul>
        )}

        {resume_detail.sample_map && resume_detail.sample_map.hobbies && (
          <ul className="resumeSkills resumeLangSpoke">
            <h4>Hobbies</h4>
            {renderHobbies()}
          </ul>
        )}
        {resume_detail.sample_map && resume_detail.sample_map.certifications && (
          <div className="resumEducation resumeCeriFLic">
            <h4>CERTIFICATE & LICENSE</h4>
            {resume_detail.certifications &&
              resume_detail.certifications.map((item, index) => (
                <div className="resumEducationInfo">
                  <span className="resumeDegree">
                    {item.title ? item.title : "Title"}
                  </span>
                  <span className="resumeUniName">
                    {item.providers ? item.providers : "Training providers"}
                  </span>
                  <span className="resumelocation">
                    {item.date ? item.date : "Date"}
                  </span>
                  <span className="resumeCourse">
                    {item.certificate_no
                      ? item.certificate_no
                      : "Certifcate No"}
                  </span>
                </div>
              ))}
          </div>
        )}

        {resume_detail.sample_map && resume_detail.sample_map.publications && (
          <div className="resumEducation resumeCeriFLic">
            <h4>PUBLICATION & APPEARENCES</h4>
            {resume_detail.publications &&
              resume_detail.publications.map((item, index) => (
                <div className="resumEducationInfo">
                  <span className="resumeDegree">
                    {item.title ? item.title : "Title"}
                  </span>
                  <span className="resumeUniName">
                    {item.date ? item.date : "Date"}
                  </span>
                  <span className="resumeDescp">
                    {item.description ? item.description : "Description"}
                  </span>
                </div>
              ))}
          </div>
        )}
        {resume_detail.sample_map && resume_detail.sample_map.trainings && (
          <div className="resumEducation resumeCeriFLic">
            <h4>TRAINING</h4>
            {resume_detail.trainings &&
              resume_detail.trainings.map((item, index) => (
                <div className="resumEducationInfo">
                  <span className="resumeDegree">
                    {item.title ? item.title : "Title"}
                  </span>
                  <span className="resumeUniName">
                    {item.providers ? item.providers : "Training providers"}
                  </span>
                  <span className="resumeUniName">
                    {item.date ? item.date : "Date"}
                  </span>
                  <span className="resumeDescp">
                    {item.description ? item.description : "Description"}
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
      <div className="resumeRight">
        {basic_info && (
          <h1>
            {basic_info.first_name} <strong>{basic_info.last_name}</strong>
          </h1>
        )}
        <div className={"resumePosTitle"}>
          {props?.resume_detail?.job_title
            ? props.resume_detail.job_title
            : "Job Title"}
        </div>
        <div className={"resumeAboutMe"}>
          {resume_detail.summary ? resume_detail.summary : "Enter summary here"}
        </div>
        {resume_detail.sample_map &&
          resume_detail.sample_map.employment_history && (
            <div className="resumeExperince">
              <h2>EXPERIENCE</h2>
              {resume_detail.employment_history &&
                resume_detail.employment_history.map((item, index) => (
                  <div className="resumeJobTitleBlock">
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: (item.title
                          ? item.title
                          : "Job Title"
                        ).replaceAll("&lt;", "<"),
                      }}
                    ></h3>
                    <div
                      className="resumeComName"
                      dangerouslySetInnerHTML={{
                        __html: (item.company
                          ? item.company
                          : "Company"
                        ).replaceAll("&lt;", "<"),
                      }}
                    ></div>
                    <div className="resumeRightLoc">
                      {
                        months[
                          item.duration.from
                            ? parseInt(item.duration.from.split("-")[1]) - 1
                            : 0
                        ]
                      }
                      {item.duration.from
                        ? item.duration.from.split("-")[0]
                        : "2000"}{" "}
                      -
                      {item.currentCompany ? (
                        "PRESENT"
                      ) : (
                        <>
                          {
                            months[
                              item.duration.to
                                ? parseInt(item.duration.to.split("-")[1]) - 1
                                : 0
                            ]
                          }{" "}
                          {item.duration.to
                            ? item.duration.to.split("-")[0]
                            : "2003"}
                        </>
                      )}
                    </div>

                    <div
                      className="resumeRightLoc"
                      dangerouslySetInnerHTML={{
                        __html: (item.description
                          ? item.description
                          : ""
                        ).replaceAll("&lt;", "<"),
                      }}
                    ></div>
                  </div>
                ))}
            </div>
          )}
        {resume_detail.sample_map && resume_detail.sample_map.awards && (
          <div className="resumeAward">
            <h2>AWARDS</h2>
            {renderAwards()}
          </div>
        )}

        {resume_detail.sample_map && resume_detail.sample_map.conferences && (
          <div className="resumeConference">
            <h2>CONFERENCES</h2>
            {resume_detail.conferences &&
              resume_detail.conferences.map((item, index) => (
                <div className="resumeConfRecBlk">
                  <span className="title">
                    {item.title ? item.title : "Title"}
                  </span>
                  <span className="location">
                    {item.location ? item.location : "Location"}{" "}
                    {item.date ? item.date : "date"}
                  </span>
                  <span className="description">
                    {item.description ? item.description : "Description"}
                  </span>
                </div>
              ))}
          </div>
        )}
        {resume_detail.sample_map && resume_detail.sample_map.achievements && (
          <div className="resumeConference">
            <h2>ACHIEVEMENTS</h2>
            {resume_detail.achievements &&
              resume_detail.achievements.map((item, index) => (
                <div className="resumeConfRecBlk">
                  <span className="title">
                    {item.title ? item.title : "Title"}
                  </span>
                  <span className="location">
                    {item.location ? item.location : "Location"}{" "}
                    {item.date ? item.date : "date"}
                  </span>
                  <span className="description">
                    {item.description ? item.description : "Description"}
                  </span>
                </div>
              ))}
          </div>
        )}
        {resume_detail.sample_map && resume_detail.sample_map.volunteers && (
          <div className="resumeConference">
            <h2>VOLUNTEER WORK</h2>
            {resume_detail.volunteers &&
              resume_detail.volunteers.map((item, index) => (
                <div className="resumeConfRecBlk">
                  <span className="title">
                    {item.title ? item.title : "Title"}
                  </span>
                  <span className="location">
                    {item.location ? item.location : "Location"}{" "}
                    {item.date ? item.date : "date"}
                  </span>
                  <span className="description">
                    {item.description ? item.description : "Description"}
                  </span>
                </div>
              ))}
          </div>
        )}
        {resume_detail.sample_map && resume_detail.sample_map.patents && (
          <div className="resumeConference">
            <h2>PATENTS</h2>
            {resume_detail.patents &&
              resume_detail.patents.map((item, index) => (
                <div className="resumeConfRecBlk">
                  <span className="title">
                    {item.title ? item.title : "Title"}
                  </span>
                  <span className="location">
                    {item.application_no
                      ? item.application_no
                      : "Application No"}
                  </span>
                  <span className="location">
                    {item.location ? item.location : "location"}{" "}
                    {item.date ? item.date : "date"}
                  </span>
                  <span className="description">
                    {item.description ? item.description : "Description"}
                  </span>
                  <span className="link">
                    <span>URL</span> :
                    <a href="">{item.url ? item.url : "url"}</a>
                  </span>
                </div>
              ))}
          </div>
        )}
        {resume_detail.sample_map && resume_detail.sample_map.references && (
          <div className="resumeConference resumeReferene">
            <h2>REFERENCE</h2>
            {resume_detail.references &&
              resume_detail.references.map((item, index) => (
                <div className="resumeConfRecBlk resumeConfOneThBlk">
                  <span className="title">
                    {item.title ? item.title : "Title"}
                  </span>
                  <span className="location">
                    {item.company ? item.company : "company"}
                  </span>
                  <span className="location">
                    {item.location ? item.location : "location"}
                  </span>
                  <span className="location">
                    {item.position ? item.position : "position"}
                  </span>
                  <span className="contactPhNDEmail">
                    T - {item.phone ? item.phone : "phone"}
                  </span>
                  <span className="contactPhNDEmail">
                    E - {item.email ? item.email : "email"}
                  </span>
                </div>
              ))}
          </div>
        )}
        {resume_detail.sample_map && resume_detail.sample_map.custom_field && (
          <div className="resumeConference">
            <h2>CUSTOME FIELD</h2>
            {resume_detail.custom_field &&
              resume_detail.custom_field.map((item, index) => (
                <div className="resumeConfRecBlk">
                  <span className="title">
                    {item.title ? item.title : "Title"}
                  </span>
                  <span className="location">
                    {item.location ? item.location : "Location"}{" "}
                    {item.date ? item.date : "date"}
                  </span>
                  <span className="description">
                    {item.description ? item.description : "Description"}
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
    </main>
  );
};

Index.defaultProps = defaultProps;
export default Index;
