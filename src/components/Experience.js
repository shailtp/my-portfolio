import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className="experience-section">
      <motion.div
        className="tile"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Work Experience</h1>
        <div className="scrollable-content">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="June 2024 - August 2024"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentStyle={{ color: '#000', border: '1px solid #000' }}
            >
              <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Second Spectrum, Los Angeles, CA (React.js, Typescript, AWS)</h4>
              <ul>
                <li>Engineered a play-by-play dashboard that supported real-time NBA data processing and handling over 100,000 events per game.</li>
                <li>Designed the frontend using React and TypeScript, resulting in a 15% improvement in user interaction speed. Utilized AWS services such as Lambda and S3 to create a fault-tolerant, highly scalable backend capable of processing and reconciling data with sub-second latency.</li>
                <li>Improved video content delivery efficiency by 25% through optimized data feed reconciliation, contributing to more accurate and timely analytics for coaches and sports analysts.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="January 2024 - May 2024"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentStyle={{ color: '#000', border: '1px solid #000' }}
            >
              <h3 className="vertical-timeline-element-title">Graduate Teaching Assistant</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco State University, CA</h4>
              <ul>
                <li>Working as a Teaching Assistant for the graduate-level upper course CSC 810 – Analysis of Algorithms II by Prof. Timothy Sun.</li>
                <li>Assisted in instructing a class of 48 graduate students. Responsibilities included developing and grading homework assignments, midterms, and finals, along with crafting comprehensive questions for assignments to enhance students' understanding of complex algorithms.</li>
                <li>Demonstrated skills in assessment, communication, and academic support.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="August 2023 - December 2023"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentStyle={{ color: '#000', border: '1px solid #000' }}
            >
              <h3 className="vertical-timeline-element-title">Graduate Research Assistant</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco State University, CA (Python, TensorFlow, Keras, NumPy)</h4>
              <ul>
                <li>Worked as a Research Assistant under the guidance of Prof. Hao Yue.</li>
                <li>Conducted Research on a network-based inference method to accurately detect phishing URLs camouflaged with legitimate patterns, i.e., robust to evasion.</li>
                <li>Proposed method consistently showed better detection performance throughout various experimental tests than state-of-the-art methods, e.g., F-1 score of 0.89 for our method vs. 0.84 for the best feature-based method.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="January 2023 - May 2023"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentStyle={{ color: '#000', border: '1px solid #000' }}
            >
              <h3 className="vertical-timeline-element-title">Software Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Flowjet Valves Ltd, India (Javascript, NodeJS, MongoDB)</h4>
              <ul>
                <li>Orchestrated the backend development and database management of the company E-commerce portal using Node.js and MongoDB. Built API endpoints for the website and reduced database latency by 45%.</li>
                <li>Utilizing machine learning algorithms, a 30-day demand forecast for a product was generated. This forecast, which achieved approximately 70% accuracy on real-time seller data, can assist in choosing a location that can fulfill the order.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2022 – July 2022"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentStyle={{ color: '#000', border: '1px solid #000' }}
            >
              <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">JPAL South Asia, New Delhi-India (React.js, Node.js, Snowflake)</h4>
              <ul>
                <li>Developed and implemented a digital communications strategy for the organization's website, aligning with broader communications goals.</li>
                <li>Accomplished a 30% increase in user engagement, as measured by website analytics, by developing and implementing a comprehensive digital communications strategy.</li>
                <li>Achieved a 40% faster resolution time for user issues, as measured by support ticket data, by responding to user inquiries promptly and coordinating with external developers for complex troubleshooting.</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="August 2021 - September 2021"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentStyle={{ color: '#000', border: '1px solid #000' }}
            >
              <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">The Sparks Foundation, Singapore</h4>
              <ul>
                <li>Engaged in the development and implementation of Supervised Machine Learning models, utilizing algorithms such as Logistic Regression, Support Vector Machine (SVM), and K-Nearest Neighbors to analyze and derive insights from real-life datasets.</li>
                <li>Implemented Machine Learning algorithms and VGG16 architecture of CNN model to achieve an accuracy of around 90%.</li>
                <li>Acquired expertise in conducting comprehensive Exploratory Data Analysis (EDA) on large datasets, employing advanced data visualization techniques for insightful analysis.</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
