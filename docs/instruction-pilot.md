<img src="./images/logo-with-text-long-600.png" alt="SmartPAL logo" width="50%">

# SmartPAL Instructional Pilot Instructor Guide

Last Revision: December 17th, 2025

## Overview

The goal of SmartPAL is to enhance student engagement and learning performance and to empower instructors with data-driven insights and tools using learning technologies such as Generative AI, chatbots, and engagement features.

SmartPAL leverages information obtained via the Canvas API to serve students and instructors. It bridges the gaps between Canvas, students, and instructors.

- **For students**: We provide an iOS/Android app that serves as a personal learning assistant connected to Canvas. The app has a built-in GenAI-powered chatbot, a dashboard, and a leaderboard. Students can ask the chatbot course-related questions and receive chatbot-initiated reminders, updates, and nudges.  
- **For instructors**: We provide weekly reports via email and a web-based instructor dashboard. Below, we describe SmartPAL in more detail.

The current SmartPAL deployment described in this guide is intended for **instructional use only** and does not involve a research study.

Here is a short demo of SmartPAL: 
<div style="max-width: 800px; margin: 1.5rem auto;">
  <iframe
    width="100%"
    height="450"
    src="https://youtu.be/UU0TEUH1NNs"
    title="SmartPAL Demo"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>

## How Does SmartPAL Interact with Students?

SmartPAL is designed to enhance course engagement throughout the learning lifecycle. It uses a combination of chatbot and gamification to achieve this goal. 

- **Chatbot**: The GenAI-powered chatbot is designed to answer student questions about the course ("pull" from students) as well as send students reminders, updates, encouragements, and nudges ("push" to students). 
- **Gamification**: We use game elements such as gems, levels, avatars, and leaderboards to motivate course engagement. Our gamification system tracks and rewards several engagement indicators such as on-time submission, Canvas pageviews, answering self-reflection questions, and SmartPAL app check-ins (see Appendix for more details). 
  
The SmartPAL app consists of three main screens: 

- **Dashboard**: Students see current course scores and upcoming due dates, synced from Canvas.
- **Chatbot**: Students can ask the chatbot course-related questions and receive chatbot-initiated messages.
- **Leaderboard**: If enabled, it highlights highly engaged students based on weekly or accumulated gems. 

<img src="images/dashboard.png" alt="Dashboard" width="30%"> <img src="images/chatbot.jpg" alt="Chatbot" width="30%"> <img src="images/leaderboard.png" alt="Leaderboard" width="30%">

## How Does SmartPAL Interact with Instructors?

- A **weekly report** via email with information such as (see a [sample email](https://docs.google.com/document/d/1fLUrjxQAOoHWFsuMkal1GwLyPIeNZpqr/edit?usp=sharing&ouid=112472821958913932760&rtpof=true&sd=true)):  
  - Current score  
  - Course goal  
  - Days since last activity  
  - Hours on Canvas (all time)  
  - Pageviews for the current week  
  - Gems received this week  
  - Gems received all time  

- An **instructor portal**: A web-based instructor portal that provides live student progress information and additional ways to view insights and interact with SmartPAL.

## What Are Needed from Instructors?

### Before the Term Starts

1. **Giving SmartPAL Access to Your Canvas Course**  
   - We ask you to **add SmartPAL (smartpal@[your_org].edu) as an Instructor** to your course. This allows SmartPAL to retrieve course and student information via the Canvas API and to perform SmartPAL-related actions such as uploading SmartPAL-related documents and recording participation-related grades.

2. **Determine Participation Incentives (Optional)**  
   Some instructors choose to associate SmartPAL participation (for example, completing reflections or engagement activities) with a small amount of course credit or extra credit.  
   - Participation incentives are optional and fully defined by the instructor.
   - Any incentives should be clearly described in the syllabus.

3. **Include Syllabus Language about SmartPAL**  
   Include some language about SmartPAL in the syllabus, which we can share with you.

4. **(Optional) Checklist for Canvas**  
   The following checklist can help SmartPAL better answer student questions:
   - Always set **due dates** for deliverables such as assignments and quizzes.
   - Include **descriptions** for exams, quizzes, and modules (e.g., covered topics, exam preparation tips).
   - Use a **grading scheme** ([see guide](https://community.canvaslms.com/t5/Admin-Guide/How-do-I-add-a-grading-scheme-in-an-account/ta-p/146)) so that Canvas course scores can be translated into a letter grade.
   - Maintain the Canvas gradebook to provide an accurate running total, including:
     - Ensure that every assignment has a **point value** assigned to enable correct grade calculation.
     - Regularly enter grades for all assignments.
     - Utilize **weighted assignment groups** if applicable ([see guide](https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-weight-the-final-course-grade-based-on-assignment/ta-p/746)).
     - Enter **“0” for missing submissions** (Canvas ignores ungraded assignments when calculating a student’s total grade, even those that are past due).
   - Offer the **syllabus** using Canvas’s *Syllabus* function (an inline syllabus is preferred over an attachment)  
     ([see guide](https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-use-the-Syllabus-as-an-instructor/ta-p/638)).
   - For subjectively graded questions, consider using a grading rubric  
     ([see guide](https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-add-a-rubric-to-an-assignment/ta-p/1058)).

### On the First Day of Class

Instructors may choose to show a few slides or a short video introducing SmartPAL and explain how it will be used to support learning in the course.

### At the End of the Term

SmartPAL-related participation grades, if used, are kept up to date and are **finalized by the last day of instruction**.  
If you have any questions about SmartPAL-related grades, please contact **support@smartpal.org**.

## What Canvas Changes Can SmartPAL Make?

SmartPAL follows a **shared responsibility model**, where instructors retain full control over course policies and grading, and SmartPAL performs only approved SmartPAL-specific actions.

SmartPAL may make the following changes on behalf of the instructor:

- Create a SmartPAL module in Canvas
- Upload or update SmartPAL-related documents (for example, user guides or instructional materials)
- Create or update SmartPAL-related assignments (for example, reflections or engagement activities) with point values defined by the instructor
- Set or adjust due dates for SmartPAL-related assignments
- Create an assignment group for SmartPAL-related assignments
- Post SmartPAL-related participation grades
- Email students about SmartPAL from **support@smartpal.org**

SmartPAL will not:

- Make any changes to Canvas elements that are unrelated to SmartPAL
- Post Canvas announcements without prior instructor approval

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
