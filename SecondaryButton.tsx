interface Props {
    children: React.ReactNode
    onClick?: () => void
    type?: "button" | "submit" | "reset"

}

const SecondaryButton: React.FC<Props> = ({ children, onClick, type = 'button' }) => {

    if (type === 'submit') {
        return (
            <button
                type={type}
                className="h-fit w-full relative inline-flex justify-center px-4 py-2 border border-primary text-sm font-medium rounded-lg text-primary hover:text-fuchsia-50 bg-fuchsia-50 shadow-sm hover:bg-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <span>{children}</span>
            </button>
        )
    }

    return (
        <button
        type={type}
        className="h-fit w-full relative inline-flex justify-center px-4 py-2 border border-primary text-sm font-medium rounded-lg text-primary hover:text-fuchsia-50 bg-fuchsia-50 shadow-sm hover:bg-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
        <span>{children}</span>
    </button>
    )
}

export default SecondaryButton