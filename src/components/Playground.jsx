import CodeBlock from './CodeBlock'

export default function Playground({ title, code, controls, children, language, minHeight = 260 }) {
  return (
    <div className="playground">
      <div className="playground-header">
        <span className="playground-dot" />
        {title}
      </div>
      <div className="playground-body">
        <div className="playground-controls">
          {controls}
        </div>
        <div className="playground-preview" style={{ minHeight }}>
          {children}
        </div>
        {code && (
          <div className="playground-code">
            <CodeBlock code={code} language={language} />
          </div>
        )}
      </div>
    </div>
  )
}
