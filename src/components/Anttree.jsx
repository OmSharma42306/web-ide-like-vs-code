import React from 'react';
import { Tree } from 'antd';
import 'antd/dist/antd.css';

const treeData = [
  {
    title: 'src',
    key: '0-0',
    children: [
      {
        title: 'App.js',
        key: '0-0-0',
      },
      {
        title: 'components',
        key: '0-0-1',
        children: [
          {
            title: 'Header.js',
            key: '0-0-1-0',
          },
          {
            title: 'Footer.js',
            key: '0-0-1-1',
          }
        ],
      },
    ],
  },
  {
    title: 'public',
    key: '0-1',
    children: [
      {
        title: 'index.html',
        key: '0-1-0',
      }
    ],
  }
];

const Anttree = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  return (
    <Tree
      showLine
      defaultExpandAll
      onSelect={onSelect}
      treeData={treeData}
    />
  );
};

export default Anttree;
