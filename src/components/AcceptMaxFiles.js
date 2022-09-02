import React from 'react';
import { useState } from 'react';
import {useDropzone} from 'react-dropzone';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AcceptMaxFiles(props) {
  let isUploaded= false;
  const [files, setFiles] = useState(false);
  const handleSize = (number) => {
      return Math.trunc((number/1024))
  }
  const {
    
    acceptedFiles,
    getRootProps,
    getInputProps
  } = useDropzone({    
    maxFiles:1,
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const acceptedFileItems = acceptedFiles.map((file) => (
    isUploaded = true,
    console.log(isUploaded),
      <div className='uploadedfile'>
        
        <FontAwesomeIcon icon={faCircleCheck} className="fontawesome"/>{file.path} , <small>{handleSize(file.size)} MB</small>
      </div>
    
  ));

  const acceptedImage = acceptedFiles.map((file) => (
      <img src={file.preview} alt={file.name} key={file.name}/>
      
));
  

 
 
  

  return (
  <>
    <div className="flex-items upload">
     
      {acceptedImage}
      {acceptedFileItems}
      <section className="container">
         <div className='header'>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</div>
        <div {...getRootProps({ className: 'dropzone' })}>
        <div >{(isUploaded)? "თავიდან ატვირთე" : " ატვირთე"}</div>
          <input {...getInputProps()} />
        </div>
          
      </section>
    </div>
    
  </>
  );
}

<AcceptMaxFiles />
export default AcceptMaxFiles

