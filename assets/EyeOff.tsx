import Icon, {
  CustomIconComponentProps,
} from "@ant-design/icons/lib/components/Icon";
import React from "react";

const EyeOffSVG = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.577092 0.483343C0.310822 0.749613 0.286622 1.16627 0.504472 1.45988L0.577092 1.544L4.61166 5.57857C2.68967 6.92804 1.25319 8.94357 0.656302 11.3281C0.555722 11.7299 0.799922 12.1372 1.20173 12.2378C1.60355 12.3383 2.01082 12.0942 2.11141 11.6923C2.64088 9.57717 3.94854 7.80314 5.69158 6.65819L7.50121 8.46797C6.7937 9.18947 6.35742 10.178 6.35742 11.2683C6.35742 13.4775 8.14828 15.2683 10.3574 15.2683C11.4478 15.2683 12.4362 14.832 13.1578 14.1245L19.0771 20.044C19.37 20.3369 19.8448 20.3369 20.1377 20.044C20.404 19.7778 20.4282 19.3611 20.2103 19.0675L20.1377 18.9834L14.0242 12.8692L14.0254 12.8677L12.8253 11.6698L9.95542 8.80047L9.95742 8.79967L7.07619 5.92149L7.07742 5.91967L5.94414 4.78916L1.63775 0.483343C1.34486 0.190453 0.869982 0.190453 0.577092 0.483343ZM8.56152 9.52917L12.0966 13.0643C11.6466 13.5001 11.0333 13.7683 10.3574 13.7683C8.97672 13.7683 7.85742 12.649 7.85742 11.2683C7.85742 10.5924 8.12566 9.97907 8.56152 9.52917ZM10.3574 3.76367C9.35712 3.76367 8.38652 3.91174 7.46851 4.18867L8.70552 5.42486C9.24132 5.31899 9.79382 5.26367 10.3574 5.26367C14.2805 5.26367 17.6673 7.94393 18.6045 11.6969C18.7049 12.0987 19.112 12.3431 19.5139 12.2428C19.9158 12.1424 20.1602 11.7353 20.0598 11.3334C18.9568 6.91639 14.9729 3.76367 10.3574 3.76367ZM10.5521 7.27295L14.3534 11.0737C14.2516 9.01677 12.6046 7.37131 10.5521 7.27295Z"
      fill="#657372"
    />
  </svg>
);

const EyeOffIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={EyeOffSVG} {...props} />
);

export default EyeOffIcon;
