import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-10'>
            <div className='bg-white py-6 px-16'>
                <h2 className='text-2xl font-bold mb-4'>1. What is Context API?</h2>
                <p>Context API is used to share data directly from one component to any component without props drilling. To use Context API first we need to create it with <span className='text-red-600 font-mono font-bold text-lg'>createContext()</span> . Then we need to pass the value through a Provider to all the child components. After that, we can access the value by using <span className='text-red-600 font-mono font-bold text-lg'>useContext()</span> from any child component. We can pass a single value, an array, state, event handler, etc. by Context API.</p>
            </div>
            <div className='bg-white py-6 px-16 mt-10'>
                <h2 className='text-2xl font-bold mb-4'>2. What is Semantic Tag?</h2>
                <p>HTML5 comes with some semantic tags upgrading from HTML4. The semantic tag is the meaningful tag. Therefore, these tags help to rank sites better on search engines. By using semantic tags, code will more understandable for programmers also. There are many Semantic tags in HTML5 like; header, section, nav, article, aside, etc. These tags indicate a specific element container that is more readable.</p>
            </div>

            <div className='bg-white py-6 px-16 my-10'>
                <h2 className='text-2xl font-bold mb-4'>3. Difference between Inline, Block & Inline-Block elements</h2>
                <table className='table-auto border-2 w-full'>
                    <thead className='bg-blue-200'>
                        <tr className=''>
                            <th className='border'>Inline</th>
                            <th className='border'>Block</th>
                            <th className='border'>Inline-Block</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-gray-100 hover:bg-blue-300'>
                            <td className='border'>Always starts on a new line</td>
                            <td className='border'>Do not start on a new line</td>
                            <td className='border'>Elements will be on the same line</td>
                        </tr>

                        <tr className='hover:bg-blue-300'>
                            <td className='border'>Always takes up the full width available</td>
                            <td className='border'>Only takes up as much width as necessary</td>
                            <td className='border'>Width and height are adjustable</td>
                        </tr>

                        <tr className='bg-gray-100 hover:bg-blue-300'>
                            <td className='border'>Has top and bottom margin</td>
                            <td className='border'>Does not support top and bottom margin</td>
                            <td className='border'>The top and bottom margin/padding are adjustable</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;