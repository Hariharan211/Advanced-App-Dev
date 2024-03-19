import { Layout, Menu } from "antd";
import { useState } from "react";
import { Link } from 'react-router-dom';
import '../assets/css/sidebar.css'
import {
  UserOutlined,
  PhoneOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  FileProtectOutlined,
  FileTextOutlined,
  DashboardOutlined,
  BarChartOutlined,
  HomeOutlined
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;
 
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);


  const onCollapse = (isCollapsed) => { // Rename the parameter to avoid shadowing
    setCollapsed(!isCollapsed); // Use the state setter function

    };
  

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => onCollapse(collapsed)}
      style={{ backgroundColor: "#303A61"}}
      theme="dark"
    >
    <div>
    
  </div>
      <div
        className="logo"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {!collapsed ? (
          <img  />
        ) : (
          <img width="25" />
        )}
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
      <div
        className="custom-trigger"
        onClick={() => onCollapse(collapsed)}
        style={{
          color: "black",
          fontSize: "18px", // Adjust the icon size if needed
          cursor: "pointer", // Add pointer cursor for interaction
          textAlign: "center",
          marginBottom: "20px",
          marginTop: "20px"
        }}
      >
        {collapsed ? <span>▶</span> : <span>◀</span>}
      </div>
        <Menu mode="inline" style={{ backgroundColor: "303A61" }} theme="dark">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DashboardOutlined />}>
            <Link to="/dashboard">jobs</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<BarChartOutlined  />}>
          <Link to="/Postjob">Recruiters</Link>
        </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <Link to="/aboutus">About</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<PhoneOutlined/>}>
            <Link to="/contactus">Contact</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<MessageOutlined />}>
            <Link to="/feedback">Feedback</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<QuestionCircleOutlined/>}>
            <Link to="/Faq">FAQ</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<FileTextOutlined/>}>
            <Link to="/Terms">Terms and Conditions</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<FileProtectOutlined/>}>
            <Link to="/policy">Privacy Policy</Link>
          </Menu.Item>
          
        </Menu>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ marginBottom: 70 }}
          color="black"
        >
         
        </Menu>
      </div>
      
    </Sider>
  );
}