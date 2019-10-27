<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="main.css">
  <title>Compare VINs</title>
</head>
<body>
  <div class="container">
    <header>
      <h1>Compare Two VINs</h1>
      <p>Copy/paste Option Codes from Vehicle Build</p>
    </header>
    <main>
      <form action="">
        <div class="row">
          <div class="form_element">
            <label for="vinData1">Vehicle 1</label>
            <textarea name="vinData1" id="vinData1" cols="30" rows="10"></textarea>
          </div>
      
          <div class="form_element">
            <label for="vinData2">Vehicle 2</label>
            <textarea name="vinData2" id="vinData2" cols="30" rows="10"></textarea>
          </div>
        </div>

        <div class="row buttons">
          <button id="compareButton" type="button">Compare</button>
          <button id="clearButton" type="button">Clear</button>
        </div>
      </form>
    
      <div id="results"></div>
    </main>
  </div>

  <script src="main.js"></script>

</body>
</html>
