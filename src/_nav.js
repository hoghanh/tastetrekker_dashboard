import React from 'react'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Bảng điều khiển',
    to: '/dashboard',
  },
  {
    component: CNavItem,
    name: 'Theo dõi',
    to: '/tracking',
  },
  {
    component: CNavItem,
    name: 'Phân loại',
    to: '/category',
  },
  {
    component: CNavItem,
    name: 'Sản phẩm',
    to: '/product',
  },
]

export default _nav
