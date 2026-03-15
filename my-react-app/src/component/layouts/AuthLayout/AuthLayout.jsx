export default function AuthLayout({ children }) {
    return (

        <div>

            {/* Topbar */}
            <div className="topbar">
                <div className="topbar-left"></div>
                <div className="topbar-right"></div>
            </div>

            {/* Main Page Area */}
            <div className="page">
                {children}
            </div>

        </div>

    );
}