import React, { useState } from 'react';
import { Button, Typography,Link } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
function TimeLineInfo() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setSelectedFiles([...selectedFiles, ...Array.from(files)]);
    }
  };

  const removeFile = (fileIndex) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(fileIndex, 1);
    setSelectedFiles(updatedFiles);
  };

  const uploadFiles = () => {
    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        // Display the file name and upload time
        console.log(`File Name: ${file.name}`);
        console.log(`Upload Time: ${new Date().toLocaleString()}`);
        // You can perform your file upload logic here
      });
    }
  };

  return (
    <div style={{marginLeft:'700px',marginTop:'300px'}}>
      <input
        type="file"
        style={{ display: 'none' }}
        id="fileInput"
        multiple
        onChange={handleFileChange}
      />
      <label htmlFor="fileInput">
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          Upload Files
        </Button>
      </label>
      {selectedFiles.length > 0 && (
        <div>
          <Typography variant="h6">Selected Files:</Typography>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>
              <Link
                  href={URL.createObjectURL(file)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {file.name}
                </Link>{' '}
                -{' '}

                <span>
                  Upload Time: {new Date().toLocaleString()}
                </span>{' '}
                -{' '}
              {' '}
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => removeFile(index)}
                >
                  Remove
                </Button>
                <br/>
              </li>
            
            ))}
          </ul>
       
        </div>
      )}
    </div>
  );
}

export default TimeLineInfo;
