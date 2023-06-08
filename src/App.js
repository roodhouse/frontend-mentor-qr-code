import './App.css';

function App() {
  return (
    <div className="App">
      <div id="containerDiv" class="w-full h-screen bg-slate-200">
        <div id="cardDiv">
          <div id="imageDiv"></div>
          <div id="textDiv">
            <div id="headlineDiv">
              <p>Improve your front-end skills by building projects</p>
            </div>
            <div id="sublineDiv">
              <p>
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </div>
        </div>

        <div className="attribution text-[11px] text-center">
          Challenge by{" "}
          <a className='text-[#3e52a3]' href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a className='text-[#3e52a3]' href="https://github.com/roodhouse">roodhouse</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
