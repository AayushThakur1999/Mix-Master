import axios from "axios";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);

    toast(response.data.msg);
    return redirect("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.msg || "Something went wrong");
    } else {
      toast.error("An unexpected error occurred");
    }
    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form
      method="POST"
      className="w-full mx-auto sm:w-3/5 bg-white shadow-lg rounded-md p-8 my-12"
    >
      <h2 className="text-center text-lg sm:text-2xl md:text-[28px] mb-4 tracking-wide">
        Our Newsletter
      </h2>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="text-sm mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="border-2 border-gray-200 rounded bg-slate-50 py-0.5 px-3"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="lastName" className="text-sm mb-2">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          className="border-2 border-gray-200 rounded bg-slate-50 py-0.5 px-3"
        />
      </div>
      <div className="flex flex-col mb-6">
        <label htmlFor="email" className="text-sm mb-2">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          defaultValue="test@test.com"
          required
          className="border-2 border-gray-200 rounded bg-slate-50 py-0.5 px-3"
        />
      </div>
      <button
        type="submit"
        className="bg-emerald-500 hover:bg-emerald-700 transition duration-300 text-white block w-full rounded-md py-0.5"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting" : "Submit"}
      </button>
    </Form>
  );
};
export default Newsletter;
