import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'

function AddCategory() {
  const [cateName, setCateName] = useState('')
  const salerid = 'SALER_001'

  const nameHandle = (event) => {
    setCateName(event.target.value)
  }

  function createNew() {
    axios({
      method: 'post',
      url: 'https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/category',
      data: {
        name: cateName,
        salerid: salerid,
      },
    })
      .then((response) => {
        alert('Tạo mới thành công')
      })
      .catch((error) => {
        console.log(error)
        alert('Có lỗi xảy ra, vui lòng thử lại')
      })
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>TẠO PHÂN LOẠI MỚI</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="CategoryName">Tên phân loại</CFormLabel>
                <CFormInput
                  type="text"
                  id="CategoryName"
                  placeholder="Bến Tre"
                  onChange={nameHandle}
                  required
                />
              </div>
              <CButton type="submit" className="mb-3" onClick={createNew}>
                Tạo mới
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddCategory
