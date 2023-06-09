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
  CImage,
} from '@coreui/react'

function Product() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/product/all`,
    })
      .then((response) => {
        const data = response.data.data
        setProducts(data)
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
            <strong>Danh sách sản phẩm</strong>
          </CCardHeader>
          <CCardBody>
            <CTable striped>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tên</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Số lượng</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Đơn giá</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Mô tả</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Hình ảnh</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Phân loại</CTableHeaderCell>
                  <CTableHeaderCell scope="col">X</CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {products?.map((product) => (
                  <CTableRow key={product.productid}>
                    <CTableHeaderCell scope="row">{product.productid}</CTableHeaderCell>
                    <CTableDataCell>{product.name}</CTableDataCell>
                    <CTableDataCell>{product.quantity}</CTableDataCell>
                    <CTableDataCell>{product.price}</CTableDataCell>
                    <CTableDataCell>{product.detail}</CTableDataCell>
                    <CTableDataCell>
                      <CImage
                        src={product.mainimg}
                        className="d-inline-block align-top"
                        alt="CoreuiVue"
                        width={200}
                        height={200}
                      />
                    </CTableDataCell>
                    <CTableDataCell width={90}>{product.Category.catename}</CTableDataCell>
                    <CTableDataCell>
                      <Link to={`/product/update/${product.productid}`}>
                        <CButton color="warning">Sửa</CButton>
                      </Link>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
            <Link to={`/product/add`}>
              <CButton color="success">Tạo sản phẩm mới</CButton>
            </Link>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Product
