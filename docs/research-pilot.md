<img src="./images/logo-with-text-long-600.png" alt="Alt Text" width="50%">

# SmartPAL Research Pilot Instructor Guide

Last Revision: December 17th, 2025

## Overview

The overarching goal of the project is to enhance student engagement and learning performance and empower instructors with data-driven insights and tools using various learning technologies including Generative AI, chatbot, and gamification. 

SmartPAL leverages information obtained using Canvas API to serve students and instructors. It bridges the gaps between Canvas, students, and instructors.

- **For students**: We provide an iOS/Android app that serves as a personal learning assistant connected to Canvas. The app has a built-in GenAI-powered chatbot, a dashboard, and a leaderboard. Students can ask the chatbot courses-related questions and also receive chatbot-initiated reminders, updates, and nudges. 
- **For instructors**: We provide weekly reports via email and a web-based instructor dashboard. Below, we describe SmartPAL in a bit more detail. 

The current SmartPAL deployment is primarily meant to support research, which entails evaluation of a few learning technologies and their designs. We use the information gathered to drive insights on impact and effectiveness of technologies and suggest design improvements.

<iframe width="100%" height="450" src="https://www.youtube.com/embed/frgNlcm70XM" title="SmartPAL Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>

## How Does SmartPAL Interact with Students?

SmartPAL is designed to enhance course engagement throughout the learning lifecycle. It uses a combination of chatbot and gamification to achieve this goal. 

- **Chatbot**: The GenAI-powered chatbot is designed to answer student questions about the course ("pull" from students) as well as send students reminders, updates, encouragements, and nudges ("push" to students) 
- **Gamification**: We use game elements such as gems, levels, avatars, and leaderboards to motivate course engagement. Our gamification system tracks and rewards several engagement indicators such as on-time submission, Canvas pageviews, answering self-reflection questions, and SmartPAL app check-ins (see Appendix for more details) 
  
The SmartPAL app consists of three main screens: 

- **Dashboard**: Students see current course scores and upcoming due dates, synced from Canvas.
- **Chatbot**: Students can ask the chatbot course-related questions and receive chatbot-initiated messages.
- **Leaderboard**: It features top ~20% most-engaged students based on the weekly or accumulated gems. 

<img src="images/dashboard.png" alt="Dashboard" width="30%"> <img src="images/chatbot.jpg" alt="Chatbot" width="30%">  <img src="images/leaderboard.png" alt="Leaderboard" width="30%">


## How Does SmartPAL Interact with Instructors?

