export default function AboutUsPage() {
    return (

<main className="container w-full px-4 pt-10 mx-auto mb-10 md:max-w-3xl">
    <h1 className="text-4xl mb-4">
        About
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="col-span-2">
            <p className="mb-4">
                Our contest was established in honor of my grandmother, Betty,
                who inspired a passion for writing in each of her children and
                grandchildren.
            </p>
            <p>
                Since then we have expanded our mission,
                with Betty's inspiration at our core,
                to create opportunities for children to share children's
                imagination and creativity.
            </p>
        </div>

        <div>
            <h2 className="mb-1 font-bold uppercase">Check Us Out On</h2>
            <ul className="list-inside">
                <li className="mb-2">
                    <img width="50" height="50" className="inline" src="https://d30tirrb1lsi4u.cloudfront.net/public/pencil_logo.jpg" />
                    <a href="https://www.tckpublishing.com/writing-contests-for-kids/" className="text-blue-600 underline hover:text-blue-400">TK Publishing</a>
                </li>
                <li className="mb-2">
                    <img width="50" height="50" className="inline" src="https://d30tirrb1lsi4u.cloudfront.net/public/pencil_logo.jpg" />
                    <a href="https://imaginationsoup.net/writing-contests-kids-ways-get-published/" className="text-blue-600 underline hover:text-blue-400">Imagination Soup</a>
                </li>
                <li className="mb-2">
                    <img width="50" height="50" className="inline" src="https://d30tirrb1lsi4u.cloudfront.net/public/pencil_logo.jpg" />
                    <a href="https://www.publishyouth.com/post/the-betty-award-prose-poetry-contest-for-youth" className="text-blue-600 underline hover:text-blue-400">Check out our interview with Publish YOUth</a>
                </li>
            </ul>
        </div>

    </div>

</main>


    );
};