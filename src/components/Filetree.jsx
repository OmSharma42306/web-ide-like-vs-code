import React from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

const FileTree = () => {
  const [treeData, setTreeData] = React.useState([
    { title: 'index.html', children: [] },
    { title: 'src', children: [{ title: 'main.js' }, { title: 'styles.css' }] }
  ]);

  return (
    <div style={{ height: '90vh' }}>
      <SortableTree
        treeData={treeData}
        onChange={newTreeData => setTreeData(newTreeData)}
      />
    </div>
  );
};

export default FileTree;
