document.getElementById('changeThemeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

// You can expand this function to change more styles or elements.

document.getElementById("changePage").addEventListener("click", function() {
    // Specify the path to the "mh12" file based on its location
    var filePath = "maharana.html";  // Replace with the actual file path
  
    // Choose the appropriate action based on the file type:
  
    // If it's a web page:
    if (filePath.endsWith("maharana.html") || filePath.endsWith(".htm")) {
      window.location.href = filePath;
    }
  
    // If it's an image:
    else if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg") || filePath.endsWith(".png") || filePath.endsWith(".gif")) {
      var imageWindow = window.open(filePath, "_blank");
    }
  
    // If it's a text file:
    else if (filePath.endsWith(".txt") || filePath.endsWith(".rtf") || filePath.endsWith(".doc") || filePath.endsWith(".pdf")) {
      window.open(filePath, "_blank");
    }
  
    // If it's another file type:
    else {
      // Handle other file types as needed, potentially using a download mechanism
      alert("The file type is not supported for direct opening.");
    }
  });
  