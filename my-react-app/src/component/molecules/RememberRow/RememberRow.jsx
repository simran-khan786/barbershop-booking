import Checkbox from "../../atoms/Checkbox/Checkbox";
import Link from "../../atoms/Link/Link";

export default function RememberRow() {
    return (
        <div className="remember-row">

            <Checkbox label="Remember me" />

            <Link href="#" className="forgot-link">
                Forgot password?
            </Link>

        </div>
    );
}