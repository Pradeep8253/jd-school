import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";

// Public Pages
import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/About/About";
import DirectorMessage from "./components/Pages/About/DirectorMessage";
import Vission from "./components/Pages/About/Vission";
import Mission from "./components/Pages/About/Mission";
import Admission from "./components/Pages/About/Admission";
import AdmissionPage from "./components/Pages/AdmissionPage";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
import Gallery from "./components/Pages/Gallery";

// Academic & Session Information
import AcademicZone from "./components/Pages/AcedmicZone/AcademicZone";
import Activities from "./components/Pages/AcedmicZone/Activities";
import AnnualPlanner from "./components/Pages/AcedmicZone/AnnualPlanner";
import ExaminationSchedule from "./components/Pages/AcedmicZone/ExaminationSchedule";
import SessionInformation from "./components/Pages/SessionInformation/SessionInformation";
import SchoolTimimng from "./components/Pages/SessionInformation/SchoolTimimng";
import FreeRegualation from "./components/Pages/SessionInformation/FreeRegualation";
import RulesAndTransport from "./components/Pages/SessionInformation/RulesAndTransport";

// Infrastructure
import Infrastructure from "./components/Pages/InfraStructure/Infrastructure";
import SchoolTransport from "./components/Pages/InfraStructure/SchoolTransport";
import SchoolCampus from "./components/Pages/InfraStructure/SchoolCampus";
import Laboratory from "./components/Pages/InfraStructure/Laboratory";
import SmartClasses from "./components/Pages/InfraStructure/SmartClasses";
import SportsGround from "./components/Pages/InfraStructure/SportsGround";
import Library from "./components/Pages/InfraStructure/Library";
import SignIn from "./admin/pages/AuthPages/SignIn";
import Ecommerce from "./admin/pages/Dashboard/ECommerce";
import Activity from "./admin/pages/ActivityMain";
import Announcement from "./admin/pages/Announcement";
import NotFound from "./admin/pages/OtherPage/NotFound";
import AuthLayout from "./admin/layout/AuthLayout";
import AppLayout from "./admin/layout/AppLayout";

// Admin Pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "about/message", element: <DirectorMessage /> },
      { path: "about/vision", element: <Vission /> },
      { path: "about/mission", element: <Mission /> },
      { path: "admission", element: <Admission /> },
      { path: "admissionopen", element: <AdmissionPage /> },
      { path: "academic-zone", element: <AcademicZone /> },
      { path: "academic-zone/activities", element: <Activities /> },
      { path: "academic-zone/annual-planner", element: <AnnualPlanner /> },
      { path: "academic-zone/exam-schedule", element: <ExaminationSchedule /> },
      { path: "session-info", element: <SessionInformation /> },
      { path: "session-info/schooltiming", element: <SchoolTimimng /> },
      { path: "session-info/freeregulation", element: <FreeRegualation /> },
      { path: "session-info/rulecode-condt", element: <RulesAndTransport /> },
      { path: "infrastructure", element: <Infrastructure /> },
      {
        path: "infrastructure/transport-facilities",
        element: <SchoolTransport />,
      },
      { path: "infrastructure/schoolcampus", element: <SchoolCampus /> },
      { path: "infrastructure/laboratory", element: <Laboratory /> },
      { path: "infrastructure/smartclasses", element: <SmartClasses /> },
      { path: "infrastructure/library", element: <Library /> },
      { path: "infrastructure/sportsground", element: <SportsGround /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "gallery", element: <Gallery /> },
    ],
  },
  {
    path: "/admin",
    element: <AuthLayout />, // Admin Authentication Layout
    children: [{ path: "", element: <SignIn /> }],
  },
  {
    path: "/admin",
    element: <AppLayout />, // Admin Panel Layout
    children: [
      { path: "dashboard", element: <Ecommerce /> },
      { path: "annualplanner", element: <AnnualPlanner /> },
      { path: "activity", element: <Activity /> },
      { path: "announcement", element: <Announcement /> },
      { path: "gallery", element: <Gallery /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />, // 404 Page
  },
]);

export default router;
