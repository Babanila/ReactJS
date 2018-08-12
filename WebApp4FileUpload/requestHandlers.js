const querystring = require("querystring"),
      fs = require("fs"),
      formidable = require("formidable");

start = (response) => {
  console.log("Request handler 'start' was called.");

      let body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<h1>Welcome</h1>'+
    '<h3>Bio-Data</h3>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<p>Name:<input type="name" />'+
    '<p>Surname:<input type="surname" />'+
    '<p><input type="file" name="upload">'+
    '<p><input type="submit" value="Upload file" />'+
    '<p>Comment'+
    '<p><textarea name="text" rows="5" cols="20"></textarea>'+
    '</form>'+
    '</body>'+
    '</html>';

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(body);
  response.end();
}

upload = (response, request) => {
  console.log("Request handler 'upload' was called.");

  let form = new formidable.IncomingForm();
  console.log("about to parse");

  form.parse(request, (error, fields, files) => {
    console.log("parsing done");

    /* Possible error on Window systems: tried to rename
    to an already existing file */
    fs.rename(files.upload.path, "/tmp/images1.png", (error) => {
      if (error) {
        fs.unlink("/tmp/images1.png");
        fs.rename(files.upload.path, "/tmp/images1.png");
      }
    });

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("received image: <br/>");
  response.write("<img src='/show' />");
  response.end();
  });
}

show = (response) => {
  console.log("Request handler 'show' was called.");
  fs.readFile("/tmp/images1.png", "binary", (error, file) => {
    if (error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
