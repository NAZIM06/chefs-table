import React from 'react';
import { AiOutlineDownload } from "react-icons/ai";
import html2pdf from 'html2pdf.js';

const Blog = () => {

    const downloadAsPdf = () => {
        const url = window.location.href;
        const options = {
          margin: 0.5,
          filename: 'blog.pdf',
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };
        html2pdf().set(options).from(url).save();
      };
    return (
        <>
            <div className='py-10 mx-0'>
                <div>
                <button className='m-auto flex items-center text-xl font-semibold py-3 px-4 border-2 rounded-md bg-red-600 text-white' onClick={downloadAsPdf}>Download PDF<AiOutlineDownload className='h-6 w-6 ml-3' /></button></div>

            </div>
            <div className=" font-serif m-7">

                <h2 className=" text-center text-5xl my-5 font-extrabold text-black mb-5">Answer of 4 Questions</h2>

                <div className='text-left text-xl'>
                    <h3 className='font-semibold mt-5'>1. The differences between uncontrolled and controlled components.</h3>
                    <p className='text-red-500 mx-4'> <li>Controlled components use React state to manage the input's value. This gives us more control over the input's behavior and allow us to perform additional validation or manipulation of the input's value.</li>
                <li>Uncontrolled components let the browser handle the input's value. They are simpler to use and require less code, but offer less control and flexibility.</li></p>
                    <h3 className='font-semibold mt-5'>2. How to validate React props using PropTypes?</h3>
                    <p className='text-red-500 mx-4'>React PropTypes is a tool that help us check if the data are passing into a component is the correct type and format. It's like a spell-checker that prevents us from making mistakes. By using PropTypes, we can catch errors and bugs early in the development process, which can save us time and effort in the long run.
                    </p>
                    <h3 className='font-semibold mt-5'>3. The difference between nodejs and express js.</h3>
                    <p className='text-red-500 mx-4'>
                    <li>Node.js is a runtime environment for JavaScript, while Express.js is a web application framework built on top of Node.js.</li>
                <li>Node.js provides core features for building server-side applications, while Express.js provides additional features for building web applications and APIs</li>
                <li>Node.js can be used to build a wide range of server-side applications, while Express.js is primarily used for building web applications and APIs.</li></p>
                    <h3 className='font-semibold mt-5'>4. What is a custom hook, and why will you create a custom hook?</h3>
                    <p className='text-red-500 mx-4'>A custom hook is a function in React that allows us to reuse stateful logic between components, making it easier to create reusable and composable code.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;