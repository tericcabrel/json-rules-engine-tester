import React from "react";
// @ts-ignore
import { JsonEditor } from 'jsoneditor-react';

import 'jsoneditor-react/es/editor.min.css';

interface IEditorProps {
  content: object,
  onChange: (e: any) => void
}

const Editor: React.FC<IEditorProps> = ({ content, onChange }) => {
  return (
    <JsonEditor
      value={content}
      onChange={onChange}
      mode='code'
      modes={['code', 'form', 'text', 'tree', 'view', 'preview']}
    />
  );
};

export default Editor;
