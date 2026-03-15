import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

export default function FormField({
                                      label,
                                      type,
                                      id,
                                      placeholder
                                  }) {
    return (
        <div className="inp-group">

            <Label htmlFor={id}>
                {label}
            </Label>

            <Input
                id={id}
                type={type}
                placeholder={placeholder}
            />

        </div>
    );
}