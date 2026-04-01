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

  
  <div className="grid grid-cols-1 md:grid-cols-bg-pink-6002 gap-2 mx-auto max-w-7xl mt-2">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 col-span-2 ">

          <div className="">
              <img 
                   className="h-full"
                   src="https://d30tirrb1lsi4u.cloudfront.net/public/site2.jpg"
                   alt=""/>
          </div>
            <div className="p-8 bg-blue-600">
                <h2 className="mb-1 text-xl font-bold text-white uppercase">The upcoming deadlines are as follows:</h2>
                <p className="text-white text-sm mb-2">
                    Summer 2026 Contest deadline is June 1, 2026. Winners will be announced on July 31, 2026.
                </p>
                <p className="text-white text-sm mb-2">
                    Fall 2026 Contest deadline is October 3, 2026. Winners will be announced on November 1, 2026.
                </p>
                <p className="text-white text-sm mb-2">
                    Winter 2027 Contest deadline is January 9, 2027. Winners will be announced on March 1, 2027.
                </p>
                <p className="text-white text-sm mb-2">
                    Spring 2027 Contest deadline is April 3, 2027. Winners will be announced on May 29, 2027.
                </p>
            </div>


          <div className="hidden md:block">
              <img className="h-full" src="https://d30tirrb1lsi4u.cloudfront.net/public/site1.jpg" alt=""/>
          </div>

          <div className=" text-center bg-pink-600 py-14">
              <h2 className="mb-3 text-3xl font-bold text-white uppercase">
                  Prizes
                  <i aria-hidden="true" className="fas fa-award"></i>
              </h2>
              <div className="mb-2 text-xl text-white uppercase">1st - $300 usd</div>
              <div className="mb-2 text-xl text-white uppercase">2nd - $200 usd</div>
              <div className="mb-2 text-xl text-white uppercase">3rd - $100 usd</div>
              <div className="mb-2 text-white mx-2">All prizes are distributed electronically via Zelle, Venmo, or mailed to contestant upon request.</div>
          </div>
      </div>

      <div className="flex flex-row col-span-2 bg-gray-200 justify-center py-5">
          <div className="px-4 py-8 md:px-8">
              <h1 className="mb-2 text-3xl font-extrabold uppercase text-pink-600">
                  <i aria-hidden="true" className="fas fa-medal"></i>
                  The Winter 2026 Winners Are
                  <i aria-hidden="true" className="fas fa-medal"></i>
              </h1>

              <div className="py-3">
                    <div className="font-bold">1st Place:  Finley Adamson</div>
                          <div className="underline text-blue-601 hover:text-blue-400 story">
                        <a href="https://betty-awards-uploads-prod.s3.us-east-2.amazonaws.com/The+Dive%2C+Winter+2025+FIRST+PLACE.pdf" target="_blank">The Dive</a>
                          </div>
                      </div>
              <div className="py-3 ">
                    <div className="font-bold">2nd Place: Charles Cheung</div>
                          <div className="underline text-blue-601 hover:text-blue-400">
                        <a href="https://betty-awards-uploads-prod.s3.us-east-2.amazonaws.com/Whiskers+on+the+Silk+Road.pdf" target="_blank">Whiskers on the Silk Road</a>
                          </div>
                      </div>

              <div className="py-3">
                    <div className="font-bold">3rd Place: Harley G Gallagher</div>
                          <div className="underline text-blue-601 hover:text-blue-400">
                        <a href="https://betty-awards-uploads-prod.s3.us-east-2.amazonaws.com/Daphne+(A+Greek+Mythology+Story)+WINTER+2025+THIRD+PLACE.pdf" target="_blank">Daphne (A Greek Mythology Story)</a>
                          </div>
                    </div>
            
          </div>
      </div>


      <div className="grid sm:grid-cols-1 md:grid-cols-3 col-span-2 gap-2 mb-2">

          <div className="px-4 py-8 md:px-8 bg-gray-200">
              <h2 className="mb-1 text-xl font-bold uppercase text-blue-600">How To Enter</h2>
              <p className="mb-4">
                  To enter, simply fill out our {" "}
                  <a href="#" className="text-blue-600 underline hover:text-blue-400">
                      online
                      form.
                  </a>
              </p>
          </div>

          <div className="px-4 py-8 md:px-8 bg-gray-200">
              <h2 className="mb-1 text-xl font-bold uppercase text-blue-600">Reading Fee</h2>
              <p>
                  There is a $20 US reading fee per story. <br />
                  We accept all major credit and debit cards. Please reach out with any questions on our <a href="/contact-us">contact page.</a>
              </p>
          </div>

          <div className="px-4 py-8 md:px-8 bg-gray-200">
              <h2 className="mb-1 text-xl font-bold uppercase text-blue-600">Publication</h2>
              <p>
                  The Winter 2026 winners will be announced on our website and social media accounts on March 1, 2026. 
              </p>
          </div>
      </div>

      </div>
    </main>

  );
}
