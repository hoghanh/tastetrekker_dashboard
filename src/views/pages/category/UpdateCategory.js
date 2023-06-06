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
import { useParams } from 'react-router-dom'

function UpdateCategory() {
  const [categories, setCategories] = useState([])
  const [cateName, setCateName] = useState()
  const { id } = useParams()

  const nameHandle = (event) => {
    setCateName(event.target.value)
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/category',
    })
      .then((resposne) => {
        const data = resposne.data.data
        setCategories(data)
      })
      .catch((ERROR) => {
        console.log(ERROR.resposne)
      })
  }, [])

  function handleUpdate() {
    axios({
      method: 'put',
      url: `https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/category/${id}`,
      data: {
        name: cateName,
      },
    })
      .then((response) => {
        alert('Cập nhật thành công')
        window.location.href = '/#/category'
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
            <strong>CẬP NHẬT PHÂN LOẠI</strong>
          </CCardHeader>
          <CCardBody>
            {categories?.map((category) => {
              return category.cateid === Number(id) ? (
                <CForm key={category.cateid}>
                  <div className="mb-3">
                    <CFormLabel htmlFor="CategoryName">Tên phân loại</CFormLabel>
                    <CFormInput
                      type="text"
                      id="CategoryName"
                      onChange={nameHandle}
                      defaultValue={category?.catename}
                      required
                    />
                  </div>
                  <CButton type="submit" className="mb-3" onClick={handleUpdate}>
                    Cập nhật
                  </CButton>
                </CForm>
              ) : (
                ''
              )
            })}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UpdateCategory
