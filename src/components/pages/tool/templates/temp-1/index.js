import React, { useEffect, useState } from 'react';
import "./index.scss";
import ContentEditable from "../../../../elements/contentEditable";
import Education from "../../component/education";
import Experience from "../../component/experience";
import Skills from "../../component/skills";
import DragAndDrop from "../../component/elements/dragAndDrop";
import Awards from '../../component/awards';
import Conference from '../../component/conference';
import Achievement from '../../component/achievement';
import Volunteer from '../../component/volunteer';
import Custom_field from '../../component/custom';
import Hobbies from '../../component/hobbies';
import Languages from '../../component/language';

import Certification from '../../component/certificate';
import Training from '../../component/training';
import Publication from '../../component/publications';
import Patent from '../../component/patent';
import Reference from '../../component/reference';
import AddNew from '../../component/elements/addNew';
import "./icons.scss"
import Img from "./images/pp.jpg";

const months = ['JAN', 'FEB', 'MAR' , 'APR', 'MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']

const defaultProps = {
    sideBarCb : () => {},
    handleToolEvent : () => {}
}

const Index = (props) => {
    const [basic_info , setBasicInfo] = useState({});
    const [activeEducation , setActiveEducation] = useState('');
    const [activeConference , setActiveConference] = useState('');
    const [activeAchievement , setActiveAchievement] = useState('');
    const [activeVolunteer , setActiveVolunteer] = useState('');
    const [activeCustom_field , setActiveCustom_field] = useState('');
    const [activeHobbies , setActiveHobbies] = useState('');
    const [activeLanguages , setActiveLanguages] = useState('');

    const [activeTrainings , setActiveTrainings] = useState('');
    const [activeCertifications , setActiveCertifications] = useState('');
    const [activePublications , setActivePublications] = useState('');
    const [activePatents , setActivePatents] = useState('');
    const [activeReferences , setActiveReferences] = useState('');



    const [activeExperience , setActiveExperience] = useState('');
    const [activeSkill , setActiveSkill] = useState('');
    const [activeAwards , setActiveAwards] = useState('');
    const [resume_detail , setResumeDetail] = useState(props.resume_detail);

    useEffect(() => {
        setResumeDetail(props.resume_detail)
    }, [props.resume_detail]);

    useEffect(() => {
        setBasicInfo(props.basic_info);
    } , [props.basic_info])

    const handleEducationClick = () => {
        let education = resume_detail.education;
        education.push({
            awards: [],
            courses: [],
            degree: "Study Program",
            degree_major: "",
            duration: {from: {mm : "12" , yy : "12"}, to: {mm : "01" , yy : "2022"}},
            institute_name: "Institute Name",
            location: "",
            marks: {value: "", type: ""},
            projects: [],
            thesis: []
        });
            setResumeDetail(fld => ({...fld , ...{education : education}}))
            setActiveEducation(education.length -1)
        
    }
    
    const handleEducationCB = (key , value,index) => {
        let education = resume_detail.education;
        education[index] = value;
        props.handleToolEvent(education, "education")
    }

    const handleExperienceClick = () => {
        let experience = resume_detail.employment_history;
        experience.push({
            title : "Job title",
            company : "Company Name",
            location : "",
            duration : {
                from : {mm:"",yy:""},
                to: {mm:"",yy:""}
            },
            achievements : "",
            description: ""
        });
        setResumeDetail(fld => ({...fld , ...{employment_history : experience}}))
        setActiveExperience(experience.length -1)
        
    }
    
    const handleExperienceCB = (key , value,index) => {
        let experience = resume_detail.employment_history;
        experience[index] = value;
        props.handleToolEvent(experience, "experience")
    }

    const handleSkillClick = (active) => {
        let skills = resume_detail.skills.skills;
        skills.push({name : ""});
        setActiveSkill(skills.length -1);
        setResumeDetail(fld => ({...fld , ...{skills : {...resume_detail.skills , skills : skills}}}))
    }

    const handleSkillsChange = (key , value , active) => {
        let skills = resume_detail.skills.skills;
        skills[active][key] = value;
        props.handleToolEvent(skills, "skills")  
    }
    
    
    const handleAwardsClick = (active) => {
        let awards = resume_detail.awards;
        awards.push({title : ""});
        setActiveAwards(awards.length -1);
        setResumeDetail(fld => ({...fld , ...{awards : awards }} ))
    }

    const handleAwardsChange = (key , value , active) => {
        let awards = resume_detail.awards;
        awards[active][key] = value;
        props.handleToolEvent(awards, "awards")  
    }

    const handleConferenceCB = (key , value, index) => {
        console.log(value)
        let conferences = resume_detail.conferences;
        conferences[index] = value;
        props.handleToolEvent(conferences, "conference")
    }

    const handleConferenceClick = () => {
        let conferences = resume_detail.conferences;
        conferences.push({
            title : "Title",
            description : "Description",
            location : "",
            date : ""
        });
        setResumeDetail(fld => ({...fld , ...{conferences : conferences}}))
        setActiveConference(conferences.length -1)       
    }

    const handleAchievementCB = (key , value, index) => {
        console.log(value)
        let achievements = resume_detail.achievements;
        achievements[index] = value;
        props.handleToolEvent(achievements, "achievement")
    }

    const handleAchievementClick = () => {
        let achievements = resume_detail.achievements;
        achievements.push({
            title : "Title",
            description : "Description",
            location : "",
            date : ""
        });
        setResumeDetail(fld => ({...fld , ...{achievements : achievements}}))
        setActiveAchievement(achievements.length -1)       
    }

    const handleVolunteerCB = (key , value, index) => {
        console.log(value)
        let volunteers = resume_detail.volunteers;
        volunteers[index] = value;
        props.handleToolEvent(volunteers, "volunteer")
    }
    
    const handleVolunteerClick = () => {
        let volunteers = resume_detail.volunteers;
        volunteers.push({
            title : "Title",
            description : "Description",
            location : "",
            date : ""
        });
        setResumeDetail(fld => ({...fld , ...{volunteers : volunteers}}))
        setActiveVolunteer(volunteers.length -1)       
    }

    const handleCustom_fieldCB = (key , value, index) => {
        console.log(value)
        let custom_field = resume_detail.custom_field;
        custom_field[index] = value;
        props.handleToolEvent(custom_field, "custom_field")
    }
    
    const handleCustom_fieldClick = () => {
        let custom_field = resume_detail.custom_field;
        custom_field.push({
            title : "Title",
            description : "Description",
            location : "",
            date : ""
        });
        setResumeDetail(fld => ({...fld , ...{custom_field : custom_field}}))
        setActiveCustom_field(custom_field.length -1)       
    }

    const handleHobbiesChange = (key , value, index) => {
        console.log(value)
        let hobbies = resume_detail.hobbies;
        hobbies[index] = value;
        props.handleToolEvent(hobbies, "hobbies")
    }
    
    const handleHobbiesClick = () => {
        let hobbies = resume_detail.hobbies;
        hobbies.push('');
        setResumeDetail(fld => ({...fld , ...{hobbies : hobbies}}))
        setActiveHobbies(hobbies.length -1)       
    }

    const handleLanguagesChange = (key , value, index) => {
        console.log(value)
        let languages = resume_detail.languages;
        languages[index] = value;
        props.handleToolEvent(languages, "languages")
    }
    
    const handleLanguagesClick = () => {
        let languages = resume_detail.languages;
        languages.push('');
        setResumeDetail(fld => ({...fld , ...{languages : languages}}))
        setActiveLanguages(languages.length -1)       
    }
    
    const handleTrainingsChange = (key , value, index) => {
        console.log(value)
        let trainings = resume_detail.trainings;
        trainings[index] = value;
        props.handleToolEvent(trainings, "trainings")
    }
    
    const handleTrainingsClick = () => {
        let trainings = resume_detail.trainings;
        trainings.push({
            title : "Title",
            providers :"Training Providers and Location",
            date : "",
            description:""
        });
        setResumeDetail(fld => ({...fld , ...{trainings : trainings}}))
        setActiveTrainings(trainings.length -1)       
    }

    const handleCertificationsChange = (key , value, index) => {
        console.log(value)
        let certifications = resume_detail.certifications;
        certifications[index] = value;
        props.handleToolEvent(certifications, "certifications")
    }
    
    const handleCertificationsClick = () => {
        let certifications = resume_detail.certifications;
        certifications.push({
            title : "Title",
            providers :"Training Providers and Location",
            date : "",
            location: "Location",
            certificate_no:"Certificate number"
        });
        setResumeDetail(fld => ({...fld , ...{certifications : certifications}}))
        setActiveCertifications(certifications.length -1)       
    }

    const handlePublicationsChange = (key , value, index) => {
        console.log(value)
        let publications = resume_detail.publications;
        publications[index] = value;
        props.handleToolEvent(publications, "publications")
    }
    
    const handlePublicationsClick = () => {
        let publications = resume_detail.publications;
        publications.push({
            title : "Title",
            date : "",
            description: "Description",
        });
        setResumeDetail(fld => ({...fld , ...{publications : publications}}))
        setActivePublications(publications.length -1)       
    }
    
    const handlePatentsCB = (key , value, index) => {
        console.log(value)
        let patents = resume_detail.patents;
        patents[index] = value;
        props.handleToolEvent(patents, "patents")
    }
    
    const handlePatentsClick = () => {
        let patents = resume_detail.patents;
        patents.push({
            title : "Title",
            application_no : "Application number",
            date : "Date",
            location : "Location",
            url : "https://",
            description: "Description",
        });
        setResumeDetail(fld => ({...fld , ...{patents : patents}}))
        setActivePatents(patents.length -1)       
    }
    const handleReferencesCB = (key , value, index) => {
        console.log(value)
        let references = resume_detail.references;
        references[index] = value;
        props.handleToolEvent(references, "references")
    }
    
    const handleReferencesClick = () => {
        let references = resume_detail.references;
        references.push({
            title : "Title",
            company : "Company reference",
            location: "location",
            position: "Position of reference",
            phone: "",
            email : ""
        });
        setResumeDetail(fld => ({...fld , ...{references : references}}))
        setActiveReferences(references.length -1)       
    }
        
    const handleDelate = (active , key) => {
        switch(key){
            case "education":
                let education = resume_detail.education;
                education.splice(active, 1);
                setActiveEducation("")
                props.handleToolEvent(education, "education");
                break;
            case "skills":
                let skills = resume_detail.skills.skills;
                skills.splice(active, 1);
                setActiveSkill("")
                props.handleToolEvent(skills, "skills");
                break;  
            case "awards":
                let awards = resume_detail.awards;
                awards.splice(active, 1);
                setActiveAwards("")
                props.handleToolEvent(awards, "awards")
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
                setActiveLanguages("");
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
                setActiveCertifications("");
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
    }


    console.log(activeSkill, "sdjkkdfjbkj" , resume_detail)

    const renderSkill = () => {
        let h = [];
        resume_detail.skills && resume_detail.skills.skills.map((itm,index)=> h.push(
            (activeSkill !== index) ? 
            <><li onClick={() => setActiveSkill(index)}>
                <span className="resumeSkillsTitle">{itm.name}</span>
                <span className="resumeSkillsBar"><span className="leftTextSize" style={{width : itm.score ? itm.score : 0}}></span></span>
                </li></> : <Skills active={activeSkill} handleDone={() => setActiveSkill("")} handleSkillDelete={handleDelate} handleSkillsChange={handleSkillsChange} value={resume_detail.skills.skills[activeSkill]}/>
        ))
            
        return <DragAndDrop htmlContent={h} items={resume_detail.skills ? resume_detail.skills.skills : []} handleToolEvent={(value , key) => props.handleToolEvent(value , key)}/>
        
    }

    const renderAwards = () => {
        let h = [];
        resume_detail.awards && resume_detail.awards.map((itm,index)=> h.push(
            (activeAwards !== index) ? <p className="resumeAwardRec" onClick={() => setActiveAwards(index)}>{itm.title}</p> : <Awards active={activeAwards} handleDone={() => setActiveAwards("")} handleAwardsDelete={handleDelate} handleAwardsChange={handleAwardsChange} value={resume_detail.awards[activeAwards]}/>
        ))
            
        return <DragAndDrop htmlContent={h} items={resume_detail.awards ? resume_detail.awards : []} handleToolEvent={(value , key) => props.handleToolEvent(value , key)}/>
        
    }

    const renderHobbies = () => {
        let h = [];
        resume_detail.hobbies && resume_detail.hobbies.map((itm,index)=> h.push(
            (activeHobbies !== index) ? 
            <li onClick={() => setActiveHobbies(index)}>
                <span className="resumeSkillsTitle">{itm}</span>
            </li>
             : <Hobbies active={activeHobbies} handleDone={() => setActiveHobbies("")} handleHobbiesDelete={handleDelate} handleHobbiesChange={handleHobbiesChange} value={resume_detail.hobbies[activeHobbies]}/>
        ))            
        return <DragAndDrop htmlContent={h} items={resume_detail.hobbies ? resume_detail.hobbies : []} handleToolEvent={(value , key) => props.handleToolEvent(value , key)}/>
                
    }

    const renderLanguages = () => {
        let h = [];
        resume_detail.languages && resume_detail.languages.map((itm,index)=> h.push(
            (activeLanguages !== index) ? 
            <li onClick={() => setActiveLanguages(index)}>
                <span className="resumeSkillsTitle">{itm}</span>
                {/* <span className="resumeSkillsBar"><span className="leftTextSize"></span></span> */}
            </li>
            : <Languages active={activeLanguages} handleDone={() => setActiveLanguages("")} handleLanguagesDelete={handleDelate} handleLanguagesChange={handleLanguagesChange} value={resume_detail.languages[activeLanguages]}/>
        ))            
        return <DragAndDrop htmlContent={h} items={resume_detail.languages ? resume_detail.languages : []} handleToolEvent={(value , key) => props.handleToolEvent(value , key)}/>
                
    }
    
    return(
        <main className={`resumeMain ${props.downloads ? "downloadMain" : ""}`}>
        <div className="resumeLeft">
            <div className="resumeProfile">
                <div className="resumePP"><img src={Img} alt=""/></div>
                <ul>
                    <li><i className="icon-Vector"></i>{basic_info ? (basic_info.ccode + basic_info.contact) : ""} </li>
                    <li><i className="icon-mail"></i>{basic_info.email ? basic_info.email : ""}</li>
                    {/* <li><i className="icon-linkedin"></i>linkedin.com/username</li> */}
                    {basic_info.address && <li><i className="icon-home"></i>{basic_info.address.address}</li>}
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
                {resume_detail.education && resume_detail.education.map((item, index) => (
                    (activeEducation !== index) ? <div className="resumEducationInfo" onClick={() => setActiveEducation(index)}>
                        <span className="resumeDegree">{item.degree ? item.degree : "Program"}/{item.institute_name ? item.institute_name : "Institute Name"}</span>
                        <span className="resumeUniName">{months[item.duration.from.month ? parseInt(item.duration.from.month) : 0]} {item.duration.from.year ? item.duration.from.year : "2000"} - {months[item.duration.to.month ? parseInt(item.duration.to.month) : 0]} {item.duration.to.year ? item.duration.to.year : "2003"}</span>
                        <span className="resumelocation">{item.location ? item.location : ""}</span>
                    </div> : <div>
                        {activeEducation !== "" && <Education handleEducationDelete={handleDelate} handleSave={setActiveEducation} active={activeEducation} education={resume_detail.education[activeEducation]} handleChange={handleEducationCB}/>}
                    </div>
                ))}     
                {!props.downloads && <AddNew handleAddNew={handleEducationClick} activeElement={activeEducation} />}

            </div>
            {(resume_detail.sample_map && resume_detail.sample_map.skills) && <ul className="resumeSkills">
                <h4>SKILLS</h4>
                {renderSkill()}
                {!props.downloads && <AddNew handleAddNew={handleSkillClick} activeElement={activeSkill} />}
                

            </ul>}
            
            {/* <ul className="resumeSkills">
                <h4>SKILLS</h4>
                <li>
                    <span className="resumeSkillsTitle">Time management</span>
                    <span className="resumeSkillsBar"><span className="leftTextSize"></span></span>
                </li>
                
            </ul> */}
            {/* <ul className="resumeSkills resumeSoftSkills">
                <h4>SOFT SKILLS</h4>
                <li>
                    <span className="resumeSkillsTitle">Time management</span>
                    <span className="resumeSkillsBar"><span className="leftTextSize"></span></span>
                </li>
                <li>
                    <span className="resumeSkillsTitle">Creativity</span>
                    <span className="resumeSkillsBar"><span className="leftTextSize"></span></span>
                </li>
                <li>
                    <span className="resumeSkillsTitle">Team Leadership</span>
                    <span className="resumeSkillsBar"><span className="leftTextSize"></span></span>
                </li>
                <li>
                    <span className="resumeSkillsTitle">Designing</span>
                    <span className="resumeSkillsBar"><span className="leftTextSize"></span></span>
                </li>
                <li>
                    <span className="resumeSkillsTitle">Communication</span>
                    <span className="resumeSkillsBar"><span className="leftTextSize"></span></span>
                </li>
            </ul> */}

            {(resume_detail.sample_map && resume_detail.sample_map.languages) && <ul className="resumeSkills resumeLangSpoke">
                <h4>LANGUAGES</h4>
                {renderLanguages()}
                {!props.downloads && <AddNew handleAddNew={handleLanguagesClick} activeElement={activeLanguages} />}

            </ul>}
            
            {(resume_detail.sample_map && resume_detail.sample_map.hobbies) && <ul className="resumeSkills resumeLangSpoke">
                <h4>Hobbies</h4>
                {renderHobbies()}
                {!props.downloads && <AddNew handleAddNew={handleHobbiesClick} activeElement={activeHobbies} />}

            </ul>}
            {(resume_detail.sample_map && resume_detail.sample_map.certifications) && <div className="resumEducation resumeCeriFLic">
                    <h4>CERTIFICATE & LICENSE</h4>
                    {resume_detail.certifications && resume_detail.certifications.map((item, index) => (
                        (activeCertifications !== index) ? <div className="resumEducationInfo" onClick={() => setActiveCertifications(index)}>
                            <span className="resumeDegree">{item.title ? item.title : "Title"}</span>
                            <span className="resumeUniName">{item.providers ? item.providers : "Training providers"}</span>
                            <span className="resumelocation">{item.date ? item.date : "Date"}</span>
                            <span className="resumeCourse">{item.certificate_no ? item.certificate_no : "Certifcate No"}</span>
                        </div> : <div>
                            {activeCertifications !== "" && <Certification handleSave={setActiveCertifications} handleCertificationsDelete={handleDelate} active={activeCertifications} certifications={resume_detail.certifications[activeCertifications]} handleChange={handleCertificationsChange}/>}
                        </div>
                    ))}
                    {!props.downloads && <AddNew handleAddNew={handleCertificationsClick} activeElement={activeCertifications} />}

            </div>}


            {(resume_detail.sample_map && resume_detail.sample_map.publications) && <div className="resumEducation resumeCeriFLic">
                <h4>PUBLICATION & APPEARENCES</h4>
                {resume_detail.publications && resume_detail.publications.map((item, index) => (
                    (activePublications !== index) ? <div className="resumEducationInfo" onClick={() => setActivePublications(index)}>
                        <span className="resumeDegree">{item.title ? item.title : "Title"}</span>
                        <span className="resumeUniName">{item.date ? item.date : "Date"}</span>
                        <span className="resumeDescp">{item.description ? item.description : "Description"}</span>
                    </div> : <div>
                        {activePublications !== "" && <Publication handleSave={setActivePublications} handlePublicationsDelete={handleDelate} active={activePublications} publications={resume_detail.publications[activePublications]} handleChange={handlePublicationsChange}/>}
                    </div>
                ))}
                {!props.downloads && <AddNew handleAddNew={handlePublicationsClick} activeElement={activePublications} />}

            </div>}
            {(resume_detail.sample_map && resume_detail.sample_map.trainings) && <div className="resumEducation resumeCeriFLic">
                <h4>TRAINING</h4>
                {resume_detail.trainings && resume_detail.trainings.map((item, index) => (
                    (activeTrainings !== index) ? 
                        <div onClick={() => setActiveTrainings(index)} className="resumEducationInfo">
                            <span className="resumeDegree">{item.title ? item.title : "Title"}</span>
                            <span className="resumeUniName">{item.providers ? item.providers : "Training providers"}</span>
                            <span className="resumeUniName">{item.date ? item.date : "Date"}</span>
                            <span className="resumeDescp">{item.description ? item.description : "Description"}</span>
                        </div>
                     : <div>
                        {activeTrainings !== "" && <Training handleSave={setActiveTrainings} handleTrainingsDelete={handleDelate} active={activeTrainings} trainings={resume_detail.trainings[activeTrainings]} handleChange={handleTrainingsChange}/>}
                    </div>
                ))}
                {!props.downloads && <AddNew handleAddNew={handleTrainingsClick} activeElement={activeTrainings} />}

            </div>}

            {/* <div className="resumeHobbies">
                <h4>HOBBIES/INTEREST</h4>
                <ul className="resumeHobbiesList">
                   <li>Yoga</li>
                   <li>Gaming</li> 
                   <li>Sports</li>
                   <li>Swimming</li>
                </ul>
            </div> */}
        </div>
        <div className="resumeRight">
            {basic_info && <h1 onClick={() => props.sideBarCb('info')}>{basic_info.first_name} <strong>{basic_info.last_name}</strong></h1>}
            <ContentEditable 
                className={"resumePosTitle"}
                value={props?.resume_detail?.job_title ?  props.resume_detail.job_title :"Job Title"}
                onChange={(value) => props.handleToolEvent(value , "job_title")}
            />
            
            <ContentEditable 
                value={resume_detail.summary ? resume_detail.summary : "Enter summary here"}
                onChange={(value) => props.handleToolEvent(value , "summary")}
                className={"resumeAboutMe"}
            />
            {(resume_detail.sample_map && resume_detail.sample_map.employment_history) && 
                <div className="resumeExperince">
                    <h2>EXPERIENCE</h2>
                    {resume_detail.employment_history && resume_detail.employment_history.map((item, index) => (
                        (activeExperience !== index) ? <div className="resumeJobTitleBlock" onClick={() => setActiveExperience(index)}>
                            <h3 dangerouslySetInnerHTML={{ __html: (item.title ? item.title : "Job Title").replaceAll('&lt;' , '<') }}></h3>
                            <div className="resumeComName" dangerouslySetInnerHTML={{ __html: (item.company ? item.company : "Company").replaceAll('&lt;' , '<') }}></div>
                            <div className="resumeRightLoc">{item.location ? item.location : ""} {months[item.duration.from.mm ? parseInt(item.duration.from.mm) : 0]} {item.duration.from.yy ? item.duration.from.yy : "2000"} - {months[item.duration.to.mm ? parseInt(item.duration.to.yy) : 0]} {item.duration.to.yy ? item.duration.to.yy : "2003"}</div>                            

                            <div className="resumeRightLoc" dangerouslySetInnerHTML={{ __html: (item.description ? item.description : "").replaceAll('&lt;' , '<') }}></div>

                            </div> : <div>
                                {activeExperience !== "" && <Experience handleExperienceDelete={handleDelate} handleSave={setActiveExperience} active={activeExperience} experience={resume_detail.employment_history[activeExperience]} handleChange={handleExperienceCB}/>}
                            </div>
                        ))}     
                        {!props.downloads && <AddNew handleAddNew={handleExperienceClick} activeElement={activeExperience} />}
                </div>}
            {(resume_detail.sample_map && resume_detail.sample_map.awards) &&
                <div className="resumeAward">
                    <h2>AWARDS</h2>
                    {renderAwards()}
                    {!props.downloads && <AddNew handleAddNew={handleAwardsClick} activeElement={activeAwards} />}

                </div>            
            }

            {(resume_detail.sample_map && resume_detail.sample_map.conferences) &&     
                <div className="resumeConference">
                    <h2>CONFERENCES</h2>
                    {resume_detail.conferences && resume_detail.conferences.map((item, index) => (
                        (activeConference !== index) ? <div className="resumeConfRecBlk" onClick={() => setActiveConference(index)}>
                            <span className="title">{item.title ? item.title : "Title"}</span>
                            <span className="location">{item.location ? item.location : "Location"} {item.date ? item.date : "date"}</span> 
                            <span className="description">{item.description ? item.description : "Description"}</span>
                        </div> : <div>
                            {activeConference !== "" && <Conference handleConferenceDelete={handleDelate} handleSave={setActiveConference} active={activeConference} education={resume_detail.conferences[activeConference]} handleChange={handleConferenceCB}/>}
                        </div>
                    ))}     
                    {!props.downloads && <AddNew handleAddNew={handleConferenceClick} activeElement={activeConference} />}
                </div>
            }
            {(resume_detail.sample_map && resume_detail.sample_map.achievements) && 
                                    
                    <div className="resumeConference">
                        <h2>ACHIEVEMENTS</h2>
                        {resume_detail.achievements && resume_detail.achievements.map((item, index) => (
                            (activeAchievement !== index) ? <div className="resumeConfRecBlk" onClick={() => setActiveAchievement(index)}>
                                <span className="title">{item.title ? item.title : "Title"}</span>
                                <span className="location">{item.location ? item.location : "Location"} {item.date ? item.date : "date"}</span> 
                                <span className="description">{item.description ? item.description : "Description"}</span>
                            </div> : <div>
                                {activeAchievement !== "" && <Achievement handleSave={setActiveAchievement} handleAchievementDelete={handleDelate} active={activeAchievement} education={resume_detail.achievements[activeAchievement]} handleChange={handleAchievementCB}/>}
                            </div>
                        ))}  
                        {!props.downloads && <AddNew handleAddNew={handleAchievementClick} activeElement={activeAchievement} />}
                    </div>
            }
            {(resume_detail.sample_map && resume_detail.sample_map.volunteers) && 
                                    
                <div className="resumeConference">
                    <h2>VOLUNTEER WORK</h2>
                    {resume_detail.volunteers && resume_detail.volunteers.map((item, index) => (
                        (activeVolunteer !== index) ? <div className="resumeConfRecBlk" onClick={() => setActiveVolunteer(index)}>
                            <span className="title">{item.title ? item.title : "Title"}</span>
                            <span className="location">{item.location ? item.location : "Location"} {item.date ? item.date : "date"}</span> 
                            <span className="description">{item.description ? item.description : "Description"}</span>
                        </div> : <div>
                            {activeVolunteer !== "" && <Volunteer handleSave={setActiveVolunteer} handleVolunteerDelete={handleDelate} active={activeVolunteer} education={resume_detail.volunteers[activeVolunteer]} handleChange={handleVolunteerCB}/>}
                        </div>
                    ))} 
                    {!props.downloads && <AddNew handleAddNew={handleVolunteerClick} activeElement={activeVolunteer} />}
                </div>
            }
            {(resume_detail.sample_map && resume_detail.sample_map.patents) && 
                                    
                <div className="resumeConference">
                    <h2>PATENTS</h2>
                    {resume_detail.patents && resume_detail.patents.map((item, index) => (
                        (activePatents !== index) ? <div className="resumeConfRecBlk" onClick={() => setActivePatents(index)}>

                            <span className="title">{item.title ? item.title : "Title"}</span>
                            <span className="location">{item.application_no ? item.application_no : "Application No"}</span> 
                            <span className="location">{item.location ? item.location : "location"} {item.date ? item.date : "date"}</span>
                            <span className="description">{item.description ? item.description : "Description"}</span>
                            <span className="link"><span>URL</span> :<a href="">{item.url ? item.url : "url"}</a></span>
                        
                        </div> : <div>
                            {activePatents !== "" && <Patent handleSave={setActivePatents} handlePatentsDelete={handleDelate} active={activePatents} education={resume_detail.patents[activePatents]} handleChange={handlePatentsCB}/>}
                        </div>
                    ))}     
                    {!props.downloads && <AddNew handleAddNew={handlePatentsClick} activeElement={activePatents} />}
                </div>
            }
            {(resume_detail.sample_map && resume_detail.sample_map.references) && 
                                        
                <div className="resumeConference resumeReferene">
                    <h2>REFERENCE</h2>
                    {resume_detail.references && resume_detail.references.map((item, index) => (
                        (activeReferences !== index) ? <div className="resumeConfRecBlk resumeConfOneThBlk" onClick={() => setActiveReferences(index)}>
                            <span className="title">{item.title ? item.title : "Title"}</span>
                            <span className="location">{item.company ? item.company : "company"}</span> 
                            <span className="location">{item.location ? item.location : "location"}</span>
                            <span className="location">{item.position ? item.position : "position"}</span>
                            <span className="contactPhNDEmail">T - {item.phone ? item.phone : "phone"}</span>
                            <span className="contactPhNDEmail">E - {item.email ? item.email : "email"}</span>
                        </div> : <div>
                            {activeReferences !== "" && <Reference handleSave={setActiveReferences} handleReferencesDelete={handleDelate} active={activeReferences} education={resume_detail.references[activeReferences]} handleChange={handleReferencesCB}/>}
                        </div>
                    ))}     
                    {!props.downloads && <AddNew handleAddNew={handleReferencesClick} activeElement={activeReferences} />}
                </div>
            }
            {(resume_detail.sample_map && resume_detail.sample_map.custom_field) && 
                                    
                <div className="resumeConference">
                    <h2>CUSTOME FIELD</h2>
                    {resume_detail.custom_field && resume_detail.custom_field.map((item, index) => (
                        (activeCustom_field !== index) ? <div className="resumeConfRecBlk" onClick={() => setActiveCustom_field(index)}>
                            <span className="title">{item.title ? item.title : "Title"}</span>
                            <span className="location">{item.location ? item.location : "Location"} {item.date ? item.date : "date"}</span> 
                            <span className="description">{item.description ? item.description : "Description"}</span>
                        </div> : <div>
                            {activeCustom_field !== "" && <Custom_field handleSave={setActiveCustom_field} handleCustom_fieldDelete={handleDelate} active={activeCustom_field} education={resume_detail.custom_field[activeCustom_field]} handleChange={handleCustom_fieldCB}/>}
                        </div>
                    ))}     
                    {!props.downloads && <AddNew  handleAddNew={handleCustom_fieldClick} activeElement={activeCustom_field} />}

                </div>
            }
        </div>
    </main>
    )
}

Index.defaultProps = defaultProps;
export default Index;