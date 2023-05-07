import Button from "antd/es/button";
import ArrowDownOutlined from "@ant-design/icons/lib/icons/ArrowDownOutlined";
import EyeOffIcon from "@/assets/EyeOff";
import DeleteIcon from "@/assets/DeleteIcon";
import ExportIcon from "@/assets/ExportIcon";
import VerticalAlignBottomOutlined from "@ant-design/icons/lib/icons/VerticalAlignBottomOutlined";
import FilePdfOutlined from "@ant-design/icons/lib/icons/FilePdfOutlined";
import ZoomOutOutlined from "@ant-design/icons/lib/icons/ZoomOutOutlined";
import ZoomInOutlined from "@ant-design/icons/lib/icons/ZoomInOutlined";
import Image from "next/image";
import ImageSample from "../assets/image-2.png";
import WeworkLogo2 from "../assets/wework-2.png";
import Badge from "antd/es/badge";
import MessageOutlined from "@ant-design/icons/lib/icons/MessageOutlined";
import ShareAltOutlined from "@ant-design/icons/lib/icons/ShareAltOutlined";
import Divider from "antd/es/divider";
import Space from "antd/es/space";
import styles from "./Content.module.scss";
import React from "react";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import List from "antd/es/list";
import theme from "antd/es/theme";

const sideBarData = [
  {
    title: "Welcome",
  },
  {
    title: "Product Capabilities",
  },
  {
    title: "Customer Success Stories",
  },
  {
    title: "File Sharing",
  },
  {
    title: "Our Deck",
  },
];

const TabContentPanel = () => {
  const { useToken } = theme;
  const { token } = useToken();
  return (
    <div className="flex">
      {/* Content Side Panel List */}
      <div className={styles.sidebar}>
        <List
          itemLayout="horizontal"
          dataSource={sideBarData}
          bordered
          style={{ background: "white", width: 200 }}
          header={
            <Text className={styles.header} strong>
              Overview
            </Text>
          }
          renderItem={(item, index) => (
            <List.Item>
              <Text
                style={{ color: token.colorTextTertiary }}
                className={styles.content}
              >
                {item.title}
              </Text>
            </List.Item>
          )}
        />
      </div>

      {/* Content Main */}
      <div className={styles.main}>

        {/* Top Actions */}
        <div className={styles.header}>
          <Title level={3}>Company Profile</Title>
          <Space
            size={1}
            split={<Divider type="vertical" />}
            className={styles.actions}
          >
            <Button type="text" icon={<ArrowDownOutlined />} />
            <Button
              type="text"
              icon={<EyeOffIcon style={{ fontSize: 16 }} />}
            />
            <Button
              type="text"
              icon={<DeleteIcon style={{ fontSize: 16 }} />}
            />
          </Space>
        </div>

        {/* Main Actions */}
        <div className={styles.imageContainer}>
          <Image
            src={ImageSample}
            style={{ objectFit: "cover", borderRadius: 10 }}
            fill
            alt="image-sample"
          />
          <Space
            size={1}
            split={<Divider type="vertical" />}
            className={`${styles.actions} ${styles.image}`}
          >
            <Space>
              <Button type="text" icon={<FilePdfOutlined />} />
              <Title
                level={5}
                style={{ marginBottom: 0, color: token.colorTextTertiary }}
              >
                1/15
              </Title>
            </Space>
            <Button type="text" icon={<VerticalAlignBottomOutlined />} />
            <Button type="text" icon={<ZoomOutOutlined />} />
            <Button type="text" icon={<ZoomInOutlined />} />
            <Button type="text" icon={<ExportIcon />} />
          </Space>
          <Space
            className={styles.logoContainer}
            size={16}
            direction="vertical"
          >
            <div className={styles.imageLogo}>
              <Image
                alt="wework"
                src={WeworkLogo2}
                style={{ objectFit: "contain" }}
                fill
              />
            </div>
            <Title style={{ color: "black" }} level={4}>
              For all the ways you work, we&apos;re here
            </Title>
          </Space>
        </div>

        {/* Bottom Actions */}
        <div className={`${styles.actions} ${styles.bottom}`}>
          <Space size={5} split={<Divider type="vertical" />}>
            <Button
              type="text"
              icon={
                <Badge
                  size="small"
                  style={{ fontSize: 12 }}
                  color="green"
                  count={6}
                >
                  <MessageOutlined />
                </Badge>
              }
            />
            <Button type="text" icon={<ShareAltOutlined />} />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default TabContentPanel;
