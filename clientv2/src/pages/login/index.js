import React from 'react';
import { Form, Input, Button, Checkbox, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "./login.css";
import useAuth from '../../services/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
	const onFinish = values => {
		console.log('Received values of form: ', values,from,location);
    auth.signin(values.username, ()=>{
      navigate(from, {replace:true});
    })
	  };
	return (
		<Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
			<Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/#">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/#">register now!</a>
      </Form.Item>
    </Form>
		</Row>
	);
};

export default Login;