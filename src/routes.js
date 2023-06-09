import React from 'react'

const Tracking = React.lazy(() => import('./views/pages/tracking/Tracking'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//Categories
const Category = React.lazy(() => import('./views/pages/category/Category'))
const AddCategory = React.lazy(() => import('./views/pages/category/AddCategory'))
const UpdateCategory = React.lazy(() => import('./views/pages/category/UpdateCategory'))

//Products
const Product = React.lazy(() => import('./views/pages/product/Product'))
const AddProduct = React.lazy(() => import('./views/pages/product/AddProduct'))
const UpdateProduct = React.lazy(() => import('./views/pages/product/UpdateProduct'))

const routes = [
  { path: '/', name: 'Bảng điều khiển', element: Dashboard, exact: true },
  { path: '/tracking', name: 'Theo dõi', element: Tracking, exact: true },
  { path: '/category', name: 'Phân loại', element: Category, exact: true },
  {
    path: '/category/update/:id',
    name: 'Cập nhật phân loại',
    element: UpdateCategory,
    exact: true,
  },
  { path: '/category/add', name: 'Thêm phân loại', element: AddCategory, exact: true },
  { path: '/product', name: 'Sản phẩm', element: Product, exact: true },
  {
    path: '/product/update/:id',
    name: 'Cập nhật sản phẩm',
    element: UpdateProduct,
    exact: true,
  },
  { path: '/product/add', name: 'Thêm sản phẩm', element: AddProduct, exact: true },
]

export default routes
