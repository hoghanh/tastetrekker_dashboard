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
  CCardImage,
  CCardTitle,
  CCardText,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CCardFooter,
} from '@coreui/react'

function Tracking() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  function handleStatus(id, status) {
    axios({
      method: 'put',
      url: `https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/order/status/${id}`,
      data: {
        tracking: status,
      },
    })
      .then((response) => {
        console.log(id, status)
        alert('Cập nhật thành công')
        fetchOrders()
      })
      .catch((error) => {
        console.log(error)
        alert('Đã xảy ra lỗi, vui lòng thử lại')
      })
  }

  const fetchOrders = async () => {
    axios
      .get('https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/order/')
      .then((response) => {
        const data = response.data.data
        setOrders(data)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

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
              <CPaginationItem>Thanh toán tiền mặt</CPaginationItem>
              <CPaginationItem>Đã thanh toán</CPaginationItem>
              <CPaginationItem>Thành công</CPaginationItem>
              <CPaginationItem>Đã huỷ</CPaginationItem>
            </CPagination>
            {orders?.map((order) => (
              <CCard key={order.orderid} style={{ width: '100', margin: '20px' }}>
                {order.status !== 'cart' && (
                  <CCardBody>
                    <CCardTitle>Đơn hàng: {order.orderid}</CCardTitle>
                    <CCardText>
                      <CTable striped>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell scope="col" style={{ width: '500px' }}>
                              Tên sản phẩm
                            </CTableHeaderCell>
                            <CTableHeaderCell scope="col">Hình ảnh</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Số lượng</CTableHeaderCell>
                            <CTableHeaderCell scope="col">Đơn giá</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          {order.OrderDetails.map((orderDetail) => (
                            <CTableRow key={orderDetail.Product.productid}>
                              <CTableDataCell scope="row">
                                {orderDetail.Product.name}
                              </CTableDataCell>
                              <CTableDataCell>
                                <CCardImage
                                  orientation="top"
                                  src={orderDetail.Product.mainimg}
                                  style={{ width: '50px' }}
                                />
                              </CTableDataCell>
                              <CTableDataCell>{orderDetail.quantity}</CTableDataCell>
                              <CTableDataCell>{orderDetail.Product.price}</CTableDataCell>
                            </CTableRow>
                          ))}
                        </CTableBody>
                      </CTable>
                    </CCardText>
                    <CCardFooter
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <CCardText>Tổng tiền: {order.totalmoney}</CCardText>
                      <CCardText>
                        Trạng thái:{' '}
                        {order.status === 'Pending'
                          ? 'Đang chờ'
                          : order.status === 'pending_cast'
                          ? 'Thanh toán tiền mặt'
                          : order.status === 'banking'
                          ? 'Đã thanh toán'
                          : order.status === 'done'
                          ? 'Đã nhận'
                          : 'Đã huỷ'}
                      </CCardText>
                      <CDropdown>
                        <CDropdownToggle color="primary">Chuyển trạng thái</CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem onClick={() => handleStatus(order.orderid, 'banking')}>
                            Đã thanh toán
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => handleStatus(order.orderid, 'pending_cast')}
                          >
                            Thanh toán tiền mặt
                          </CDropdownItem>
                          <CDropdownItem onClick={() => handleStatus(order.orderid, 'done')}>
                            Thành công
                          </CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </CCardFooter>
                  </CCardBody>
                )}
              </CCard>
            ))}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tracking
