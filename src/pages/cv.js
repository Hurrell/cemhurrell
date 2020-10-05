import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./cv.css"

import cvPdf from "../resources/CemHurrell_WebDev_CV_2020-09-29.pdf"

import { AiOutlineFilePdf } from "react-icons/ai"

function About() {
  return (
    <Layout currentPage="CV">
      <SEO title="CV" />
      <div className="CV">
        <dl className="CV-html">
          <dt>Education</dt>
          <dd>
            <h4>Imperial College London</h4>
            <h5>
              <div>Mechanical Engineering - BEng (Hons)</div>
              <div>2013 - 2016</div>
            </h5>
            <ul>
              <li>
                Built the electronics and code for an automated umbrella rental
                stand as part of my final year design project.
              </li>
              <li>Took modules in MatLab, Product design, Statistics.</li>
            </ul>
          </dd>
          <dt>Skills and Attributes</dt>
          <dd>
            <ul>
              <li>Gatsby | React | NodeJS | HTML | SCSS | Python | MongoDb</li>
              <li>
                Proactive and responsible. I built my own business for four
                years with over 70 happy and regular clients.
              </li>
              <li>
                Excellent communicator. With experience in each camp, I’m great
                at talking to both the technical and project oriented.
              </li>
              <li>
                Efficient and deadline oriented. Working in the events industry;
                all my shows happened on time, and on budget.
              </li>
            </ul>
          </dd>
          <dt>Experience</dt>
          <dd>
            <h4>Freelance</h4>
            <h5>
              <div>Web Developer</div>
              <div>2020</div>
            </h5>
            <ul>
              <li>
                Designed and built “PatchPal”, a mobile first web app for
                looking up lighting equipment info and making quick weight and
                power calculations.
                <a href="https://www.patchpalapp.com"> www.patchpalapp.com</a>
              </li>
              <li>
                Designed and built internal web tool for choiceschoices.com.
                Provides fast and user friendly data analysis on amazon
                affiliate purchases, cutting down time spent on analysis from
                “Hours to minutes”, allowing ad purchasing and marketing
                decisions to be made on a daily rather than monthly basis.
                <a href="https://www.github.com/Hurrell/affiliate-app">
                  {" "}
                  www.github.com/Hurrell/affiliate-app
                </a>
              </li>
            </ul>
          </dd>
          <dd>
            <h4>Freelance</h4>
            <h5>
              <div>Lighting Director</div>
              <div>2016 - 2020</div>
            </h5>
            <ul>
              <li>
                Built a lighting design business from the ground up, with 30%
                year on year growth for 4 years.
              </li>
              <li>
                Designed, built and operated lighting systems for artists
                including Groove Armada, Public Service Broadcasting, Post
                Malone, Samm Henshaw.
              </li>
              <li>
                Regularly managed teams of up to 20 and projects with ~£10k
                budgets.
              </li>
            </ul>
          </dd>
          <dd>
            <h4>Jaguar Land Rover</h4>
            <h5>
              <div>Summer Internship</div>
              <div>2014</div>
            </h5>
            <ul>
              <li>
                Designed and built an “Ideas Hopper”, an interface and database
                for collecting and managing ideas from around the company.
              </li>
              <li>
                Built around existing infrastructure, using VBA and google
                surveys.
              </li>
              <li>
                Previously this was done on an ad-hoc basis, department by
                department. I engaged and communicated successfully with senior
                management in various departments to create a tool that could be
                used by everyone.
              </li>
            </ul>
          </dd>
          <dd>
            <h4>Atkins (Water & Enviroment)</h4>
            <h5>
              <div>Industrial Placement</div>
              <div>2010-2011</div>
            </h5>
            <ul>
              <li>
                Fluid dynamic modelling of a power station’s thermal exhaust.
              </li>
              <li>
                Automated modelling processes and carried out data analysis
                using Python, saving time and allowing computer models to be run
                over night and over the weekend.
              </li>
              <li>
                Prepared and managed real world data for use in simulations.
              </li>
              <li>
                Communicated with and fulfilled work for international clients.
              </li>
            </ul>
          </dd>
          <dt>Personal Highlights</dt>
          <dd>
            <ul>
              <li>
                Media Chair of Student’s Union. Key Stakeholder in £1Million
                redevelopment of Media Facilities at University.
              </li>
              <li>
                Head Chorister at St Paul’s Cathedral aged 12. Sang on classical
                No. 1 CD; for Queen; on national TV.
              </li>
              <li>Grade 8 French Horn! Currently learning to DJ…</li>
            </ul>
          </dd>
        </dl>

        <div className="CV-pdf">
          <a href={cvPdf} download>
            <AiOutlineFilePdf className="CV-pdf-icon" />
            <p>Download as PDF</p>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default About
