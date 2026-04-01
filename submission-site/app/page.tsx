export default function HomePage() {
  return (
    <main>
      <p className="w-full py-6 px-4 med:text-lg italic text-center bg-gray-100">
          Recognizing and Celebrating Young Authors Since 2006!
      </p>
        <div className="relative flex items-center bg-fixed bg-center bg-no-repeat bg-cover hero-header">
    <div className="flex bg-blue-600 bg-opacity-80 h-full w-full justify-center align-items-center">
      <div className="flex flex-row items-center med:w-3/5 med:max-w-3xl px-5 ">
        <div className="flex-grow text-center ">

          <p className="main-title mt-8 mb-10 text-2xl md:text-7xl text-white uppercase">
            The Betty Award
          </p>

          <p className="mt-8 mb-8 med:mb-14 md:text-xl text-white uppercase">
            A writing contest for kids ages 8-12
          </p>


          <p className="mt-2 mb-2 text-white">
                        The Betty Award has a Winter, Spring, Summer, and Fall Contest. See below for more details!
                    </p>

          <p className="mt-2 mb-2 text-white">
            Enter now for the Summer 2026 contest!
          </p>
          <p className="mt-2 mb-2 text-white">
            The deadline is June 1, 2026.
          </p>

          <div className="flex justify-center mt-8">
            <div className="max-w-2xl rounded-md shadow">
              <a href="/submission"
                className="flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-pink-600 border border-transparent rounded-md hover:bg-pink-700 md:py-4 md:text-lg md:px-10">
                Submit Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    </main>
  );
}
