import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StBackground,
  StForm,
  StFormBox,
  StLoginForm,
  StLongButton,
  StOverall,
  StTextInput,
} from './UserStyled';
import { StFont, StSmallFont } from '../Welcome/WelcomeStyled';
import { Input } from '../../components/Input';
import useTrueHook from '../../hooks/useTrueHook';
import CertificationCkeck from './CertificationCkeck';
import api from '../../axios/api';

function SignUpUser() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setpasswordCheck] = useState('');
  const [username, setUsername] = useState('');
  const [certification, setCertification] = useState('');
  const [email, setEmail] = useState('');

  const [passwordError, setPasswordError] = useState('');
  const [passwordCheckError, setPasswordCheckError] = useState('');
  const [emailError, setEmailError] = useState('');

  const navi = useNavigate();

  // 가드
  useTrueHook();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = event => {
    const value = event.target.value;
    setEmail(value);

    if (!emailRegex.test(value)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);

    if (value.length < 8) {
      setPasswordError('비밀번호는 최소 8자 이상이어야 합니다.');
    } else {
      setPasswordError('');
    }
  };

  const handlepasswordCheckChange = event => {
    const value = event.target.value;
    setpasswordCheck(value);

    if (value !== password) {
      setPasswordCheckError('비밀번호와 일치하지 않습니다.');
    } else {
      setPasswordCheckError('');
    }
  };

  const submitBtnHandler = async e => {
    e.preventDefault();
    try {
      const response = await api.post('/users/signup/user', user);
      alert(`${user.userName}님 회원가입을 축하합니다.`);
      navi('/login');
      return response;
    } catch (error) {
      const errorMsg = error.response.data.message;
      alert(`${errorMsg}`);
      return error;
    }
  };

  return (
    <StBackground height="900px">
      <StOverall>
        <div
          style={{
            marginTop: '80px',
          }}
        >
          <StLoginForm onSubmit={submitBtnHandler} height="695px">
            <StForm>
              <StFormBox>
                <StFont align="start" fontSize="28px">
                  회원가입
                </StFont>

                <StTextInput>
                  <StSmallFont
                    width
                    align="start"
                    fontSize="0.875rem"
                    weight="700"
                    marginBottom="10px"
                  >
                    사용자 이름
                  </StSmallFont>
                  <Input
                    type="text"
                    value={username}
                    onChange={event => setUsername(event.target.value)}
                    placeholder="이름을 입력하세요."
                    required
                  />
                </StTextInput>
                <StTextInput>
                  <StSmallFont
                    width
                    align="start"
                    fontSize="0.875rem"
                    weight="700"
                    marginBottom="10px"
                  >
                    회사 이메일
                  </StSmallFont>

                  <Input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    name="email"
                    placeholder="이메일을 입력하세요."
                    required
                  />
                </StTextInput>

                <StTextInput>
                  <StSmallFont
                    width
                    align="start"
                    fontSize="0.875rem"
                    weight="700"
                    marginBottom="10px"
                  >
                    비밀번호
                  </StSmallFont>
                  <Input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
                    required
                    minlength="8"
                    maxlength="16"
                  />
                </StTextInput>
                {passwordError && (
                  <StSmallFont
                    width
                    align="start"
                    fontSize="0.875rem"
                    weight="700"
                    color="red"
                  >
                    {passwordError}
                  </StSmallFont>
                )}

                <StTextInput>
                  <StSmallFont
                    width
                    align="start"
                    fontSize="0.875rem"
                    weight="700"
                    marginBottom="10px"
                  >
                    비밀번호 확인
                  </StSmallFont>
                  <Input
                    type="password"
                    value={passwordCheck}
                    onChange={handlepasswordCheckChange}
                    placeholder="영문, 숫자, 특수문자를 조합하여 입력하세요.(8~16자)"
                    required
                    minlength="8"
                    maxlength="16"
                  />
                </StTextInput>
                {passwordCheckError && (
                  <StSmallFont
                    width
                    align="start"
                    fontSize="0.875rem"
                    weight="700"
                    color="red"
                  >
                    {passwordCheckError}
                  </StSmallFont>
                )}

                <StTextInput>
                  <StSmallFont
                    width
                    align="start"
                    fontSize="0.875rem"
                    weight="700"
                    marginBottom="10px"
                  >
                    인증번호
                  </StSmallFont>
                  <Input
                    type="text"
                    id="certification"
                    value={certification}
                    onChange={event => setCertification(event.target.value)}
                    placeholder="인증번호를 입력하세요."
                    required
                  />
                </StTextInput>
                <StLongButton type="submit">확인</StLongButton>
              </StFormBox>
            </StForm>
          </StLoginForm>
        </div>
      </StOverall>
    </StBackground>
  );
}

export default SignUpUser;
