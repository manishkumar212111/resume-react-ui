import React, { useState } from 'react';
import img from "../../scss/images/faq.svg";
import Accordion from "../elements/Accordian";
const faqs = [
    {
        question : "khdvhd fvdjfgvjhdfgvjdfhgvj",
        answer : "jkfvh dkjvhjkdfhvkjdfhvkjdfvh kdjf vhkjdfvhkjdfhvkjdfhv kjdfhv kjdf"
    },
    {
        question : "khdvhd fvdjfgvjhdfg vd fvdf dfhgvj",
        answer : "jkfvh dkjvhjkdfhvkj dvfjv dfv kdfjvdfhvkjdfvh kdjf vhkjdfvhkjdfhvkjdfhv kjdfhv kjdf"
    },
    {
        question : "kgvjhdfgvjdfhgvj",
        answer : "jkfvh dkjvhjkjdfvhkjdfhvkjdfhv kjdfhv kjdf"
    },
    {
        question : "khdvhd fvdjfgvjdfhgvj",
        answer : "jkfvh  kdjf vhkjdfvhkjdfhvkjdfhv kjdfhv kjdf"
    }
]
export default function Faq (props)  {
    const [active , setActive] = useState('null');
    const [collapsing , setCollapsing] = useState('null');
    return (
        <section class="align-items-center screen pt-5">
            <div class="container">

                <div class="row mt-5 pt-5">
                    <div class="col-lg-5 align-items-center">
                    <img src={img} class="w-100"/>

                    </div>

                    <div class="col-lg-7">
                        <h5 class="mb-3">FAQ's</h5>
                        <div class="accordion bg-white shadow p-4" id="accordionExample">
                            {faqs.map((item , index) => (<div class="card border-0">
                                <Accordion title={item.question}>
                                    {item.answer}
                                </Accordion>
                                {/* <div class="card-header bg-white border-top" id="headingOne">
                                    <h2 class="mb-0">
                                        <button onClick={() =>setActive(active == index ? 'null' : index)} class="btn btn-white btn-block text-left p-0" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            {item.question} <span class={`mdi ${active == index ? 'mdi-minus' : 'mdi-plus'}`}></span>
                                        </button>
                                    </h2>
                                </div>

                                <div class={`collapse ${active == index ? 'show' : ''}`} aria-expanded={active == index} aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div class="card-body">
                                        {item.answer}
                                    </div>
                                </div> */}
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}