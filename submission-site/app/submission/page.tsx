export default function SubmissionPage() {
  return (
    <main className="container w-full pt-10 px-4 mx-auto mb-10 md:max-w-3xl">
        <div className="error-message bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-4 hidden" role="alert">
            <p className="font-bold">An Error Occurred</p>
            <p className="error-description"></p>
        </div>

        <h1 className="text-4xl mb-3">Submit Story For Summer 2026</h1>
        <div className="mt-4 mb-4 p-4 bg-gray-100">
            <h2 className="mb-1 ">
                Submission is currently paused for maintenance. Please come back in a few days to submit your story. 
            </h2>
        </div>

    </main>
  );
}