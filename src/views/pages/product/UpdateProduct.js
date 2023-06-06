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
  CFormTextarea,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CFormSwitch,
  CRow,
} from '@coreui/react'
import { useParams } from 'react-router-dom'

function UpdateProduct() {
  const [proName, setProName] = useState('')
  const [proDescription, setProDescription] = useState('')
  const [proQuantity, setProQuantity] = useState('')
  const [proPrice, setProPrice] = useState('')
  const [cateId, setCateId] = useState('')
  const [categories, setCategories] = useState([])
  const { id } = useParams()

  const nameHandle = (event) => {
    setProName(event.target.value)
  }

  const descriptionHandle = (event) => {
    setProDescription(event.target.value)
  }

  const quantityHandle = (event) => {
    setProQuantity(event.target.value)
  }

  const priceHandle = (event) => {
    setProPrice(event.target.value)
  }

  const cateIdHandle = (event) => {
    setCateId(event.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: 'get',
        url: `https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/product/${id}`,
      })
        .then((resposne) => {
          const data = resposne.data.data
          setProName(data.name)
          setProDescription(data.detail)
          setProQuantity(data.quantity)
          setProPrice(data.price)
          setCateId(data.Category.cateid)
        })
        .catch((ERROR) => {
          console.log(ERROR.resposne)
        })

      await axios({
        method: 'get',
        url: `https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/category`,
      })
        .then((response) => {
          const data = response.data.data
          setCategories(data)
        })
        .catch((ERROR) => {
          console.log(ERROR.resposne)
        })
    }
    fetchData()
  }, [id])

  function handleUpdate() {
    axios({
      method: 'put',
      url: `https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/product/${id}`,
      data: {
        name: proName,
        quantity: proQuantity,
        price: proPrice,
        detail: proDescription,
        categoryId: cateId,
      },
    })
      .then((response) => {
        alert('Cập nhật thành công')
        window.location.href = '/#/product'
      })
      .catch((error) => {
        console.log(error)
        alert('Đã xảy ra lỗi, vui lòng thử lại')
      })
  }

  function handleInactive() {
    axios({
      method: 'delete',
      url: `https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/product/${id}`,
    })
      .then((response) => {
        alert('Vô hiệu hoá thành công')
        window.location.href = '/#/product'
      })
      .catch((error) => {
        console.log(error)
        alert('Đã xảy ra lỗi, vui lòng thử lại')
      })
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>CẬP NHẬT SẢN PHẨM</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="ProductName">Tên sản phẩm</CFormLabel>
                <CFormInput
                  type="text"
                  id="ProductName"
                  value={proName}
                  placeholder="Roses"
                  onChange={nameHandle}
                  required
                />
              </div>
              <div className="mb-3">
                <CInputGroup className="mb-3">
                  <CInputGroupText htmlFor="ProductPrice"> Số lượng</CInputGroupText>
                  <CFormInput
                    aria-label="Dollar amount (with dot and two decimal places)"
                    id="ProductQuantity"
                    rows="3"
                    value={proQuantity}
                    onChange={quantityHandle}
                    type="number"
                    placeholder="0"
                    required
                  />
                </CInputGroup>
              </div>
              <div className="mb-3">
                <CInputGroup className="mb-3">
                  <CInputGroupText htmlFor="ProductPrice"> Giá VNĐ</CInputGroupText>
                  <CInputGroupText>0.00</CInputGroupText>
                  <CFormInput
                    aria-label="Dollar amount (with dot and two decimal places)"
                    id="ProductPrice"
                    rows="3"
                    value={proPrice}
                    onChange={priceHandle}
                    type="number"
                    required
                  />
                </CInputGroup>
              </div>
              <div className="mb-3">
                <CInputGroup className="mb-3">
                  <CInputGroupText component="label" htmlFor="ProductCategory">
                    Phân loại
                  </CInputGroupText>
                  <CFormSelect
                    id="ProductCategory"
                    placeholder="Choose ..."
                    required
                    onChange={cateIdHandle}
                  >
                    {categories?.map((category) => {
                      return cateId === category.id ? (
                        <option key={category.id} selected value={cateId}>
                          {category.catename}
                        </option>
                      ) : (
                        <option key={category.id} value={category.id}>
                          {category.catename}
                        </option>
                      )
                    })}
                  </CFormSelect>
                </CInputGroup>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="ProductDescription">Mô tả</CFormLabel>
                <CFormTextarea
                  id="ProductDescription"
                  rows="3"
                  value={proDescription}
                  onChange={descriptionHandle}
                  required
                ></CFormTextarea>
              </div>
              <CButton type="submit" className="m-3" onClick={handleUpdate}>
                Cập nhật sản phẩm
              </CButton>
              <CButton className="m-3" color="danger" onClick={handleInactive}>
                Vô hiệu sản phẩm
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UpdateProduct
