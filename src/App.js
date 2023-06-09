import './App.css';
import Image from './images/image-qr-code.png'

function App() {
  return (
    <div className="App">
      <div id="containerDiv" className="w-full h-screen flex flex-col justify-center items-center bg-slate-200 px-[23px]">
        <div id="cardDiv" className='flex flex-col items-center pt-[15px] px-[15px] rounded-[20px] bg-white mb-[50%]'>
          <div id="imageDiv" className='pb-[35px]'>
            <img src={Image} alt='qr code' className='rounded-[20px]'/>
          </div>
          <div id="textDiv" className='flex flex-col items-center justify-center'>
            <div id="headlineDiv" className='flex justify-center pb-[15px]'>
              <p className='font-black text-2xl'>Improve your front-end skills by building projects</p>
            </div>
            <div id="sublineDiv" className='flex justify-center pb-[35px]'>
              <p className='text-[hsl(212,45%,89%)] font-black text-[15px] max-w-[80%]'>
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </div>
        </div>

        <div className="attribution text-[11px] text-center">
          Challenge by{" "}
          <a className='text-[hsl(228,45%,44%)]' href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a className='text-[hsl(228,45%,44%)]' href="https://github.com/roodhouse">roodhouse</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
