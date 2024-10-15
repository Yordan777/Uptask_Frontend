import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "@/layouts/AppLayout"
import DasboardView from "@/views/DasboardView"
import CreateProjectView from "./views/project/CreateProjectView"
import EditProjectView from "./views/project/EditProjectView"
import ProjectDetailsView from "./views/project/ProjectDetailsView"
import AuthLayout from "./layouts/AuthLayout"
import LoginView from "./views/auth/LoginView"
import RegisterView from "./views/auth/RegisterView"
import ConfirmAccountView from "./views/auth/ConfirmAccountView"
import RequestConfirmationCodeView from "./views/auth/RequestNewCodeView"
import ForgotPasswordView from "./views/auth/ForgotPasswordView"
import NewPasswordView from "./views/auth/NewPasswordView"
import ProjectTeamView from "./views/project/ProjectTeamView"
import ChangePasswordView from "./views/profile/ChangePasswordView"
import ProfileLayout from "./layouts/ProfileLayout"
import ProfileView from "./views/profile/ProfileView"
import NotFound from "./views/404/NotFound"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<DasboardView />} index />
                    <Route path="/projects/create" element={<CreateProjectView />} />
                    <Route path="/projects/:projectId" element={<ProjectDetailsView />} />
                    <Route path="/projects/:projectId/edit" element={<EditProjectView />} />
                    <Route path="/projects/:projectId/team" element={<ProjectTeamView />} />
                    <Route element={<ProfileLayout />}>
                        <Route path="/profile" element={<ProfileView />} />
                        <Route path="/profile/password" element={<ChangePasswordView />} />
                    </Route>
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="/auth/login" element={<LoginView />} />
                    <Route path="/auth/register" element={<RegisterView />} />
                    <Route path="auth/confirm-account" element={<ConfirmAccountView />} />
                    <Route path="auth/request-code" element={<RequestConfirmationCodeView />} />
                    <Route path="auth/forgot-password" element={<ForgotPasswordView />} />
                    <Route path="auth/new-password" element={<NewPasswordView />} />
                </Route>

                <Route element={<AuthLayout />}>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}