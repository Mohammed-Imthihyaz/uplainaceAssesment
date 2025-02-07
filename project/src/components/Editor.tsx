import React, { useState, useEffect } from 'react';
import { Bold, Italic, Underline, List, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export function Editor() {
  const { state, dispatch } = useAppContext();
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setContent(savedContent);
      dispatch({ type: 'SET_EDITOR_CONTENT', payload: savedContent });
    }
  }, []);

  const handleCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  const handleChange = (e: React.FormEvent<HTMLDivElement>) => {
    const newContent = e.currentTarget.innerHTML;
    setContent(newContent);
    dispatch({ type: 'SET_EDITOR_CONTENT', payload: newContent });
    localStorage.setItem('editorContent', newContent);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex gap-2 mb-4 border-b pb-2">
        {[
          { icon: Bold, command: 'bold' },
          { icon: Italic, command: 'italic' },
          { icon: Underline, command: 'underline' },
          { icon: List, command: 'insertUnorderedList' },
          { icon: AlignLeft, command: 'justifyLeft' },
          { icon: AlignCenter, command: 'justifyCenter' },
          { icon: AlignRight, command: 'justifyRight' },
        ].map(({ icon: Icon, command }) => (
          <button
            key={command}
            onClick={() => handleCommand(command)}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
      <div
        contentEditable
        className="min-h-[200px] p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onInput={handleChange}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}