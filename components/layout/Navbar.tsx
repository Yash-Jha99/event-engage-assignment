import React, { useState } from "react";
import MenuIcon from "@/assets/menu.svg";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Space from "antd/es/space";
import Avatar from "antd/es/avatar";
import BellOutlined from "@ant-design/icons/lib/icons/BellOutlined";
import QuestionCircleOutlined from "@ant-design/icons/lib/icons/QuestionCircleOutlined";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";
import styles from "./Navbar.module.scss";
import Drawer from "antd/es/drawer";
import Button from "antd/es/button";
import Divider from "antd/es/divider";
import Badge from "antd/es/badge";
import Typography from "antd/es/typography";
import List from "antd/es/list";
import MailIcon from "@/assets/MailIcon";
import CloseOutlined from "@ant-design/icons/lib/icons/CloseOutlined";
import theme from "antd/es/theme";

const { Text } = Typography;

const data = [
  {
    Icon: SearchOutlined,
    title: "Search",
  },
  {
    Icon: MailIcon,
    title: "Inbox",
  },
  {
    Icon: BellOutlined,
    title: "Notifiactions",
  },
  {
    Icon: QuestionCircleOutlined,
    title: "Help",
  },
];

type Props = {
  name: string;
  role: string;
  image: string;
};

const Navbar = ({ name, image, role }: Props) => {
  const [open, setOpen] = useState(false);
  const { useToken } = theme;
  const { token } = useToken();

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={styles.navbar}>
        <Space size={8}>
          <Image src={Logo} alt="logo" width={38} height={38} />
          <RightOutlined style={{ fontSize: 12, color: "black" }} />
        </Space>
        <Space className={styles.navItems} size={36} align="center">
          {data.map((item) => (
            <item.Icon
              key={item.title}
              style={{ fontSize: 24, color: token.colorText }}
            />
          ))}
          <Avatar size={44} src={image} />
        </Space>
        <Button
          className={styles.showbtn}
          type="text"
          onClick={() => setOpen(true)}
        >
          <Image src={MenuIcon} alt="mail" width={26} height={26} />
        </Button>
      </div>

      <Drawer
        className={styles.sidepanel}
        placement="right"
        width="100%"
        open={open}
        closable={false}
      >
        <Space className={styles.sidePanelBody} size={36} direction="vertical">
          <div className={styles.closebtn}>
            <Button type="text" onClick={onClose}>
              <CloseOutlined style={{ fontSize: 16 }} />
            </Button>
          </div>
          <div>
            <Space>
              <Avatar size={44} src={image} />
              <Space size={2} direction="vertical">
                <Text strong className={styles.name}>
                  {name}
                </Text>
                <Text className={styles.role}>{role}</Text>
              </Space>
            </Space>
            <Divider className={styles.divider} />
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      item.title === "Notifications" ? (
                        <Badge count={25}>
                          <item.Icon style={{ fontSize: 24 }} />
                        </Badge>
                      ) : (
                        <item.Icon style={{ fontSize: 24 }} />
                      )
                    }
                    title={
                      <a className={styles.links} href={`/${item.title}`}>
                        {item.title}
                      </a>
                    }
                  />
                </List.Item>
              )}
            />
          </div>
        </Space>
      </Drawer>
    </>
  );
};

export default Navbar;
