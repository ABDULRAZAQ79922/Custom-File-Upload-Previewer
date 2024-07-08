document.getElementById('myFileInput').addEventListener('change', function(event) {
    const myFileInput = event.target;
    const myFileName = document.getElementById('myFileName');
    const myPreviewContainer = document.getElementById('myPreviewContainer');
    const myFilePreview = document.getElementById('myFilePreview');
    const myProgressBar = document.getElementById('myProgressBar');
  
    const myFile = myFileInput.files[0];
    if (myFile) {
      myFileName.textContent = myFile.name;
  
      const myReader = new FileReader();
      myReader.onload = function(e) {
        myFilePreview.src = e.target.result;
        myPreviewContainer.style.display = 'block';
        myProgressBar.style.width = '0%';
        simulateUpload(myProgressBar);
      }
      myReader.readAsDataURL(myFile);
    } else {
      myFileName.textContent = 'Choose a file';
      myPreviewContainer.style.display = 'none';
    }
  });
  
  function simulateUpload(myProgressBar) {
    let myProgress = 0;
    const myInterval = setInterval(function() {
      if (myProgress >= 100) {
        clearInterval(myInterval);
      } else {
        myProgress += 10;
        myProgressBar.style.width = myProgress + '%';
      }
    }, 300);
  }
  