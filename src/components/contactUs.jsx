import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'


const ContactUs = () => {

    // const [state, handleSubmit, reset] = useForm("contact-form");
    let env_form = process.env.NEXT_PUBLIC_FORM;
    let formEndpoint;
    if (env_form) {
        formEndpoint = 'https://formspree.io/f/' + env_form
    } else formEndpoint = 'https://formspree.io/f/mgegeejj'

    console.log(formEndpoint);

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null, company: null },
    });

    const [inputs, setInputs] = useState({
        company: '',
        email: '',
        message: '',
    });

    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                email: '',
                message: '',
                company: '',
            });
        } else {
            setStatus({
                info: { error: true, msg: msg },
            });
        }
    };


    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null, company: null },
        });
    };


    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: 'POST',
            url: formEndpoint,
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    'Thank you, your message has been submitted.',
                );
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
    };





    return (
        <div className="min-h-[100vh] flex flex-col justify-center pt-10  bg-black text-white items-center">
            <Image src="/images/logo.png" width={50} height={50} alt='logo' />
            <h2 className='text-4xl font-bold pt-5'>Contact Us</h2>

            <form id='contact-form'
                onSubmit={handleOnSubmit}

                className='flex flex-col gap-4 mt-16  px-10 lg:mt-20 min-w-full lg:min-w-[500px]'>
                <input
                    onChange={handleOnChange}
                    id='company' name='companyName' type='text'
                    placeholder='Company name'
                    value={inputs.company}
                    required maxLength={128}
                    className='bg-black border-2  rounded-3xl
                     text-white border-white pt-2 px-2 py-2  '
                />

                <input id='email' name='email' type='email'
                    value={inputs.email}
                    onChange={handleOnChange}

                    placeholder='Your E-mail' required maxLength={128}
                    className='bg-black border-2  rounded-3xl
                     text-white border-white pt-2 px-2 outline-none py-2
                     '
                />

                <textarea
                    id='message' name='message'
                    value={inputs.message}
                    onChange={handleOnChange}
                    className='bg-black border-2  rounded-3xl
                     text-white border-white pt-2 px-2 py-2  outline-none'
                    placeholder='Additional Information'
                    rows={10} maxLength={512}

                >

                </textarea>

                {/* <input
                    className='bg-white border-2 rounded-3xl
                     text-black border-white pt-2 px-2 py-2 mx-auto outline-none
                      w-40 mt-20'
                    type='submit' name='submit' id='submit'
                /> */}

                <button
                    className='bg-white border-2 rounded-3xl
                text-black border-white pt-2 px-2 py-2 mx-auto outline-none
                 w-40 mt-20'
                    type="submit" disabled={status.submitting}>
                    {!status.submitting
                        ? !status.submitted
                            ? 'Submit'
                            : 'Submitted'
                        : 'Submitting...'}
                </button>

            </form>

            {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </div>
    )
}

export default ContactUs