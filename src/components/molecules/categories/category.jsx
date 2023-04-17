import { CategoryItemWrapper, Card } from "./styles";

export function Category({ category }) {
  const { name, icon } = category;
  return (
    <CategoryItemWrapper>
      <Card>
        <figure>
          {icon}
          </figure>
      </Card>
      <figcaption>{name}</figcaption>
    </CategoryItemWrapper>
  );
}

export default Category;
