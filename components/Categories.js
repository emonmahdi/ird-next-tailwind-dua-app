import SearchInput from "./ui/SearchInput";
import SingleCategoryCard from "./SingleCategoryCard";

const Categories = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const data = await res.json();
  // console.log(data);

  return (
    <>
      <div className="w-[429px]">
        <h2 className="font-bold mb-8">Dua Page</h2>
        <div className="bg-white h-[550px] overflow-auto rounded-lg">
          <h2 className="text-center text-white py-2 bg-[#1EA55E] rounded-t-lg">
            Category Page Data
          </h2>
          {/* <ul>
            {categories?.map((cat) => (
              <li key={cat?.id}>{cat?.cat_name_en}</li>
            ))}
          </ul> */}
          <div className="px-2">
            <SearchInput />
            <div className="single-cards">
              {/* <SingleCategoryCard />
              <SingleCategoryCard />
              <SingleCategoryCard /> */}
              <ul>
                {data?.map((category) => (
                  // <li key={cat?.id}>{cat?.cat_name_en}</li>
                  <SingleCategoryCard key={category?.id} category={category} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;

export async function getStaticPaths() {
  // Fetch category slugs from server
  const res = await fetch("http://localhost:5000/categories");
  const categories = await res.json();

  const paths = categories?.map((category) => ({
    params: { cat_name_en: category?.cat_name_en },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // Fetch category data based on slug
  const { slug } = params;
  const res = await fetch(`http://localhost:5000/categories/${slug}`);
  const category = await res.json();

  return {
    props: {
      category,
    },
  };
}
