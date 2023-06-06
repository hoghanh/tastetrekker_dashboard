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
  CRow,
} from '@coreui/react'

function AddProduct() {
  const [proName, setproName] = useState('')
  const [proDescription, setproDescription] = useState('')
  const [proQuantity, setproQuantity] = useState('')
  const [proPrice, setproPrice] = useState('')
  const [cateId, setCateId] = useState('')
  const [categories, setCategories] = useState([])
  const [file, setFile] = useState()

  const nameHandle = (event) => {
    setproName(event.target.value)
  }

  const descriptionHandle = (event) => {
    setproDescription(event.target.value)
  }

  const quantityHandle = (event) => {
    setproQuantity(event.target.value)
  }

  const priceHandle = (event) => {
    setproPrice(event.target.value)
  }

  const cateIdHandle = (event) => {
    setCateId(event.target.value)
  }

  const fileHandle = (event) => {
    console.log(event.target.files[0])
    setFile(event.target.files[0])
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:8080/api/categories?limit=1000`,
    })
      .then((response) => {
        const data = response.data.data
        setCategories(data)
      })
      .catch((ERROR) => {
        console.log(ERROR.resposne)
      })
  }, [])

  function createNew() {
    let formdata = new FormData()
    formdata.append('name', proName)
    formdata.append('description', proDescription)
    formdata.append('quantity', proQuantity)
    formdata.append('price', proPrice)
    formdata.append('categoryId', cateId)
    formdata.append('images', file, file.name)

    axios
      .post('http://localhost:8080/api/products/', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
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
            <strong>TẠO MỚI SẢN PHẨM</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="ProductName">Tên sản phẩm</CFormLabel>
                <CFormInput
                  type="text"
                  id="ProductName"
                  placeholder="Roses"
                  onChange={nameHandle}
                  required
                />
              </div>
              <div className="mb-3">
                <CInputGroup className="mb-3">
                  <CInputGroupText htmlFor="ProductPrice"> Số lượng</CInputGroupText>
                  <CFormInput
                    id="ProductQuantity"
                    rows="3"
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
                  <CInputGroupText>0.000</CInputGroupText>
                  <CFormInput
                    aria-label="Dollar amount (with dot and two decimal places)"
                    id="ProductPrice"
                    rows="3"
                    onChange={priceHandle}
                    type="number"
                    required
                  />
                </CInputGroup>
              </div>
              <div className="mb-3">
                <CInputGroup className="mb-3">
                  <CInputGroupText component="label" htmlFor="ProductCategory">
                    Category
                  </CInputGroupText>
                  <CFormSelect
                    id="ProductCategory"
                    placeholder="Choose ..."
                    required
                    onChange={cateIdHandle}
                  >
                    {categories?.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </CFormSelect>
                </CInputGroup>
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="ProductDescription">Mô tả</CFormLabel>
                <CFormTextarea
                  id="ProductDescription"
                  rows="3"
                  onChange={descriptionHandle}
                  required
                ></CFormTextarea>
              </div>
              <div className="mb-3">
                <CInputGroup>
                  <CFormInput
                    type="file"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    onChange={fileHandle}
                  />
                </CInputGroup>
              </div>
              <CButton type="submit" className="mb-3" onClick={createNew}>
                Tạo sản phẩm
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddProduct
