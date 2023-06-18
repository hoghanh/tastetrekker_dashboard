import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { cilLockLocked, cilUser } from '@coreui/icons'

function Register() {
  const [fullname, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const nameHandle = (event) => {
    setFullName(event.target.value)
  }

  const emailHandle = (event) => {
    setEmail(event.target.value)
  }

  const passwordHandle = (event) => {
    setPassword(event.target.value)
  }

  const usernameHandle = (event) => {
    setUsername(event.target.value)
  }

  function createNew() {
    axios({
      method: 'post',
      url: 'https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/saler/register',
      data: {
        name: fullname,
        email: email,
        username: username,
        password: password,
      },
    })
      .then((response) => {
        alert('Đăng ký thành công')
        window.location.href = '/tastetrekker_dashboard/#/dashboard'
      })
      .catch((error) => {
        console.log(error)
        alert('Có lỗi xảy ra, vui lòng thử lại')
      })
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Đăng kí</h1>
                  <p className="text-medium-emphasis">Tạo tài khoản của bạn</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Họ và tên"
                      autoComplete="fullname"
                      onChange={nameHandle}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Tên người dùng"
                      autoComplete="username"
                      onChange={usernameHandle}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" onChange={emailHandle} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Mật khẩu"
                      autoComplete="new-password"
                      onChange={passwordHandle}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="primary" onClick={createNew}>
                      Tạo tài khoản
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