- A **weekly report** via email with information such as (see a [sample email](https://docs.google.com/document/d/1y1XJ1_RUTXAdj9aU2CtxjoOmzuQbKMfKEGO361hy_zI/edit?usp=sharing)):  
    - Current Score
    - Course Goal
    - Days since last activity
    - Hours on Canvas (all time)
    - Pageviews for the current week
    - Gems received this week
    - Gems received all time
- An **instructor portal**: A web-based instructor portal with live student progress information and more ways to view such information and interact with SmartPAL. 


## What Are Needed from Instructors?

### Before The Term Starts

1. **Giving SmartPAL Access to Your Canvas Course**. 
      - We ask you to **add SmartPAL (smartpal@umn.edu) as an Instructor** to your course. This gives us access to your course, and we can use this instructor role to retrieve course and student information using Canvas API, and make updates such as upload SmartPAL-related documents and grades.
2. **Determine the Participation Incentives**: As part of the research, students are asked to complete a pre-survey (at the beginning of the semester) and a post-survey (at the end), and to install the SmartPAL app. Students may require some incentives to complete these steps.  
      - We recommend **1-2% worth of extra credit (or course credit)** given to students for this research participation. That said, we can still deploy SmartPAL without credit incentives, though our past experiences indicate that students are less likely to try the app or complete the surveys.
      - **Please let us know whether you are willing to offer such extra points/credits, and how much.** 
3. **Include Syllabus Language about SmartPAL**: Include some language about SmartPAL in the syllabus, which we will share with you.  
4. **(Optional) Checklist for Canvas**:The following checklist can help SmartPAL better answer student questions.
      - Always set **due dates** for deliverables such as assignments and quizzes.
      - Include **descriptions** for exams, quizzes, and modules (e.g. what topics do they cover, exam preparation tips etc)
      - Using a **grading scheme**: [See a guide here](https://community.canvaslms.com/t5/Admin-Guide/How-do-I-add-a-grading-scheme-in-an-account/ta-p/146), so that we can translate the Canvas course score into a letter grade.
      - Maintain the Canvas grade book to provide an accurate running total, including:
          - Ensure that every assignment has a **point value** assigned to enable correct grade calculation. 
          - Regularly enter grades for all assignments
          - Utilize [**weighted assignment groups**](https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-weight-the-final-course-grade-based-on-assignment/ta-p/746) if you use weighted grading.
          - Enter **"0" for missing submissions** (Canvas ignores all ungraded assignments when calculating a student’s total grade, even those that are past due)
      - Offer the **syllabus** using Canvas's "Syllabus" function(an inline syllabus is preferred over an attachment): [See a guide here](https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-use-the-Syllabus-as-an-instructor/ta-p/638).
      - For subjectively graded questions, it would be helpful to use a grading rubric: [See a guide here](https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-add-a-rubric-to-an-assignment/ta-p/1058).


### On the first day of class

We will ask you to show some slides/a short video about SmartPAL, and encourage students to participate in the research.  

### At the end of the term

Usually, we keep smartpal-related grades updated and such grades are **finalized by the last day of instruction**. You may let us know if you have any questions about the SmartPAL grades (support@smartpal.org).

## What Canvas Changes Can SmartPAL Make?

SmartPAL follows a shared responsibility model, where instructors retain full control over course policies and grading, and SmartPAL performs only approved SmartPAL-specific actions. 

We may make these changes on behalf of the instructor:

- Creating a Module for SmartPAL
- Upload or update SmartPAL-related documents (User Guide, IRB Information Sheet, etc)
- Create or update SmartPAL-related assignments (e.g. filling out surveys, installing the app) with appropriate point values based on the agreed-upon participation incentives. 
- Set or change the due dates for SmartPAL-related assignments
- Create an assignment group for SmartPAL-related assignments
- Post SmartPAL-related grades
- Email students about SmartPAL from support@smartpal.org

We will not do the following:

- We do not make any change to Canvas elements that are unrelated to SmartPAL.
- We do not post Canvas announcements unless we have asked and gotten your permission.

## Feature Updates

### Spring 2026
(Updates will be added as features roll out.)

### Fall 2025
### Web App and Canvas Integration
- Web Access: SmartPAL is now available at app.smartpal.org
- Canvas Integration: Log into SmartPAL directly within your Canvas courses via the new Canvas plug-in.
- Instructor Dashboard: Instructors can now view course-level data, including late submissions, reflection rates, and anonymized student questions.
- Course Settings: Instructors can enable or disable features like leaderboards and assignment reminders for each course.

### Mobile App Updates
- Single Sign-On (SSO): Sign in using your institution’s login credentials. No separate account needed.
- Custom Leaderboards: Leaderboards are now optional and can be hidden or shown based on the course setup.

### Chatbot Enhancements
- Faster Responses: New streaming technology delivers real-time chatbot answers, especially for cached course info.
- Smarter Conversations: The chatbot now supports richer, more context-aware responses and can begin handling interactive quiz content.

### New Instructor Tools
- Reflections via Web: Students can complete weekly reflections through both the app and the new web interface.
- Custom Messaging & Reports: Instructors receive updated dashboards and weekly digests with insights into class engagement.

## Contact

- Please forward SmartPAL-related student queries to [support@smartpal.org](mailto:support@smartpal.org). 
