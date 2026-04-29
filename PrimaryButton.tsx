interface Props {
    children: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    type?: "button" | "submit" | "reset"

}

const PrimaryButton: React.FC<Props> = ({ disabled, children, onClick, type = 'button' }) => {

    if (type === 'submit') {
        return (
            <button
                type='submit'
                disabled={disabled}
                className="h-fit w-full relative inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white hover:text-primary bg-primary shadow-sm hover:bg-secondary hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-75">
                <span>{children}</span>
            </button>
        )
    }

    return (
        <button
            type='button'
            onClick={onClick}
            className="h-fit w-fit relative inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white hover:text-primary bg-primary shadow-sm hover:bg-secondary hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-75"
        >
            <span>{children}</span>
        </button>
    )
}

export default PrimaryButton