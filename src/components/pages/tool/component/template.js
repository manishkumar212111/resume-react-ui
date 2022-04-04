import React from 'react';
import { templates } from "../../../../configs"
const Template = (props) => {
    return(
        <div className="p-2">
            <h2 className="mb-3">Choose Template</h2>
            <div className="row">
            {templates.map((item) => (
                    <div class="col-md-6 text-center">
                        <div class="resume-screen">
                            <img onClick={() => props.handleSidebar(item.id , "template")} src={item.img} class="w-100"/>
                        </div>
                    </div>

                ))}

            </div>

        </div>
    )
}

export default Template;