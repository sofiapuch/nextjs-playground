import "../styles/global.scss";
import "../styles/utils.module.scss";

import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

// Use the unoptimized prop for Next.js Images in Storybook
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}