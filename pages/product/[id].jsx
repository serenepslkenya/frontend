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

import { Footer, Header } from "../../components";
import { useState } from "react";
import { useQuery } from "urql";
import { useRouter } from "next/router";

export default function Products() {
  const router = useRouter();

  console.log(router.query);

  const GET_PRODUCT = `
     query GET_PRODUCT(
        id: $ID!
     ){
      getProduct(
        id: $id
      ){
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
    query: GET_PRODUCT,
    variables: {
      id: null,
    },
  });

  if (fetching) return <p>Loading ....</p>;
  if (error) return <p>Error ..</p>;

  return (
    <div>
      <Header active="products" />

      <p className="w-full  text-center tracking-wide uppercase text-[1.2rem] text-black font-extrabold  ">
        Product
      </p>
      <div className="w-[70px] h-[4px] bg-[#d32131]  mx-auto" />

      {/* Modal content */}
      <div className="flex space-x-12 mt-12">
        <img src={data?.image} alt={data.getProduct?.name} className="h-full" />
        <div>
          <Breadcrumbs className="text-red-700">
            {[
              new String(data?.getProduct.category).toUpperCase(),
              new String(data?.getProduct.subCategory).toUpperCase(),
            ]}
          </Breadcrumbs>
          <Space h={20} />
          <h3 className="text-[1.5rem] mb-2">Features</h3>
          <Text c="dimmed">{data?.getProduct.description}</Text>
          <h3 className="text-[1.5rem] mb-2 mt-6">Technical Specifications</h3>
          <img
            src={data?.getProduct.specSheet}
            alt={data?.getProduct.name}
            className="w-full"
          />
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
        {/* <HoverCard.Dropdown>
          <Text>Products</Text>
          <div className="grid grid-cols-3 gap-8 p-6">
            {items.map((product, i) => (
              <Product data={product} key={i} />
            ))}
          </div>
        </HoverCard.Dropdown> */}
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
        size="80%"
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        title={<h2 className="text-[1.5rem]">{data?.name}</h2>}
        centered
      >
        {/* Modal content */}
        <div className="flex space-x-12 mt-12">
          <img src={data?.image} alt={data?.name} className="h-full" />
          <div>
            <Breadcrumbs className="text-red-700">
              {[
                new String(data?.category).toUpperCase(),
                new String(data?.subCategory).toUpperCase(),
              ]}
            </Breadcrumbs>
            <Space h={20} />
            <h3 className="text-[1.5rem] mb-2">Features</h3>
            <Text c="dimmed">{data?.description}</Text>
            <h3 className="text-[1.5rem] mb-2 mt-6">
              Technical Specifications
            </h3>
            <img src={data?.specSheet} alt={data?.name} className="w-full" />
            <div className="flex flex-row-reverse">
              <Button color="green" onClick={() => router.push("")}>
                Enquire
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
