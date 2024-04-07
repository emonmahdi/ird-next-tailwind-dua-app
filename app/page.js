import Categories from "@/components/Categories";
import axios from "axios";

export default async function Home() {
  const res = await fetch("http://localhost:5000/categories");
  const data = await res.json();

  // console.log(data);
  return (
    <main>
      <h3 className="text-2xl text-green-500">This is Home Page...</h3>
      <div>
        {/* {data?.map((category) => (
          <Categories key={category?.id} category={category} />
          // <>
          //   <p key={category.id}>{category?.cat_name_bn}</p>
          //   <p key={category.id}>{category?.cat_name_en}</p>
          // </>
        ))} */}
      </div>
    </main>
  );
}

/* export const getStaticProps = async () => {
  const { data } = await axios.get("http://localhost:5000/categories");

  return {
    props: {
      categories: data,
    },
    revalidate: 10, // In seconds - Adjust as needed
  };
}; */
