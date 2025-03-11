// Event listener for file selection
function updateFileName() {
  const fileInput = document.getElementById('fileUpload');
  const fileSelected = document.getElementById('fileSelected');
  fileSelected.innerText = fileInput.files[0] ? fileInput.files[0].name : 'No file chosen';
}

// Upload functionality
document.getElementById('uploadButton').addEventListener('click', async () => {
  const fileInput = document.getElementById('fileUpload');
  if (fileInput.files.length === 0) {
    alert('Please choose a file to upload.');
    return;
  }

  const formData = new FormData();
  formData.append('files', fileInput.files[0]);

  // Determine the correct docId based on the file type
  const fileName = fileInput.files[0].name;
  const fileExtension = fileName.split('.').pop().toLowerCase();
  let docId;

  if (fileExtension === 'docx') {
    docId = '92303852-1fd6-4d39-853b-50ab110dd93b'; // Word files
  } else if (fileExtension === 'pdf') {
    docId = '4bdfa39d-d89f-40c2-bdaa-4878db2ca8aa'; // PDF files
  } else if (fileExtension === 'txt') {
    docId = '1a00d8ab-fab5-495d-97d9-c71096b97ae6'; // TXT files
  } else if (fileExtension === 'csv') {
    docId = 'c380c2bd-ea4c-453b-995b-7057facd2432'; // Csv files
  } else {
    docId = 'd0be5479-12ba-4b47-aa51-6b1c8b9d815e'; // Unstructured File Loader for other formats
  }

  formData.append('docId', docId);

  try {
    const response = await fetch(`http://localhost:3000/api/v1/document-store/upsert/c2ae8571-f74a-47e6-a1ab-f78ae8c1a92e`, {
      method: 'POST',
      headers: {
        Authorization: 'LHKaTv8U9IrIyifEzeryTfjiKRxsO26dL-1P6Cj70hE',
      },
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Upload successful:', result);
      alert('File uploaded successfully!');
    } else {
      const error = await response.json();
      console.error('Upload failed:', error);
      alert('Upload failed: ' + error.message);
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    alert('Error uploading file: ' + error.message);
  }
});
