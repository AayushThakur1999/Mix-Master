import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }: { searchTerm: string }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="w-full md:w-3/5 p-8 bg-white mt-12 mb-24 mx-auto grid grid-cols-[1fr_auto] shadow-md hover:shadow-xl transition duration-300">
      <input
        type="search"
        name="search"
        className="px-3 py-1 rounded-l-md rounded-r-none bg-slate-100 border border-gray-300 w-full outline-offset-0"
        defaultValue={searchTerm}
      />
      <button
        type="submit"
        className="bg-emerald-500 text-white tracking-wide px-3 py-1 rounded-r-md rounded-l-none hover:bg-emerald-700 transition duration-300"
      >
        {isSubmitting ? "Searching..." : "Search"}
      </button>
    </Form>
  );
};
export default SearchForm;
