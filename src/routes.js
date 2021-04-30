import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Secret from "./components/Secret";
import Auth from "./components/pages/Auth";
import ForgotPsd from "./components/pages/forgotPassword";
import ResetPsd from "./components/pages/resetPassword";
import MyAccount from "./components/pages/MyAccount";
import Price from "./components/pages/price";
import Stripe from "./components/pages/price/stripeContainer";
import Faq from "./components/pages/faq";
import Tool from "./components/pages/tool";
import BlogList from "./components/pages/blog/blogList";
import BlogDetail from "./components/pages/blog/blogDetail";
import Template from "./components/pages/template";
import myResume from "./components/pages/myResume";

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/reset-password",
        component: ResetPsd,
        // exact: true,
    },
    {
        path: "/my-account",
        component: MyAccount,
        // exact: true,
    },
    {
        path: "/forgot-password",
        component: ForgotPsd,
        // exact: true,
    },
    {
        path: "/auth",
        component: Auth,
        exact: true,
    },
    {
        path: "/pricing",
        component: Price,
        exact: true,
    },
    {
        path: "/payment",
        component: Stripe,
        exact: true,
    },
    {
        path: "/faq",
        component: Faq,
        exact: true,
    },
    {
        path: "/resume-maker/edit/:id",
        component: Tool,
    },
    {
        path: "/resume-maker/:template_id",
        component: Tool,
    },
    
    {
        path: "/blogs/:id",
        component: BlogDetail,
    },
    {
        path: "/templates",
        component: Template,
    },
    {
        path: "/my-resumes",
        component: myResume,
    },
    {
        path: "/blogs",
        component: BlogList,
    },
    {
        path: "/about",
        component: About,
        exact: true,
    },
    {
        path: "/contact",
        component: Contact,
        exact: true,
    },
    {
        path: "/secret",
        component: Secret,
        exact: true,
    },
];
