import * as monaco from 'monaco-editor';
import React, { useRef, useEffect } from 'react';

const Editor = () => {
  const editorContainerRef = useRef(null);
  
  useEffect(() => {
    const editor = monaco.editor.create(editorContainerRef.current, {
      value: "// Welcome to your online IDE\nconsole.log('Hello World');",
      language: 'javascript',
      theme: 'vs-dark'
    });

    return () => editor.dispose(); // cleanup
  }, []);
  
  return <div ref={editorContainerRef} style={{ height: '90vh', width: '100%' }}></div>;
};

export default Editor;
