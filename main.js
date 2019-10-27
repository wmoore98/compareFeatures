{
}
const compareButton = document.getElementById('compareButton');
const clearButton = document.getElementById('clearButton');
const vinData1 = document.getElementById('vinData1');
const vinData2 = document.getElementById('vinData2');
const results = document.getElementById('results');

function parseInput(inputData) {
  const result = inputData
    .split('\n')
    .map(row => row.split('\t'))
    .flat();
  return result;
}

function formatDifferences(differences) {
  let result = `
  <table>
    <thead>
      <tr>
        <th>Vehicle 1</th>
        <th>Vehicle 2</th>
      </tr>      
    </thead>
    <tbody>
    `;

  differences.forEach(row => {
    result += `
      <tr class='table-data-row'>
        <td>${row[0] ? row[0] : '---'}</td>
        <td>${row[1] ? row[1] : '---'}</td>
      </tr>      
      `;
  });

  result += `
    </tbody>
  </table>
  `;

  return result;
}

function compareInputs() {
  const parsedData1 = parseInput(vinData1.value);
  const parsedData2 = parseInput(vinData2.value);

  parsedData1.sort();
  parsedData2.sort();

  const differences = [];
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < parsedData1.length && idx2 < parsedData2.length) {
    const value1 = parsedData1[idx1];
    const value2 = parsedData2[idx2];
    if (value1 === value2) {
      // console.log('same', value1, value2);
      idx1++;
      idx2++;
    } else {
      if (value1 < value2) {
        differences.push([value1, '']);
        console.log('<--', value1);
        idx1++;
      } else {
        differences.push(['', value2]);
        console.log('-->', value2);
        idx2++;
      }
    }
  }

  while (idx1 < parsedData1.length) {
    const value1 = parsedData1[idx1];
    differences.push([value1, '']);
    console.log('<--', value1);
    idx1++;
  }

  while (idx2 < parsedData2.length) {
    const value2 = parsedData2[idx2];
    differences.push(['', value2]);
    console.log('-->', value2);
    idx2++;
  }

  results.innerHTML = formatDifferences(differences);
}

function clearInputs() {
  vinData1.value = '';
  vinData2.value = '';
  results.innerHTML = '';
}

compareButton.addEventListener('click', compareInputs);
clearButton.addEventListener('click', clearInputs);
