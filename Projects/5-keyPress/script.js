const div = document.querySelector('#insert')

window.addEventListener('keydown', (e) => {
  div.innerHTML = `
    <div class='key'>
      <table>
        <tr>
          <th>Key</th>
          <th>Key Code</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `
})
