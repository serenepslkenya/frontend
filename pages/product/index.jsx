import {
  Anchor,
  Badge,
  Breadcrumbs,
  Button,
  Card,
  Divider,
  Group,
  HoverCard,
  Input,
  Menu,
  Modal,
  NavLink,
  Space,
  Text,
} from "@mantine/core";
import { IconSearch, IconStar } from "@tabler/icons";
import { Footer, Header } from "../../components";
import { useState } from "react";
import { useQuery } from "urql";
import { useRouter } from "next/router";

export default function Products() {
  const [keyword, setKeyword] = useState("");
  const [_subcat, setSubCat] = useState("");
  const [_cat, setCat] = useState("");

  const GET_PRODUCTS = `
     query GET_PRODUCTS{
      getProducts{
        id
        name
        category
        subCategory
        image
        specSheet
        description
        removed
      }
    }
  `;

  const [{ data, fetching, error }, reexecuteQuery] = useQuery({
    query: GET_PRODUCTS,
    requestPolicy: "cache-and-network",
  });

  function getUniqueCategoriesAndSubcategories(arr) {
    const result = [];

    // Create an object to store categories and their subcategories
    const categoryMap = {};

    // Iterate over each object in the array
    arr.forEach((obj) => {
      const { category, subCategory } = obj;

      // If the category doesn't exist in the categoryMap, create an entry for it
      if (!categoryMap[category]) {
        categoryMap[category] = [];
      }

      // Push the subcategory into the array for the corresponding category
      categoryMap[category].push(subCategory);
    });

    // Convert the categoryMap object into an array of objects with category and subcategories properties
    for (const category in categoryMap) {
      result.push({
        category: category,
        subcategories: categoryMap[category],
      });
    }

    return result;
  }

  if (fetching) return <p>Loading ....</p>;
  if (error) return <p>Error ..</p>;

  return (
    <div>
      <Header active="products" />

      <div className="w-full flex max-h-[100vh] overflow-y-auto">
        <div className="space-y-2 w-[20%] bg-gray-100 sticky py-10">
          <NavLink
            label={`ALL PRODUCTS (${data?.getProducts.length})`}
            onClick={() => {
              setCat("");
              setSubCat("");
            }}
          />
          {getUniqueCategoriesAndSubcategories(data?.getProducts).map(
            (item, i) => (
              <NavLink
                label={new String(item?.category).toUpperCase()}
                childrenOffset={28}
                onClick={() => {
                  setCat(new String(item?.category).toUpperCase());
                  setSubCat("");
                }}
                key={i}
              >
                <div className="space-y-2">
                  {item?.subcategories.map((subcategory, i) => (
                    <Category
                      onClick={() =>
                        setSubCat(new String(subcategory).toUpperCase())
                      }
                      label={new String(subcategory).toUpperCase()}
                      items={data?.getProducts.filter((product) => {
                        return (
                          product?.category == item?.category &&
                          product?.subCategory == subcategory
                        );
                      })}
                    />
                  ))}
                </div>
              </NavLink>
            )
          )}
        </div>
        <div className="w-[80%]">
          <p className="w-full  text-center tracking-wide uppercase text-[1.2rem] text-black font-extrabold  ">
            Products
          </p>
          <div className="w-[70px] h-[4px] bg-[#d32131]  mx-auto" />
          <Space h={40} />
          <div className="flex justify-between px-4">
            <Breadcrumbs className="text-red-700">
              {_cat && _subcat
                ? ["PRODUCTS", _cat, _subcat]
                : _cat
                ? ["PRODUCTS", _cat]
                : ["PRODUCTS"]}
            </Breadcrumbs>
            <Input
              variant="filled"
              icon={<IconSearch size={16} />}
              placeholder="Search"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <Space h={40} />
          <div
            className="grid grid-cols-4 px-12 gap-12 mb-12"
            style={{ zIndex: -99 }}
          >
            {data?.getProducts
              .filter((product) => {
                if (_cat) {
                  return product?.category
                    .toLowerCase()
                    .includes(_cat.toLowerCase());
                } else if (_cat && _subcat) {
                  return (
                    product?.category
                      .toLowerCase()
                      .includes(_cat.toLowerCase()) &&
                    product?.subCategory
                      .toLowerCase()
                      .includes(_subcat.toLowerCase())
                  );
                } else {
                  return product;
                }
              })
              .filter((product) => {
                if (
                  product?.name.toLowerCase().includes(keyword.toLowerCase()) ||
                  product?.category
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                  product?.subCategory
                    .toLowerCase()
                    .includes(keyword.toLowerCase())
                ) {
                  return product;
                } else if (!keyword) {
                  return product;
                }
              })
              .map((product, i) => (
                <Product data={product} key={i} refresh={reexecuteQuery} />
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const Category = ({ label, items, onClick }) => {
  return (
    <div>
      <HoverCard width={700} shadow="md" position="right" zIndex={99}>
        <HoverCard.Target>
          <NavLink label={`${label}`} onClick={onClick} />
        </HoverCard.Target>
      </HoverCard>
    </div>
  );
};

const Product = ({ data }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Card
        w={"100%"}
        className="hover:scale-110 hover:text-blue-600 hover:cursor-pointer"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        onClick={() => setModalOpen(true)}
      >
        <Card.Section>
          <img
            src={`${data?.image}`}
            height="100%"
            width="100%"
            alt={data?.name}
          />
        </Card.Section>
        <Text weight={500}>{data?.name}</Text>
      </Card>

      <Modal
        size="90%"
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title={<h2 className="text-[1.5rem]">{data?.name}</h2>}
        centered
      >
        {/* Modal content */}
        <div className="flex space-x-12 mt-12">
          <div className="w-1/3">
            <img src={data?.image} alt={data?.name} className="w-full" />
          </div>
          <div className="w-2/3">
            <Breadcrumbs className="text-red-700">
              {[
                new String(data?.category).toUpperCase(),
                new String(data?.subCategory).toUpperCase(),
              ]}
            </Breadcrumbs>
            <Space h={20} />
            <h3 className="text-[1.5rem] mb-2">Features</h3>
            <Text c="dimmed" fz="sm" fw="lighter">
              {data?.description}
            </Text>
            <h3 className="text-[1.5rem] mb-2 mt-6">
              Technical Specifications
            </h3>
            <img src={data?.specSheet} alt={data?.name} className="w-full" />
            <div className="flex flex-row-reverse">
              <Button
                color="green"
                onClick={() =>
                  router.push(
                    `https://wa.me/254748920306?text=Hello%2CI%20would%20like%20to%20enquire%20about%20this%20product%20%3A%20http%3A%2F%2Flocalhost%3A3000%2Fproduct%2F${data?.id}`
                  )
                }
              >
                Enquire
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
