export default function Button({ children, className, onClick, type="button" }) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
}