"use client";
import Banner from "@/components/Banner";
import Navbar from "@/components/layout/Navbar";
import styles from "./page.module.scss";
import ConfigProvider, { ThemeConfig } from "antd/es/config-provider";
import Head from "next/head";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#00B686",
    colorText: "#657372",
    colorTextBase: "#04433B",
    colorTextTertiary: "#233735",
    colorTextSecondary: "#7B8786",
  },
  components: {},
};

export default function Home() {
  return (
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
      </main>
    </ConfigProvider>
  );
}
