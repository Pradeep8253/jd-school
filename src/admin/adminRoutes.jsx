// import React from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import Gallery from "../components/Pages/Gallery";
// import Announcement from "./pages/Announcement";
// import Activity from "./pages/ActivityMain";
// import AnnualPlanner from "./pages/AnnualPlanner";
// import Ecommerce from "./pages/Dashboard/ECommerce";
// import SignIn from "./pages/AuthPages/SignIn";
// import AuthLayout from "./layout/AuthLayout";
// import AppLayout from "./layout/AppLayout";
// import NotFound from "./pages/OtherPage/NotFound";

// export default function AdminRoutes() {
//   return (
//     <Router>
//       <Routes>
//         {/* Authentication Routes */}
//         <Route element={<AuthLayout />}>
//           <Route path="/admin" element={<SignIn />} />
//         </Route>

//         {/* Protected Admin Routes */}
//         <Route element={<AppLayout />}>
//           <Route  path="/admin/dashboard" element={<Ecommerce />} />
//           <Route path="/admin/annualplanner" element={<AnnualPlanner />} />
//           <Route path="/admin/activity" element={<Activity />} />
//           <Route path="/admin/announcement" element={<Announcement />} />
//           <Route path="/admin/gallery" element={<Gallery />} />
//         </Route>

//         {/* Fallback Route */}
//         <Route path="/admin/*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
// }
