import "./index.css"

export default function Component({ children, className, style = {} }) {
    return (
        <div className={`box ${className}`} style={style}>
            {children}
        </div>
    );
}