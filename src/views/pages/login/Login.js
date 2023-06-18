import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { auth, provider } from './config'
import { signInWithPopup } from 'firebase/auth'
import './style.scss'
import axios from 'axios'

const Login = () => {
  const [value, setValue] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const passwordHandle = (event) => {
    setPassword(event.target.value)
  }

  const usernameHandle = (event) => {
    setUsername(event.target.value)
  }
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem('email', data.user.email)
    })
  }

  function login() {
    axios({
      method: 'post',
      url: 'https://ec2-54-169-148-196.ap-southeast-1.compute.amazonaws.com/saler/login',
      data: {
        username: username,
        password: password,
      },
    })
      .then((response) => {
        window.location.href = '/tastetrekker_dashboard/#/dashboard'
      })
      .catch((error) => {
        console.log(error)
        alert('Vui lòng kiểm tra lại tài khoản')
      })
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Đăng nhập</h1>
                    <p className="text-medium-emphasis">Đăng nhập tài khoản của bạn</p>
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
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Mật khẩu"
                        autoComplete="current-password"
                        onChange={passwordHandle}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={login}>
                          Đăng nhập
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Quên mật khẩu?
                        </CButton>
                      </CCol>
                    </CRow>
                    {value ? (
                      (window.location.href = '/dashboard')
                    ) : (
                      <div className="google-btn" onClick={handleClick}>
                        <div className="google-icon-wrapper">
                          <img
                            className="google-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                          />
                        </div>
                        <p className="btn-text">
                          <b> Đăng nhập với google</b>
                        </p>
                      </div>
                    )}
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Đăng ký</h2>
                    <img
                      src="images/logo.png"
                      className="img-fluid"
                      alt="Logo"
                      style={{ width: '200px' }}
                    />
                    <br />
                    <Link to="/register">
                      <CButton color="danger" className="mt-3" active tabIndex={-1}>
                        Đăng ký ngay!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
