'use client';
import { useLayoutEffect } from 'react';
import { fetchHtml } from './index';

const Page = () => {
  useLayoutEffect(() => {
    fetchHtml();
  }, []);
  return <div id="gjs"></div>;
};

export default Page;
