import React from "react";
// @ts-ignore
import { JsonEditor } from 'jsoneditor-react';
import ace from 'brace';

import 'brace/mode/json';
import 'brace/theme/github';
import 'jsoneditor-react/es/editor.min.css';

interface IEditorProps {
  content: object,
  onChange: (e: any) => void
}

const Editor: React.FC<IEditorProps> = ({ content, onChange }) => {
  return (
    <div id="jsr-editor">
      <JsonEditor
        tag="div"
        value={content}
        onChange={onChange}
        ace={ace}
        theme="ace/theme/github"
        mode='code'
        allowedModes={['code', 'form', 'text', 'tree', 'view']}
      />
    </div>
  );
};

export default Editor;
