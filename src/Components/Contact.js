import React from 'react'

const Contact = () => {
  return (
    <div className="contact_sec">
        <main>
            <h1>Contact Us</h1>

            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='John Doe' />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='johndoe@gmail.com' />
                </div>

                <div>
                    <label>Message</label>
                    <input type="text-area" required placeholder='Tell us about your query..' />
                </div>

                <button>Submit</button>
            </form>
        </main>
    </div>
  )
}

export default Contact