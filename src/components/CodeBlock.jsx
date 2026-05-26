import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function CodeBlock({ code, language = 'css' }) {
  return (
    <div style={{ fontSize: 13 }}>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{ margin: 0, borderRadius: 0, padding: '16px 20px', fontSize: 13, lineHeight: 1.6 }}
        showLineNumbers={false}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}
