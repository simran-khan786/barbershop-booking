export default function Checkbox({ id, label }) {
    return (
        <label className="remember-label">
            <input type="checkbox" id={id} />
            {label}
        </label>
    );
}