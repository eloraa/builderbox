import '@/assets/stylesheets/toastr.min.css';
import '@/assets/stylesheets/grapes.min.css';
import '@/assets/stylesheets/grapesjs-preset-webpage.min.css';
import '@/assets/stylesheets/tooltip.css';
import '@/assets/stylesheets/demos.css';
import Script from 'next/script';
import * as React from 'react';
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>GrapesJS Demo - Free Open Source Website Page Builder</title>
      <meta content="Best Free Open Source Responsive Websites Builder" name="deScription" />
      <link href="https://unpkg.com/grapick/dist/grapick.min.css" rel="stylesheet" />

      <Script src="/js/toastr.min.js"></Script>
      <Script src="/js/grapes.min.js?v0.21.8"></Script>
      <Script src="https://unpkg.com/grapesjs-preset-webpage@1.0.2"></Script>
      <Script src="https://unpkg.com/grapesjs-blocks-basic@1.0.1"></Script>
      <Script src="https://unpkg.com/grapesjs-plugin-forms@2.0.5"></Script>
      <Script src="https://unpkg.com/grapesjs-component-countdown@1.0.1"></Script>
      <Script src="https://unpkg.com/grapesjs-plugin-export@1.0.11"></Script>
      <Script src="https://unpkg.com/grapesjs-tabs@1.0.6"></Script>
      <Script src="https://unpkg.com/grapesjs-custom-code@1.0.1"></Script>
      <Script src="https://unpkg.com/grapesjs-touch@0.1.1"></Script>
      <Script src="https://unpkg.com/grapesjs-parser-postcss@1.0.1"></Script>
      <Script src="https://unpkg.com/grapesjs-tooltip@0.1.7"></Script>
      <Script src="https://unpkg.com/grapesjs-tui-image-editor@0.1.3"></Script>
      <Script src="https://unpkg.com/grapesjs-typed@1.0.5"></Script>
      <Script src="https://unpkg.com/grapesjs-style-bg@2.0.1"></Script>
      {/* <Script src="/index.js"></Script> */}
      {children}
    </>
  );
};
export default layout;
