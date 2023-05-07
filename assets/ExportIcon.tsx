import Icon, {
  CustomIconComponentProps,
} from "@ant-design/icons/lib/components/Icon";
import React from "react";

const ExportSVG = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.24992 1.5C2.28344 1.5 1.49996 2.2835 1.49996 3.25V14.75C1.49996 15.7165 2.28344 16.5 3.24992 16.5H14.7496C15.7161 16.5 16.4996 15.7165 16.4996 14.75V10.75C16.4996 10.3358 16.8354 10 17.2496 10C17.6638 10 17.9995 10.3358 17.9995 10.75V14.75C17.9995 16.5449 16.5445 18 14.7496 18H3.24992C1.45504 18 0 16.5449 0 14.75V3.25C0 1.45507 1.45504 0 3.24992 0H7.2498C7.664 0 7.9998 0.33579 7.9998 0.75C7.9998 1.16421 7.664 1.5 7.2498 1.5H3.24992ZM9.9997 0.75C9.9997 0.33579 10.3355 0 10.7497 0H17.25C17.6642 0 18 0.33579 18 0.75V7.25C18 7.6642 17.6642 8 17.25 8C16.8358 8 16.5 7.6642 16.5 7.25V2.56074L11.28 7.7804C10.9871 8.0732 10.5123 8.0732 10.2194 7.7803C9.9265 7.4874 9.9265 7.0125 10.2194 6.71964L15.4395 1.5H10.7497C10.3355 1.5 9.9997 1.16421 9.9997 0.75Z"
      fill="#657372"
    />
  </svg>
);

const ExportIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={ExportSVG} {...props} />
);

export default ExportIcon;