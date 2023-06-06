import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
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
