import Button from "../../atoms/Button/Button";

export default function SocialButton({
                                         icon,
                                         text,
                                         className,
                                         onClick
                                     }) {
    return (

        <Button
            className={className}
            onClick={onClick}
        >
            {icon}
            <span className="social-label">
        {text}
      </span>

        </Button>

    );
}