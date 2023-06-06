import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
} from '@coreui/react'

function Category() {
  const [categories, setCategories] = useState([])

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(categories.length / 10) + 1; i++) {
    pageNumbers.push(i)
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/category`,
    })
      .then((resposne) => {
        const data = resposne.data.data
        setCategories(data)
      })
      .catch((ERROR) => {
        console.log(ERROR.resposne)
      })
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Danh sách phân loại</strong>
          </CCardHeader>
          <CCardBody>
            <CTable striped>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tên phân loại</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Thao tác</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {categories?.map((category) => (
                  <CTableRow key={category.cateid}>
                    <CTableHeaderCell scope="row">{category.cateid}</CTableHeaderCell>
                    <CTableDataCell>{category.catename}</CTableDataCell>
                    <CTableDataCell>
                      <Link to={`/category/update/${category.cateid}`}>
                        <CButton color="warning">Cập nhật</CButton>
                      </Link>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
            <Link to={`/category/add`}>
              <CButton color="success">Tạo phân loại</CButton>
            </Link>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Category
