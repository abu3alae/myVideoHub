import React, {useState} from "react";
import Layout from "../../components/Layout.tsx";
import {Link} from "react-router-dom";
import {AuthFormData} from "../../types.ts";

const SignUp :React.FC = () => {
    const [formData, setFormData] = useState<AuthFormData>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

    }

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        console.log(formData.email, formData.password)
    }

    return <Layout>
        <div className="flex items-center justify-center w-full p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>
                <form className="space-y-7" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm "
                            value={formData.email} onChange={handleChange} type="email" name="email" id="email" placeholder="Enter your email" required/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm "
                            value={formData.password} onChange={handleChange} type="password" name="password" id="password" placeholder="Enter your password" required/>
                    </div>

                    <button className="w-full py-3 px-4 bg-green-300 text-white font-bold rounded-md shadow-md transition duration-300 disabled:cursor-not-allowed flex items-center justify-center" type="submit">Sign Up</button>
                </form>

                <Link to={'/sign-in'} className="inline-block mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-all duration-300">Login if you have an account</Link>

            </div>
        </div>
    </Layout>;
}

export default SignUp;