
export default function SubmissionPage() {
  async function submitStory(formData: FormData) {
    'use server';

    console.log(formData)

  }

  return (
    <main>
      <div>Submission Page</div>
      <form action={submitStory}>
        <input type="text" name="title" placeholder="Story Title" /> 
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
