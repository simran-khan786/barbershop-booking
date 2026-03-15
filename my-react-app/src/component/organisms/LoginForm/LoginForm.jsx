import Logo from "../../atoms/Logo/Logo";
import Button from "../../atoms/Button/Button";
import Divider from "../../atoms/Divider/Divider";
import Link from "../../atoms/Link/Link";

import FormField from "../../molecules/FormField/FormField";
import RememberRow from "../../molecules/RememberRow/RememberRow";
import SocialButton from "../../molecules/SocialButton/SocialButton";

export default function LoginForm() {

    const handleSignIn = () => {
        alert("Signing In...");
    };

    const handleGoogle = () => {
        alert("Google Login");
    };

    const handleFacebook = () => {
        alert("Facebook Login");
    };

    return (

        <div className="form-wrap">

            {/* Logo */}
            <Logo />

            {/* Title */}
            <h1 className="sign-in-title">Sign In</h1>
            <p className="sign-in-sub">
                Access your account below.
            </p>

            {/* Email */}
            <FormField
                label="Email Address"
                type="email"
                id="email"
                placeholder="you@example.com"
            />

            {/* Password */}
            <FormField
                label="Password"
                type="password"
                id="password"
                placeholder="••••••••"
            />

            {/* Remember Row */}
            <RememberRow />

            {/* Sign In Button */}
            <Button
                className="btn-signin"
                onClick={handleSignIn}
            >
                SIGN IN →
            </Button>

            {/* Divider */}
            <Divider text="or continue with" />

            {/* Social Buttons */}
            <div className="social-buttons">

                <SocialButton
                    className="btn-social btn-google"
                    text="Continue with Google"
                    onClick={handleGoogle}
                />

                <SocialButton
                    className="btn-social btn-facebook"
                    text="Continue with Facebook"
                    onClick={handleFacebook}
                />

            </div>

            {/* Footer */}
            <div className="form-footer">
                Don't have an account?{" "}
                <Link href="#">
                    Register →
                </Link>
            </div>

        </div>

    );
}