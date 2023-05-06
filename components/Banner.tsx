import Button from "antd/es/button";
import Title from "antd/es/typography/Title";
import styles from "./Banner.module.scss";
import BannerImage from "../assets/banner.png";
import WeworkLogo from "../assets/wework-1.png";
import SalesforceLogo from "../assets/salesforce.png";
import React from "react";
import Image from "next/image";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import Space from "antd/es/space";

type Props = {
  title: string;
  onPublish: () => void;
};

const Banner = ({ title, onPublish }: Props) => {
  return (
    <div>
      <div className={styles.top}>
        <Title className={styles.title} level={2}>
          {title}
        </Title>
        <Button type="primary" onClick={onPublish}>
          Publish/Share
        </Button>
      </div>
      <div className={styles.banner}>
        <Image src={BannerImage} fill alt="banner" />
        <div className={styles.imageText}>
          <p>Workspace Proposal</p>
        </div>
        <div className={styles.logos}>
          <Space size={14}>
            <Image src={WeworkLogo} width={77} height={77} alt="wework" />
            <PlusOutlined />
            <Image
              src={SalesforceLogo}
              width={98}
              height={88}
              alt="salesforce"
            />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Banner;
