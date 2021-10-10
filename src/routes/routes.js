import { lazy } from 'react';


const Home = lazy(() => import('../pages/home'));
const Product = lazy(() => import ('../pages/product'));
const Login = lazy(() => import ('../pages/login'));
const AdminProducts = lazy(() => import ('../pages/admin-products'));
const CreateProductNew = lazy(() => import ('../pages/create-product-new'));
const EditProduct = lazy(() => import ('../pages/edit-product'));
const AdminPlains = lazy(() => import ('../pages/admin-planes'));


export const routes = [
    {
        path:'/',
        component:Home,
        exact:true
    },
    {
        path:'/product/:url',
        component: Product,
        exact:true
    },
    {
        path:'/login',
        component: Login,
        exact:true
    },
    {
        path:'/admin/products',
        component: AdminProducts,
        exact:true
    },
    {
        path:'/admin/products/new',
        component: CreateProductNew,
        exact:true
    },
    {
        path:'/admin/products/:url',
        component: EditProduct,
        exact:true
    },
    {
        path:'/admin/plains',
        component: AdminPlains,
        exact:true
    }
]