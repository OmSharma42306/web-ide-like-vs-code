import React, { useState } from 'react';
import { Tree } from 'antd';
import './Trs.css'; // Custom styles

const treeData = [
  {
    title: 'src',
    key: '0-0',
    children: [
      {
        title: 'App.jsx',
        key: '0-0-0',
      },
      {
        title: 'components',
        key: '0-0-1',
        children: [
          {
            title: 'Editor.jsx',
            key: '0-0-1-0',
          },
          {
            title: 'Trs.jsx',
            key: '0-0-1-1',
          },
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
      },
    ],
  },
  {
    title: 'package.json',
    key: '0-2',
  },
];

const Trs = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);

  const onSelect = (selectedKeys, info) => {
    console.log('Selected:', selectedKeys, info);
    setSelectedKeys(selectedKeys); // Track selected file
  };

  return (
    <Tree
      className="file-tree"
      showLine
      defaultExpandAll
      onSelect={onSelect}
      treeData={treeData}
      selectedKeys={selectedKeys} // Highlights the selected file
    />
  );
};

export default Trs;
