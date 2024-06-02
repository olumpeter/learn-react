
import "./Toolbar.css"

export function Toolbar({ onPlayMovie, onUploadImage }) {
    function onPlayMovie() {
        return (
            alert("Playing")
        );
    }
    
    function onUploadImage() {
        return (
            alert("Uploading")
        );
    }

    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        </div>
    );
}

function Button({ onClick, children }) {
    return (
        <>
            <button className="button" onClick={onClick}>
                {children}
            </button>
        </>
    );
}
