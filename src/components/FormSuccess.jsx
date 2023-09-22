export default function FormSuccess({ firstName, onReset }) {

    return (
        <div>
            <h2>Woohoo!</h2>
            <p>Thanks for reaching out{firstName}. I will get back to you soon.</p>
            <button 
              className="mt-2 px-5 py-2 font-san-serif fw-normal text-uppercase text-decoration-none wide-tracking border border-2 border-dark rounded-pill bg-transparent"
              onClick={onReset}
            >
                Submit Another Form
            </button>
        </div>
    )
}