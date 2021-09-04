import React, {useCallback} from 'react'
import Dropzone from 'react-dropzone'

export default function DropImage({ setUpload, upload }) {
    if (upload == "") {
      return (
        <Dropzone onDrop={(acceptedFiles) => setUpload(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section
            
          className={window.location.pathname === '/ip-sales/generate-form' ? "dropZone-border" : "dropZone-designer"}
            >
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>
      );
    } else {
      // console.log(upload[0]);
      return (
        <div
          onClick={() => setUpload(" ")}
          className={window.location.pathname === '/ip-sales/generate-form' ? "dropZone-border" : "dropZone-designer"}
        >
          <h5>Image Selected</h5>
        </div>
      );
    }
  }