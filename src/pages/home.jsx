import { Link } from "react-router-dom";
import MainLayout from "../layouts/mainLayout"
import btm from '/btm.png'
import shape from '/shape1.png'

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-black rounded-2xl h-full px-20 py-10 relative">
        <div className=" bg-white w-full h-full rounded-2xl bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
          <div class="absolute inset-0 bg-black bg-opacity-25"></div>

          <div className="font-poppins absolute mx-auto min-w-1 top-20 left-0 right-0 flex justify-center items-center gap-40">

            <ul className="flex gap-10 bg-white py-1 rounded-xl px-5">
              <li className="hover:bg-gray-200 p-2 rounded-md"><a href="">News</a></li>
              <li className="hover:bg-gray-200 p-2 rounded-md"><a href="">Blog</a></li>
              <li className="hover:bg-gray-200 p-2 rounded-md"><a href="">News</a></li>
              {/* <li className="hover:bg-gray-200 p-2 rounded-md"><a href="">Blog</a></li> */}
            </ul>

            <h1 className="font-poppins font-bold text-7xl text-white">SIC</h1>

            <ul className="flex gap-10 bg-white py-1 rounded-xl px-5">
              <li className="hover:bg-gray-200 p-2 rounded-md"><a href="">News</a></li>
              <li className="hover:bg-gray-200 p-2 rounded-md"><a href="">Blog</a></li>
              <li className="hover:bg-gray-200 p-2 rounded-md"><a href="">News</a></li>
              {/* <li className="hover:bg-gray-200 p-2 rounded-md"><a href="">Blog</a></li> */}
            </ul>
          </div>

          <div className="h-full flex justify-center items-center">
            <Link className="p-5 bg-[#DAE7F7] rounded-[66px] font-poppins text-xl font-medium hover:bg-[#dae7f7d6] z-10" to="/incubation">Get Started</Link>
          </div>

          <img className="absolute bottom-3 left-2" src={btm} alt="" />

          <div className="absolute bottom-0 justify-center flex-col pb-5">
            <div className="flex items-center gap-5">
              <h4 className="text-white text-[14px] font-poppins font-bold">Incubating your<br />dreams into reality</h4>
              <div className="border rounded-full flex items-center justify-center h-[30px] w-[30px] p-1.5">
                <svg className="h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
              </div>
            </div>
            <h1 className="text-white text-7xl font-poppins font-bold mt-10">Start Up</h1>
            <h1 className="text-white text-7xl font-poppins font-bold my-8 mt-10">Incubation Centre</h1>
          </div>

          <img className="absolute bottom-16 right-32" src={shape} alt="" />

          <div className="absolute bottom-16 right-40">
            <div className="flex items-center gap-3">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_41_57)">
                  <path d="M21.25 26.25V23.75C21.25 22.4239 20.7232 21.1521 19.7855 20.2145C18.8479 19.2768 17.5761 18.75 16.25 18.75H6.25C4.92392 18.75 3.65215 19.2768 2.71447 20.2145C1.77678 21.1521 1.25 22.4239 1.25 23.75V26.25M28.75 26.25V23.75C28.7492 22.6422 28.3804 21.566 27.7017 20.6904C27.023 19.8148 26.0727 19.1895 25 18.9125M20 3.9125C21.0755 4.18788 22.0288 4.81338 22.7095 5.69039C23.3903 6.5674 23.7598 7.64604 23.7598 8.75625C23.7598 9.86646 23.3903 10.9451 22.7095 11.8221C22.0288 12.6991 21.0755 13.3246 20 13.6M16.25 8.75C16.25 11.5114 14.0114 13.75 11.25 13.75C8.48858 13.75 6.25 11.5114 6.25 8.75C6.25 5.98858 8.48858 3.75 11.25 3.75C14.0114 3.75 16.25 5.98858 16.25 8.75Z" stroke="#171212" stroke-opacity="0.69" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_41_57">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h2 className="font-poppins font-semibold  text-[18px] leading-7 tracking-wide text-[#545459]">About us</h2>
            </div>
            <p className="font-poppins text-[15px] leading-[22.5px] tracking-wide mt-3 mb-8">
              Since 2018, we've been Uttarakhand's <br />
              first recognized incubator, driving <br />
              innovation and entrepreneurship. We <br />
              help overcome challenges, attract <br />
              talent and investment, and <br />
              strengthen the local <br />
              economy.
            </p>
          </div>

          {/* <div > */}
          <Link to="/about" className="absolute bottom-20 bg-[#D7E4F5] right-36 p-4 rounded-full cursor-pointer">
            <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.9952 2.09757C30.0491 1.54792 29.6472 1.05866 29.0976 1.00477L20.1405 0.126628C19.5909 0.0727409 19.1016 0.474636 19.0477 1.02429C18.9938 1.57393 19.3957 2.0632 19.9454 2.11709L27.9072 2.89766L27.1266 10.8595C27.0727 11.4091 27.4746 11.8984 28.0243 11.9523C28.5739 12.0062 29.0632 11.6043 29.1171 11.0546L29.9952 2.09757ZM1.63474 25.7727L29.6347 2.77273L28.3653 1.22727L0.365261 24.2273L1.63474 25.7727Z" fill="#171212" />
            </svg>
          </Link>
          {/* </div> */}
        </div>
      </div>
    </MainLayout>
  )
}