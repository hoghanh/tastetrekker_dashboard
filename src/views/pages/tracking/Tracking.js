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
  CPagination,
  CPaginationItem,
  CButton,
  CImage,
} from '@coreui/react'

function Tracking() {
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
            <strong>Theo dõi đơn hàng</strong>
          </CCardHeader>
          <CCardBody>
            <CPagination className="justify-content-center" aria-label="Page navigation example">
              <CPaginationItem active>Tất cả</CPaginationItem>
              <CPaginationItem>Đang chờ</CPaginationItem>
              <CPaginationItem>Chưa thanh toán</CPaginationItem>
              <CPaginationItem>Đã thanh toán</CPaginationItem>
              <CPaginationItem>Thành công</CPaginationItem>
              <CPaginationItem>Đã huỷ</CPaginationItem>
            </CPagination>
            <CTable striped>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row" colSpan={4}>
                    Tên shop
                  </CTableHeaderCell>
                  <CTableDataCell>Sản phẩm</CTableDataCell>
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tracking
