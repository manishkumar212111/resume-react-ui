import React, { useEffect, useState } from "react";
import "./sass/dev.scss";

import "./sass/icons.scss";
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
  const [activeSkill, setActiveSkill] = useState("");
  const [resume_detail, setResumeDetail] = useState(props.resume_detail);

  useEffect(() => {
    setResumeDetail(props.resume_detail);
  }, [props.resume_detail]);

  useEffect(() => {
    setBasicInfo(props.basic_info);
  }, [props.basic_info]);

  
  console.log(activeSkill, "sdjkkdfjbkj", resume_detail);

  const renderSkill = () => {
    let h = [];
    resume_detail.skills &&
      resume_detail.skills.skills.map((itm, index) =>
        h.push(
              <li>
                <span className="resumeSkillsTitle">{itm.name}</span>
                <span className="resumeSkillsPer">
                  {itm.score ? itm.score : 0}%
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
        h.push(
          <div class="resumEducationInfo">
            <span class="resumeDegree">{itm.title}</span>
          </div>
        )
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

  const getSocialDetailsVal = (type) => {
    let val = (basic_info.social_account|| []).filter((itm) => (
      itm.type === type
    ))

    return val && val[0]? val[0].url : "";
  }

  console.log(basic_info)
  return (
    <main class={`resumeMain2 ${resume_detail.style.fontSize == 12 ? "smallTxt" : (resume_detail.style.fontSize == 14 ? "mediumTxt" : (resume_detail.style.fontSize == 16 ? "largeTxt" : "extraLargeTxt"))}`} style={{backgroundColor : resume_detail?.style?.background, color: resume_detail?.style?.text_color}}>
      <div class="resumeLeft2">
        <div class="resumeProfile">
          {resume_detail.profileImage && <div class="resumePP">
            <img src={resume_detail.profileImage ? resume_detail.profileImage : Img} alt="" />
          </div>}
          {basic_info && (
            <h1>
              {basic_info.first_name} <strong>{basic_info.last_name}</strong>
            </h1>
          )}
          {props.resume_detail.job_title && <div
            dangerouslySetInnerHTML={{
              __html: (props?.resume_detail?.job_title
                ? props.resume_detail.job_title
                : "Job Title"
              ).replaceAll("&lt;", "<"),
            }}
            className={"resumePosTitle"}
          />}
        </div>
        {Boolean(resume_detail.education && resume_detail.education.length) && <div className="resumEducation">
          <h4>EDUCATION</h4>
          {resume_detail.education &&
            resume_detail.education.map((item, index) =>
                <div
                  className="resumEducationInfo"
                >
                  <span className="resumeDegree">
                    {item.degree ? item.degree : "Program"}
                  </span>
                  <span className="resumeUniName">
                    {item.institute_name
                      ? item.institute_name
                      : "Institute Name"}{" "}
                    <span>
                      {item.startDate} to {item.endDate}  
                    </span>
                  </span>
                  <span className="resumelocation">
                    {item.location ? item.location : ""}
                  </span>
                </div>
            )}
          
        </div>}
        {Boolean(resume_detail.sample_map && resume_detail.sample_map.skills && resume_detail.skills && resume_detail.skills.skills.length) && (
          <ul className="resumeSkills">
            <h4>SKILLS</h4>
            {renderSkill()}
          </ul>
        )}
        {Boolean(resume_detail.sample_map && resume_detail.sample_map.skills && resume_detail.skills && resume_detail.skills.softSkills.length) && (
          <ul className="resumeSkills">
            <h4>SOFT SKILLS</h4>
            {resume_detail.skills && resume_detail.skills.softSkills.map(itm => (
              <li>
              <span className="resumeSkillsTitle">{itm.name}</span>
              <span className="resumeSkillsPer">
                {itm.score ? itm.score : 0}%
              </span>
            </li>
            ))}
          </ul>
        )}

            
        {/* <ul class="resumeSkills">
                <h4>SOFT SKILLS</h4>
                <li>
                    <span class="resumeSkillsTitle">Time management</span>
                    <span class="resumeSkillsPer">70%</span>
                </li>
                <li>
                    <span class="resumeSkillsTitle">Creativity</span>
                    <span class="resumeSkillsPer">70%</span>
                </li>
                <li>
                    <span class="resumeSkillsTitle">Team Leadership</span>
                    <span class="resumeSkillsPer">70%</span>
                </li>
                <li>
                    <span class="resumeSkillsTitle">Designing</span>
                    <span class="resumeSkillsPer">70%</span>
                </li>
                <li>
                    <span class="resumeSkillsTitle">Communication</span>
                    <span class="resumeSkillsPer">70%</span>
                </li>
            </ul> */}
        {(resume_detail.sample_map && resume_detail.sample_map.languages && resume_detail.languages.length) ? (
          <ul className="resumeSkills resumeLangSpoke">
            <h4>LANGUAGES</h4>
            {renderLanguages()}
          </ul>
        ) : <></>}
        {Boolean(resume_detail.sample_map && resume_detail.sample_map.hobbies && resume_detail.hobbies.length) && (
          <ul className="resumeSkills resumeLangSpoke">
            <h4>Hobbies</h4>
            {renderHobbies()}
          </ul>
        )}
        {Boolean(resume_detail.sample_map && resume_detail.sample_map.awards && resume_detail.awards) && (
          <div className="resumEducation resumeCeriFLic">
            <h4>AWARDS</h4>
            {renderAwards()}
            
          </div>
        )}
        {Boolean(resume_detail.sample_map && resume_detail.sample_map.certifications && resume_detail.certifications.length) && (
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
                    {item.location ? item.location : ""}
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
        {Boolean(resume_detail.sample_map && resume_detail.sample_map.publications && resume_detail.publications.length) && (
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
                  <span 
                    dangerouslySetInnerHTML={{
                      __html: (item.description).replaceAll(
                        "&lt;",
                        "<"
                      ),
                    }}
                  className="resumeDescp">
                  </span>
                </div>
              ))}
          </div>
        )}

        {Boolean(resume_detail.sample_map && resume_detail.sample_map.trainings && resume_detail.trainings.length) && (
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
                    {item.location ? item.location : ""}
                  </span>
                  <span className="resumeUniName">
                    {item.date ? item.date : "Date"}
                  </span>
                  <span
                  dangerouslySetInnerHTML={{
                    __html: (item.description).replaceAll(
                      "&lt;",
                      "<"
                    ),
                  }}
                  className="resumeDescp">
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
      <div class="resumeRight2">
        <div class="resumeContacts">
          <h2>CONTACT</h2>
          <ul class="clearfix">
            {basic_info.contact && <li>
              <i class="icon-Vector"></i>{basic_info.ccode} {basic_info.contact}
            </li>}
            {basic_info.email && <li>
              <i class="icon-expend"></i>{basic_info.email}
            </li>}
            {basic_info?.dob && <li>
              <i class="icon-calendar"></i>{basic_info?.dob?.split("T")[0]}
            </li>}
            {getSocialDetailsVal("linkedin") && <li>
              <i class="icon-linkedin"></i>{getSocialDetailsVal("linkedin")}
            </li>}
            {getSocialDetailsVal("facebook") && <li>
              <i class="icon-facebook"></i>{getSocialDetailsVal("facebook")}
            </li>}
            {getSocialDetailsVal("twitter") && <li>
              <i class="icon-twitter"></i>{getSocialDetailsVal("twitter")}
            </li>}
            {getSocialDetailsVal("github") && <li>
              <i class="icon-github"></i>{getSocialDetailsVal("github")}
            </li>}
            <li>
              <i class="icon-location1"></i>Willing to Relocate - {basic_info.willing_to_relocate ? "Yes" : "No"}
            </li>
            {(basic_info.address?.address || basic_info.address?.city?.value || basic_info.address?.country?.value) && <li>
              <i class="icon-home"></i>{basic_info.address?.address} {basic_info.address?.city?.value} {basic_info.address?.country?.value}
            </li>}
          </ul>
        </div>
        {resume_detail.summary && <><h2>ABOUT ME</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: (resume_detail.summary || "Your Resume Summary").replaceAll(
              "&lt;",
              "<"
            ),
          }}
          className={"resumeAboutMe"}
        /></>}

        {Boolean(resume_detail.sample_map &&
          resume_detail.sample_map.employment_history && resume_detail.employment_history.length) && (
            <div className="resumeExperince">
              <h2>EXPERIENCE</h2>
              {resume_detail.employment_history &&
                resume_detail.employment_history.map((item, index) =>
                    <div
                      className="resumeJobTitleBlock"
                    >
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
                              ? parseInt(item.duration.from.split("-")[1]) -1
                              : 0
                          ]
                        }{" "}
                        {item.duration.from ? item.duration.from.split("-")[0] : "2000"}{" "}
                        -
                        {item.currentCompany ? "PRESENT" :<>
                        {
                          months[
                            item.duration.to
                              ? parseInt(item.duration.to.split("-")[1]) -1
                              : 0
                          ]
                        }{" "}
                        {item.duration.to ? item.duration.to.split("-")[0] : "2003"}</>}
                      </div>
                      <div className="resumeRightLoc">
                        {item.location ? item.location : ""}
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
                  
                )}
            </div>
          )}
        {/* <div class="resumeExperince">
                <h2>EXPERIENCE</h2>
                <div class="resumeJobTitleBlock">
                    <h3>ENTER YOUR JOB TITLE HERE <span class="date">2000-2015</span></h3>
                    <div class="resumeComName">Company Name</div>
                    <div class="resumeRightLoc">Location</div>
                    <div class="resumeAreaOfWork">Area of work/Industry/Business sector</div>
                    <ul class="resumeEnterJobPoints">
                        <li>Duties/Responsibility/Achievement</li>
                        <li>The word in classical literature, discovered the undoubtable source.</li>
                        <li>The word in classical literature, discovered the undoubtable source.</li>
                        <li>The word in classical literature, discovered the undoubtable source.</li>
                    </ul>
                </div>
                
            </div> */}

        {Boolean(resume_detail.sample_map && resume_detail.sample_map.conferences && resume_detail.conferences.length) && (
          <div className="resumeConference">
            <h2>CONFERENCES</h2>
            {resume_detail.conferences &&
              resume_detail.conferences.map((item, index) =>
                  <div
                    className="resumeConfRecBlk"
                  >
                    <span className="title">
                      {item.title ? item.title : "Title"}
                    </span>
                    <span className="location">
                      {item.location ? item.location : "Location"}{" "}
                      {item.date ? item.date : "date"}
                    </span>
                    <span 
                    dangerouslySetInnerHTML={{
                      __html: (item.description).replaceAll(
                        "&lt;",
                        "<"
                      ),
                    }}
                    className="description">
                    </span>
                  </div>
                )}
          </div>
        )}

        {Boolean(resume_detail.sample_map && resume_detail.sample_map.achievements && resume_detail.achievements.length) && (
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
                  <span 
                  dangerouslySetInnerHTML={{
                    __html: (item.description).replaceAll(
                      "&lt;",
                      "<"
                    ),
                  }}
                  className="description">
                  </span>
                </div>
              ))}
          </div>
        )}
        {Boolean(resume_detail.sample_map && resume_detail.sample_map.custom_field && resume_detail.custom_field.length) && (
          <div className="resumeConference">
            <h2>CUSTOM FIELD</h2>
            {resume_detail.custom_field &&
              resume_detail.custom_field.map((item, index) =>
                  <div
                    className="resumeConfRecBlk"
                  >
                    <span className="title">
                      {item.title ? item.title : "Title"}
                    </span>
                    <span className="location">
                      {item.location ? item.location : "Location"}{" "}
                      {item.date ? item.date : "date"}
                    </span>
                    <span 
                      dangerouslySetInnerHTML={{
                        __html: (item.description).replaceAll(
                          "&lt;",
                          "<"
                        ),
                      }}
                    className="description">
                    </span>
                  </div>
                
              )}
          </div>
        )}
        {Boolean(resume_detail.sample_map && resume_detail.sample_map.patents && resume_detail.patents.length) && (
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
                  <span 
                  dangerouslySetInnerHTML={{
                    __html: (item.description).replaceAll(
                      "&lt;",
                      "<"
                    ),
                  }}
                  className="description">
                  </span>
                  {/* <span className="link">
                    <span>URL</span> :
                    <a href="">{item.url ? item.url : "url"}</a>
                  </span> */}
                </div>
              ))}
          </div>
        )}
        {Boolean(resume_detail.sample_map && resume_detail.sample_map.references && resume_detail.references.length) && (
          <div className="resumeConference resumeReferene">
            <h2>REFERENCE</h2>
            {resume_detail.references &&
              resume_detail.references.map((item, index) =>
                  <div
                    className="resumeConfRecBlk resumeConfOneThBlk"
                  >
                    <span className="title">
                      {item.name ? item.name : "Title"}
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
                    {/* <span className="contactPhNDEmail">
                      T - {item.contact ? item.contact : "phone"}
                    </span> */}
                    <span className="contactPhNDEmail">
                      E - {item.contact ? item.contact : "email"}
                    </span>
                  </div>
              )}
            
          </div>
        )}
      </div>
    </main>
  );
};

Index.defaultProps = defaultProps;
export default Index;
