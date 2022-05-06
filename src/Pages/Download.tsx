import { Button } from "@statflo/textkit-ui-library";
import { useStorage } from "../providers/StorageProvider";
import { downloadObjectAsJson } from "../utils/files";

export default function Download() {
    const { state } = useStorage();

    const downloadFile = () => {
        downloadObjectAsJson(state, 'TextKit-Playground-Configuration');
    }

    return (
        <div className="inline-block min-w-full align-middle space-y-6">
            <div className="ring-1 ring-gray-spacer sm:-mx-6 md:mx-0 md:rounded-lg bg-white overflow-hidden shadow-md p-6">
                <h1 className="text-xl font-semibold text-gray-default">
                    Download
                </h1>
                <p className="mt-2 text-sm text-gray-default">
                    Download the TextKit Playground configuration file to use on another instance.
                </p>
                <p className="mt-6 flex items-center justify-center">
                    <Button onClick={downloadFile}>
                        Download configuration
                    </Button>
                </p>
            </div>
        </div>
    )
}