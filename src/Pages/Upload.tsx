import { Button } from "@statflo/textkit-ui-library";
import React from "react";
import { useStorage } from "../providers/StorageProvider";
import { handleFileSelect } from "../utils/files";

export default function Upload() {
    const { dispatch } = useStorage();

    const handleUploadFile = (e: React.FormEvent<HTMLInputElement>) => {
        const input = e.currentTarget;
        handleFileSelect(e, (data) => {
            const payload = JSON.parse(data);
            dispatch({
                type: 'load',
                payload
            })
        });
        input.value = '';
    }

    return (
        <div className="inline-block min-w-full align-middle space-y-6">
            <div className="ring-1 ring-gray-spacer sm:-mx-6 md:mx-0 md:rounded-lg bg-white overflow-hidden shadow-md p-6">
                <h1 className="text-xl font-semibold text-gray-default">
                    Import
                </h1>
                <p className="mt-2 text-sm text-gray-default">
                    Upload a configuration file from another instance of the TextKit Playground.
                </p>
                <p className="mt-6 flex items-center justify-center">
                    <input id="uploadFile" className="absolute w-0 h-0" type="file" name="file" onChange={handleUploadFile} />
                    <Button type="button" onClick={() => {
                        document.getElementById('uploadFile')?.click();
                    }}>
                        Import configuration
                    </Button>
                </p>
            </div>
        </div>
    )
}