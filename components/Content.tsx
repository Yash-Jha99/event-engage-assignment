import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import styles from "./Content.module.scss";
import React, { ReactNode, useState } from "react";
import theme from "antd/es/theme";
import Space from "antd/es/space";
import Progress from "antd/es/progress";
import Tabs from "antd/es/tabs";
import TabContentPanel from "./TabContentPanel";

type Props = {};

type Tab = { key: string; label: string; children: ReactNode };

const tabData: Tab[] = [
  {
    key: "1",
    label: "Basic Info",
    children: <TabContentPanel />,
  },
  {
    key: "2",
    label: "Files",
    children: <Title level={2}>Files</Title>,
  },
  {
    key: "3",
    label: "Mutual Action Plan",
    children: <Title level={2}>Mutual Action Plan</Title>,
  },
  {
    key: "4",
    label: "Contact",
    children: <Title level={2}>Contact</Title>,
  },
  {
    key: "5",
    label: "Internal Actions",
    children: <Title level={2}>Internal Actions</Title>,
  },
];

const Content = (props: Props) => {
  const [percent, setPercent] = useState<number>(3);
  const [activeTab, setActiveTab] = useState<string>("1");
  const { useToken } = theme;
  const { token } = useToken();

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div>
      {/* Content Top Bar */}
      <div className={styles.topBar}>
        <Title level={3}>Project Scope Recap</Title>
        <Space direction="vertical" size={0}>
          <div className={styles.progress}>
            <Text>Mutual Action Plan</Text>
            <Text style={{ color: token.colorPrimary }}>{`${percent}%`}</Text>
          </div>
          <div className={styles.progressbar1}>
            <Progress
              gapDegree={2}
              size={[10, 8]}
              strokeLinecap="round"
              strokeColor={token.colorPrimary}
              percent={percent}
              steps={17}
              showInfo={false}
            />
          </div>
          <div className={styles.progressbar2}>
            <Progress
              gapDegree={1}
              size={[6, 5]}
              strokeLinecap="round"
              strokeColor={token.colorPrimary}
              percent={percent}
              steps={17}
              showInfo={false}
            />
          </div>
        </Space>
      </div>

      {/* Content Tabs */}
      <div className={styles.tabs}>
        <Tabs
          tabBarStyle={{ borderRadius: 0 }}
          onChange={onChange}
          activeKey={activeTab}
          type="card"
          items={tabData}
          tabBarGutter={7}
        />
      </div>
    </div>
  );
};

export default Content;
