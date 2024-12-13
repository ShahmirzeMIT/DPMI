import { useState } from "react";
import SearchInput from "../../reusable/SearchInput";
import FilterTopicProgress from "./FilterTopicProgress";

export default function Courses() {
  const emailChange = (e: { name: string; value: string }) => {
    console.log(e, "email");
    setEmail((prev) => ({
      ...prev,
      value: e.value, 
    }));
  };

  const [email, setEmail] = useState({
    name: "email",
    value: "",
    label: "Search",
    required: true,
    message: "Please input your email!",
    onChange: emailChange,
    status: false,
  });

  return (
    <div>
      <SearchInput data={email} />
      <FilterTopicProgress/>
    </div>
  );
}
