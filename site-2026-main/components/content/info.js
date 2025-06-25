import InfoIcon from '@mui/icons-material/Info';

export default function Info({ children }) {
    return (
        <span className="flex flex-row p-3 bg-green-200 border border-green-600 rounded-lg">
            <InfoIcon />
            <div className="pl-2">
                {children}
            </div>
        </span>
    )
}