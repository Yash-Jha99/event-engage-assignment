"use client";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import ConfigProvider, { ThemeConfig } from "antd/es/config-provider";
import Head from "next/head";
import Content from "@/components/Content";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorSplit: "#D3D7D7",
    fontSizeIcon: 16,
    fontWeightStrong: 700,
    colorTextHeading: "#233735",
    colorBgBase: "#f2fbf9",
    colorPrimary: "#00B686",
    colorText: "#657372",
    colorTextBase: "#04433B",
    colorTextSecondary: "#233735",
    colorTextTertiary: "#7B8786",
    fontFamily: "Proxima Nova",
  },
  components: {},
};

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/proxima-nova-2"
          rel="stylesheet"
        />
      </Head>
      <ConfigProvider theme={theme}>
        <main className={styles.main}>
          <Navbar
            name="Jane Smith"
            role="Sales Executive"
            image="https://xsgames.co/randomusers/avatar.php?g=male"
          />
          <Banner
            title="WeWork + Salesforce"
            onPublish={() => console.log("Publish Button Clicked")}
          />
          <Content />
        </main>
      </ConfigProvider>
    </>
  );
}
