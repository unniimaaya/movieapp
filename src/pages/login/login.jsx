import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../../utils/user";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate()


console.log("user",users);
const login =()=>{
 if(users.username === userName && users.password === password){
    navigate("/dashboard")
 }
}

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
            <div className="d-flex justify-content-center">
          <div className="col-xl-4 col-lg-4">
            <h4 style={{ color:"white" }}>Login</h4>
            <div className="card border">
                <div className="mt-5  align-items-center">
              <Form
              
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                autoComplete="off"
              onFinish={login}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input  onChange={(e)=>{
                    setUserName(e.target.value)
                  }}/>
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}/>
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                 
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
