import React from 'react';
import { templates } from "../../../../configs"
const Template = (props) => {
    return(
        <div className="p-4">
            <h2>Choose Template</h2>
            <div className="row p-4">
            {templates.map((item) => (
                    <div class="col-md-6 text-center">
                        <img onClick={() => props.handleSidebar(item.id , "template")} src={item.img} class="w-100"/>
                    </div>

                ))}

            </div>

        </div>
    )
}

export default Template;